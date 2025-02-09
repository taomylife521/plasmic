// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ehckhYnyDHgCBbV47m9bkf
// Component: OOKbAz_EJ7Rm

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import { useEnvironment } from "./PlasmicGlobalVariant__Environment"; // plasmic-import: hIjF9NLAUKG-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import sty from "./PlasmicElevatedCard.module.css"; // plasmic-import: OOKbAz_EJ7Rm/css

createPlasmicElementProxy;

export type PlasmicElevatedCard__VariantMembers = {
  bodyless: "bodyless";
};
export type PlasmicElevatedCard__VariantsArgs = {
  bodyless?: SingleBooleanChoiceArg<"bodyless">;
};
type VariantPropType = keyof PlasmicElevatedCard__VariantsArgs;
export const PlasmicElevatedCard__VariantProps = new Array<VariantPropType>(
  "bodyless"
);

export type PlasmicElevatedCard__ArgsType = {
  menuContainer2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicElevatedCard__ArgsType;
export const PlasmicElevatedCard__ArgProps = new Array<ArgPropType>(
  "menuContainer2"
);

export type PlasmicElevatedCard__OverridesType = {
  menuContainer?: Flex__<"div">;
};

export interface DefaultElevatedCardProps {
  menuContainer2?: React.ReactNode;
  bodyless?: SingleBooleanChoiceArg<"bodyless">;
  className?: string;
}

const $$ = {};

function PlasmicElevatedCard__RenderFunc(props: {
  variants: PlasmicElevatedCard__VariantsArgs;
  args: PlasmicElevatedCard__ArgsType;
  overrides: PlasmicElevatedCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "bodyless",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.bodyless,
      },
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  const globalVariants = ensureGlobalVariants({
    environment: useEnvironment(),
  });

  return (
    <div
      data-plasmic-name={"menuContainer"}
      data-plasmic-override={overrides.menuContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.menuContainer,
        {
          [projectcss.global_environment_website]: hasVariant(
            globalVariants,
            "environment",
            "website"
          ),
          [sty.menuContainerbodyless]: hasVariant(
            $state,
            "bodyless",
            "bodyless"
          ),
        }
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__clTcj
              )}
            >
              {"Menu item 1"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__r3A7
              )}
            >
              {"Menu item 1"}
            </div>
          </React.Fragment>
        ),

        value: args.menuContainer2,
        className: classNames(sty.slotTargetMenuContainer2),
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  menuContainer: ["menuContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  menuContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicElevatedCard__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicElevatedCard__VariantsArgs;
    args?: PlasmicElevatedCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicElevatedCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicElevatedCard__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicElevatedCard__ArgProps,
          internalVariantPropNames: PlasmicElevatedCard__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicElevatedCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "menuContainer") {
    func.displayName = "PlasmicElevatedCard";
  } else {
    func.displayName = `PlasmicElevatedCard.${nodeName}`;
  }
  return func;
}

export const PlasmicElevatedCard = Object.assign(
  // Top-level PlasmicElevatedCard renders the root element
  makeNodeComponent("menuContainer"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicElevatedCard
    internalVariantProps: PlasmicElevatedCard__VariantProps,
    internalArgProps: PlasmicElevatedCard__ArgProps,
  }
);

export default PlasmicElevatedCard;
/* prettier-ignore-end */
