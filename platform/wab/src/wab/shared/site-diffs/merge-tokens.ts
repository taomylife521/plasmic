import { removeFromArray } from "@/wab/commons/collections";
import {
  mkTokenRef,
  MutableStyleToken,
  OverrideableStyleToken,
  replaceAllTokenRefs,
} from "@/wab/commons/StyleToken";
import { unreachable } from "@/wab/shared/common";
import { extractTokenUsages } from "@/wab/shared/core/styles";
import {
  ensureKnownStyleTokenRef,
  Site,
  StyleToken,
} from "@/wab/shared/model/classes";

export function fixDuplicatedRegisteredTokens(mergedSite: Site) {
  const tokensByRegKey: Record<string, StyleToken[]> = {};
  mergedSite.styleTokens.forEach((t) => {
    if (t.regKey) {
      const tokensList = tokensByRegKey[t.regKey] ?? [];
      tokensList.push(t);
      tokensByRegKey[t.regKey] = tokensList;
    }
  });
  Object.values(tokensByRegKey).forEach((tokens) => {
    const toToken = tokens[0];
    tokens.slice(1).forEach((duplicatedToken) => {
      replaceToken(mergedSite, duplicatedToken, toToken);
      removeFromArray(mergedSite.styleTokens, duplicatedToken);
    });
  });
}

function replaceToken(site: Site, fromToken: StyleToken, toToken: StyleToken) {
  const usages = extractTokenUsages(site, fromToken)[0];
  for (const usage of usages) {
    if (usage.type === "rule") {
      usage.rs.values[usage.prop] = replaceAllTokenRefs(
        usage.value,
        (tokenId: string) =>
          tokenId === fromToken.uuid ? mkTokenRef(toToken) : undefined
      );
    } else if (
      usage.type === "styleToken" ||
      usage.type === "styleTokenOverride"
    ) {
      const token =
        usage.type === "styleToken"
          ? usage.styleToken
          : usage.styleTokenOverride;
      if (
        token instanceof MutableStyleToken ||
        token instanceof OverrideableStyleToken
      ) {
        token.setValue(
          replaceAllTokenRefs(token.value, (tokenId: string) =>
            tokenId === fromToken.uuid ? mkTokenRef(toToken) : undefined
          )
        );
      }
    } else if (usage.type === "variantedValue") {
      usage.variantedValue.value = replaceAllTokenRefs(
        usage.variantedValue.value,
        (tokenId: string) =>
          tokenId === fromToken.uuid ? mkTokenRef(toToken) : undefined
      );
    } else if (usage.type === "prop") {
      ensureKnownStyleTokenRef(usage.arg.expr).token = toToken;
    } else if (usage.type === "fallback") {
      ensureKnownStyleTokenRef(usage.expr.fallback).token = toToken;
    } else {
      unreachable(usage);
    }
  }
}
