// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wT5BWZPEc2fYxyqbTLXMt2
// Component: FskUdXzKp5L
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import Chip from "../../components/widgets/Chip"; // plasmic-import: jW885tExwE/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import Indicator from "../../components/style-controls/Indicator"; // plasmic-import: KRNHR6lpj1/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_variants.module.css"; // plasmic-import: wT5BWZPEc2fYxyqbTLXMt2/projectcss
import sty from "./PlasmicVariantComboRow.module.css"; // plasmic-import: FskUdXzKp5L/css

import ComponentBaseIcon from "../plasmic_kit/PlasmicIcon__ComponentBase"; // plasmic-import: FMSGLwXiQt0qP/icon
import EyeIcon from "../plasmic_kit/PlasmicIcon__Eye"; // plasmic-import: A2FnGYgDh4e3U/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

export type PlasmicVariantComboRow__VariantMembers = {
  isIndicated: "isIndicated";
};

export type PlasmicVariantComboRow__VariantsArgs = {
  isIndicated?: SingleBooleanChoiceArg<"isIndicated">;
};

type VariantPropType = keyof PlasmicVariantComboRow__VariantsArgs;
export const PlasmicVariantComboRow__VariantProps = new Array<VariantPropType>(
  "isIndicated"
);

export type PlasmicVariantComboRow__ArgsType = {
  labelContainer?: React.ReactNode;
};

type ArgPropType = keyof PlasmicVariantComboRow__ArgsType;
export const PlasmicVariantComboRow__ArgProps = new Array<ArgPropType>(
  "labelContainer"
);

export type PlasmicVariantComboRow__OverridesType = {
  root?: p.Flex<"div">;
  iconContainer?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
  actionsContainer?: p.Flex<"div">;
  visibleButton?: p.Flex<typeof IconButton>;
  indicator?: p.Flex<typeof Indicator>;
};

export interface DefaultVariantComboRowProps {
  labelContainer?: React.ReactNode;
  isIndicated?: SingleBooleanChoiceArg<"isIndicated">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicVariantComboRow__RenderFunc(props: {
  variants: PlasmicVariantComboRow__VariantsArgs;
  args: PlasmicVariantComboRow__ArgsType;
  overrides: PlasmicVariantComboRow__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),

    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isIndicated",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.isIndicated
          : undefined,
      },
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootisIndicated]: hasVariant(
            $state,
            "isIndicated",
            "isIndicated"
          ),
        }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {false ? (
        <div
          data-plasmic-name={"iconContainer"}
          data-plasmic-override={overrides.iconContainer}
          className={classNames(projectcss.all, sty.iconContainer)}
        >
          <ComponentBaseIcon
            className={classNames(projectcss.all, sty.svg__xqw7)}
            role={"img"}
          />
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.labelContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Chip>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rh41
                )}
              >
                {"Type: Bordered"}
              </div>
            </Chip>
          ),

          value: args.labelContainer,
        })}
      </p.Stack>

      <div
        data-plasmic-name={"actionsContainer"}
        data-plasmic-override={overrides.actionsContainer}
        className={classNames(projectcss.all, sty.actionsContainer)}
      >
        {(triggers.hover_root ? true : false) ? (
          <IconButton
            data-plasmic-name={"visibleButton"}
            data-plasmic-override={overrides.visibleButton}
            children2={
              <ChevronDownsvgIcon
                className={classNames(projectcss.all, sty.svg__d7Wtc)}
                role={"img"}
              />
            }
            className={classNames("__wab_instance", sty.visibleButton)}
          >
            <EyeIcon
              className={classNames(projectcss.all, sty.svg__dJrf)}
              role={"img"}
            />
          </IconButton>
        ) : null}
      </div>

      {(hasVariant($state, "isIndicated", "isIndicated") ? true : false) ? (
        <Indicator
          data-plasmic-name={"indicator"}
          data-plasmic-override={overrides.indicator}
          className={classNames("__wab_instance", sty.indicator, {
            [sty.indicatorisIndicated]: hasVariant(
              $state,
              "isIndicated",
              "isIndicated"
            ),
          })}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "iconContainer",
    "labelContainer",
    "actionsContainer",
    "visibleButton",
    "indicator",
  ],

  iconContainer: ["iconContainer"],
  labelContainer: ["labelContainer"],
  actionsContainer: ["actionsContainer", "visibleButton"],
  visibleButton: ["visibleButton"],
  indicator: ["indicator"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconContainer: "div";
  labelContainer: "div";
  actionsContainer: "div";
  visibleButton: typeof IconButton;
  indicator: typeof Indicator;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVariantComboRow__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicVariantComboRow__VariantsArgs;
  args?: PlasmicVariantComboRow__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicVariantComboRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicVariantComboRow__ArgsType, ReservedPropsType> &
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicVariantComboRow__ArgProps,
          internalVariantPropNames: PlasmicVariantComboRow__VariantProps,
        }),

      [props, nodeName]
    );

    return PlasmicVariantComboRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVariantComboRow";
  } else {
    func.displayName = `PlasmicVariantComboRow.${nodeName}`;
  }
  return func;
}

export const PlasmicVariantComboRow = Object.assign(
  // Top-level PlasmicVariantComboRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconContainer: makeNodeComponent("iconContainer"),
    labelContainer: makeNodeComponent("labelContainer"),
    actionsContainer: makeNodeComponent("actionsContainer"),
    visibleButton: makeNodeComponent("visibleButton"),
    indicator: makeNodeComponent("indicator"),

    // Metadata about props expected for PlasmicVariantComboRow
    internalVariantProps: PlasmicVariantComboRow__VariantProps,
    internalArgProps: PlasmicVariantComboRow__ArgProps,
  }
);

export default PlasmicVariantComboRow;
/* prettier-ignore-end */