/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: 0wwbx9l7LS5I

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  SingleChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  hasVariant,
  initializeCodeComponentStates,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import {
  BaseTextArea,
  inputHelpers as BaseTextArea_Helpers,
} from "@plasmicpkgs/react-aria/skinny/registerTextArea";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicTextAreaInput.module.css"; // plasmic-import: 0wwbx9l7LS5I/css

createPlasmicElementProxy;

export type PlasmicTextAreaInput__VariantMembers = {
  type: "soft" | "plain" | "minimal";
  flat: "top" | "right" | "bottom" | "left";
  padded: "left" | "right";
};
export type PlasmicTextAreaInput__VariantsArgs = {
  type?: SingleChoiceArg<"soft" | "plain" | "minimal">;
  flat?: MultiChoiceArg<"top" | "right" | "bottom" | "left">;
  padded?: MultiChoiceArg<"left" | "right">;
};
type VariantPropType = keyof PlasmicTextAreaInput__VariantsArgs;
export const PlasmicTextAreaInput__VariantProps = new Array<VariantPropType>(
  "type",
  "flat",
  "padded"
);

export type PlasmicTextAreaInput__ArgsType = {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  ariaLabel?: string;
  onChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicTextAreaInput__ArgsType;
export const PlasmicTextAreaInput__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "defaultValue",
  "disabled",
  "readOnly",
  "autoFocus",
  "inputMode",
  "ariaLabel",
  "onChange"
);

export type PlasmicTextAreaInput__OverridesType = {
  ariaTextArea?: Flex__<typeof BaseTextArea>;
};

export interface DefaultTextAreaInputProps {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  ariaLabel?: string;
  onChange?: (val: string) => void;
  type?: SingleChoiceArg<"soft" | "plain" | "minimal">;
  flat?: MultiChoiceArg<"top" | "right" | "bottom" | "left">;
  padded?: MultiChoiceArg<"left" | "right">;
  className?: string;
}

const $$ = {};

function PlasmicTextAreaInput__RenderFunc(props: {
  variants: PlasmicTextAreaInput__VariantsArgs;
  args: PlasmicTextAreaInput__ArgsType;
  overrides: PlasmicTextAreaInput__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaTextArea.value",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultValue"],

        onChangeProp: "onChange",

        onMutate: generateOnMutateForSpec("value", BaseTextArea_Helpers),
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type,
      },
      {
        path: "flat",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flat,
      },
      {
        path: "padded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.padded,
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

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    focused: false,
    focusVisible: false,
    hovered: false,
    disabled: false,
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants((prev) => {
        if (!Object.keys(changes).some((k) => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (() => {
    const child$Props = {
      "aria-label": args.ariaLabel,
      autoFocus: args.autoFocus,
      autoResize: hasVariant($state, "type", "minimal") ? true : undefined,
      className: classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.ariaTextArea,
        {
          [sty.ariaTextAreaflat_bottom]: hasVariant($state, "flat", "bottom"),
          [sty.ariaTextAreaflat_left]: hasVariant($state, "flat", "left"),
          [sty.ariaTextAreaflat_right]: hasVariant($state, "flat", "right"),
          [sty.ariaTextAreaflat_top]: hasVariant($state, "flat", "top"),
          [sty.ariaTextAreapadded_left]: hasVariant($state, "padded", "left"),
          [sty.ariaTextAreapadded_right]: hasVariant($state, "padded", "right"),
          [sty.ariaTextAreatype_minimal]: hasVariant($state, "type", "minimal"),
          [sty.ariaTextAreatype_plain]: hasVariant($state, "type", "plain"),
          [sty.ariaTextAreatype_soft]: hasVariant($state, "type", "soft"),
        }
      ),
      defaultValue: args.defaultValue,
      disabled: args.disabled,
      inputMode: args.inputMode,
      onChange: async (...eventArgs: any) => {
        generateStateOnChangePropForCodeComponents(
          $state,
          "value",
          ["ariaTextArea", "value"],
          BaseTextArea_Helpers
        ).apply(null, eventArgs);
      },
      placeholder: args.placeholder,
      plasmicUpdateVariant: updateVariant,
      readOnly: args.readOnly,
      value: generateStateValueProp($state, ["ariaTextArea", "value"]),
    };
    initializeCodeComponentStates(
      $state,
      [
        {
          name: "value",
          plasmicStateName: "ariaTextArea.value",
        },
      ],
      [],
      BaseTextArea_Helpers ?? {},
      child$Props
    );

    return (
      <BaseTextArea
        data-plasmic-name={"ariaTextArea"}
        data-plasmic-override={overrides.ariaTextArea}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        {...child$Props}
      />
    );
  })() as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaTextArea: ["ariaTextArea"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaTextArea: typeof BaseTextArea;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextAreaInput__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextAreaInput__VariantsArgs;
    args?: PlasmicTextAreaInput__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTextAreaInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTextAreaInput__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicTextAreaInput__ArgProps,
          internalVariantPropNames: PlasmicTextAreaInput__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTextAreaInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "ariaTextArea") {
    func.displayName = "PlasmicTextAreaInput";
  } else {
    func.displayName = `PlasmicTextAreaInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextAreaInput = Object.assign(
  // Top-level PlasmicTextAreaInput renders the root element
  makeNodeComponent("ariaTextArea"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTextAreaInput
    internalVariantProps: PlasmicTextAreaInput__VariantProps,
    internalArgProps: PlasmicTextAreaInput__ArgProps,
  }
);

export default PlasmicTextAreaInput;
/* prettier-ignore-end */
