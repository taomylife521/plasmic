/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: E0bKgamUEin

import * as React from "react";

import {
  Flex as Flex__,
  PlasmicIcon as PlasmicIcon__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import * as pp from "@plasmicapp/react-web";
import StyleSelect__Option from "../../components/style-controls/StyleSelect__Option"; // plasmic-import: fVzKJ6hzd6u/component
import StyleSelect__OptionGroup from "../../components/style-controls/StyleSelect__OptionGroup"; // plasmic-import: pQfj4ZYSnAW/component
import StyleSelect__Overlay from "../../components/style-controls/StyleSelect__Overlay"; // plasmic-import: 4xhJ1XtuOem/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicStyleSelect.module.css"; // plasmic-import: E0bKgamUEin/css

import TriangleBottomIcon from "../plasmic_kit/PlasmicIcon__TriangleBottom"; // plasmic-import: A8NQUZ7Lg1OHO/icon
import TriangleTopIcon from "../plasmic_kit/PlasmicIcon__TriangleTop"; // plasmic-import: lVRstDPlZX8da/icon

createPlasmicElementProxy;

export type PlasmicStyleSelect__VariantMembers = {
  showPlaceholder: "showPlaceholder";
  isOpen: "isOpen";
  isDisabled: "isDisabled";
  valueSetState: "isSet" | "isUnset" | "isInherited";
  textRight: "textRight";
};
export type PlasmicStyleSelect__VariantsArgs = {
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  valueSetState?: SingleChoiceArg<"isSet" | "isUnset" | "isInherited">;
  textRight?: SingleBooleanChoiceArg<"textRight">;
};
type VariantPropType = keyof PlasmicStyleSelect__VariantsArgs;
export const PlasmicStyleSelect__VariantProps = new Array<VariantPropType>(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "valueSetState",
  "textRight"
);

export type PlasmicStyleSelect__ArgsType = {
  value?: "Dynamic options";
  name?: string;
  options?: any;
  onChange?: (value: string) => void;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicStyleSelect__ArgsType;
export const PlasmicStyleSelect__ArgProps = new Array<ArgPropType>(
  "value",
  "name",
  "options",
  "onChange",
  "aria-label",
  "aria-labelledby",
  "selectedContent",
  "placeholder",
  "children"
);

export type PlasmicStyleSelect__OverridesType = {
  root?: Flex__<"div">;
  trigger?: Flex__<"button">;
  contentContainer?: Flex__<"div">;
  dropdownIcon?: Flex__<"svg">;
  overlay?: Flex__<typeof StyleSelect__Overlay>;
  optionsContainer?: Flex__<"div">;
};

export interface DefaultStyleSelectProps extends pp.BaseSelectProps {
  options?: any;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  valueSetState?: SingleChoiceArg<"isSet" | "isUnset" | "isInherited">;
  textRight?: SingleBooleanChoiceArg<"textRight">;
}

const PlasmicStyleSelectContext = React.createContext<
  | undefined
  | {
      variants: PlasmicStyleSelect__VariantsArgs;
      args: PlasmicStyleSelect__ArgsType;
    }
>(undefined);

const $$ = {};

function PlasmicStyleSelect__RenderFunc(props: {
  variants: PlasmicStyleSelect__VariantsArgs;
  args: PlasmicStyleSelect__ArgsType;
  overrides: PlasmicStyleSelect__OverridesType;
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
        path: "showPlaceholder",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.showPlaceholder,
      },
      {
        path: "isOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen,
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled,
      },
      {
        path: "valueSetState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.valueSetState,
      },
      {
        path: "textRight",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.textRight,
      },
      {
        path: "asd",
        type: "private",
        variableType: "text",
      },
      {
        path: "value",
        type: "writable",
        variableType: "text",

        valueProp: "value",
        onChangeProp: "onChange",
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

  return (
    <PlasmicStyleSelectContext.Provider value={{ variants, args }}>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
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
          sty.root,
          {
            [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen"),
            [sty.rootshowPlaceholder]: hasVariant(
              $state,
              "showPlaceholder",
              "showPlaceholder"
            ),
            [sty.rootvalueSetState_isSet]: hasVariant(
              $state,
              "valueSetState",
              "isSet"
            ),
          }
        )}
      >
        <Stack__
          as={"button"}
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.button,
            sty.trigger,
            {
              [sty.triggerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant($state, "isOpen", "isOpen"),
              [sty.triggershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              ),
              [sty.triggervalueSetState_isInherited]: hasVariant(
                $state,
                "valueSetState",
                "isInherited"
              ),
              [sty.triggervalueSetState_isSet]: hasVariant(
                $state,
                "valueSetState",
                "isSet"
              ),
            }
          )}
          ref={(ref) => {
            $refs["trigger"] = ref;
          }}
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainerisOpen]: hasVariant(
                $state,
                "isOpen",
                "isOpen"
              ),
              [sty.contentContainershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              ),
              [sty.contentContainertextRight]: hasVariant(
                $state,
                "textRight",
                "textRight"
              ),
              [sty.contentContainervalueSetState_isInherited]: hasVariant(
                $state,
                "valueSetState",
                "isInherited"
              ),
              [sty.contentContainervalueSetState_isUnset]: hasVariant(
                $state,
                "valueSetState",
                "isUnset"
              ),
            })}
          >
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      $state,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetSelectedContentvalueSetState_isInherited]:
                      hasVariant($state, "valueSetState", "isInherited"),
                    [sty.slotTargetSelectedContentvalueSetState_isSet]:
                      hasVariant($state, "valueSetState", "isSet"),
                    [sty.slotTargetSelectedContentvalueSetState_isUnset]:
                      hasVariant($state, "valueSetState", "isUnset"),
                  }),
                })
              : null}
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? true
                : false
            )
              ? renderPlasmicSlot({
                  defaultContents: "Placeholder\u2026",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetPlaceholdervalueSetState_isInherited]:
                      hasVariant($state, "valueSetState", "isInherited"),
                    [sty.slotTargetPlaceholdervalueSetState_isSet]: hasVariant(
                      $state,
                      "valueSetState",
                      "isSet"
                    ),
                    [sty.slotTargetPlaceholdervalueSetState_isUnset]:
                      hasVariant($state, "valueSetState", "isUnset"),
                  }),
                })
              : null}
          </div>
          <PlasmicIcon__
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant($state, "isOpen", "isOpen")
                ? TriangleTopIcon
                : TriangleBottomIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIconisOpen]: hasVariant($state, "isOpen", "isOpen"),
              [sty.dropdownIconshowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              ),
            })}
            role={"img"}
          />
        </Stack__>
        {(hasVariant($state, "isOpen", "isOpen") ? true : false) ? (
          <StyleSelect__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlayisOpen]: hasVariant($state, "isOpen", "isOpen"),
              [sty.overlayshowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              ),
            })}
            relativePlacement={"bottom"}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainerisOpen]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                ),
              })}
            >
              {renderPlasmicSlot({
                defaultContents: null,
                value: args.children,
              })}
            </div>
          </StyleSelect__Overlay>
        ) : null}
      </div>
    </PlasmicStyleSelectContext.Provider>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectProps>(
  props: P,
  ref: pp.SelectRef
) {
  if (!("options" in props)) {
  }
  return pp.useSelect(
    PlasmicStyleSelect,
    props,
    {
      ...{
        isOpenVariant: { group: "isOpen", variant: "isOpen" },
        placeholderVariant: {
          group: "showPlaceholder",
          variant: "showPlaceholder",
        },
        isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
        triggerContentSlot: "selectedContent",
        optionsSlot: "children",
        placeholderSlot: "placeholder",
        root: "root",
        trigger: "trigger",
        overlay: "overlay",
        optionsContainer: "optionsContainer",
      },
      OptionComponent: StyleSelect__Option,
      OptionGroupComponent: StyleSelect__OptionGroup,
    },
    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer",
  ],
  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  trigger: "button";
  contentContainer: "div";
  dropdownIcon: "svg";
  overlay: typeof StyleSelect__Overlay;
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStyleSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStyleSelect__VariantsArgs;
    args?: PlasmicStyleSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStyleSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicStyleSelect__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicStyleSelect__ArgProps,
          internalVariantPropNames: PlasmicStyleSelect__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicStyleSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStyleSelect";
  } else {
    func.displayName = `PlasmicStyleSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicStyleSelect = Object.assign(
  // Top-level PlasmicStyleSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicStyleSelect
    internalVariantProps: PlasmicStyleSelect__VariantProps,
    internalArgProps: PlasmicStyleSelect__ArgProps,

    // Context for sub components
    Context: PlasmicStyleSelectContext,

    useBehavior,
  }
);

export default PlasmicStyleSelect;
/* prettier-ignore-end */
