/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: OzaoSbFLbl

import * as React from "react";

import {
  Flex as Flex__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import LeftPaneHeader from "../../components/studio/LeftPaneHeader"; // plasmic-import: XLa52PvduIy/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicLeftSplitsPanel.module.css"; // plasmic-import: OzaoSbFLbl/css

import ChevronDownSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: xZrB9_0ir/icon
import PlusSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__PlusSvg"; // plasmic-import: sQKgd2GNr/icon

createPlasmicElementProxy;

export type PlasmicLeftSplitsPanel__VariantMembers = {};
export type PlasmicLeftSplitsPanel__VariantsArgs = {};
type VariantPropType = keyof PlasmicLeftSplitsPanel__VariantsArgs;
export const PlasmicLeftSplitsPanel__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLeftSplitsPanel__ArgsType = {};
type ArgPropType = keyof PlasmicLeftSplitsPanel__ArgsType;
export const PlasmicLeftSplitsPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicLeftSplitsPanel__OverridesType = {
  root?: Flex__<"div">;
  abHeader?: Flex__<typeof LeftPaneHeader>;
  newTestButton?: Flex__<typeof Button>;
  abContent?: Flex__<"div">;
  segmentsHeader?: Flex__<typeof LeftPaneHeader>;
  newSegmentButton?: Flex__<typeof Button>;
  text?: Flex__<"div">;
  segmentsContent?: Flex__<"div">;
  leftPaneHeader?: Flex__<typeof LeftPaneHeader>;
  newScheduleButton?: Flex__<typeof Button>;
  scheduledContent?: Flex__<"div">;
};

export interface DefaultLeftSplitsPanelProps {
  className?: string;
}

const $$ = {};

function PlasmicLeftSplitsPanel__RenderFunc(props: {
  variants: PlasmicLeftSplitsPanel__VariantsArgs;
  args: PlasmicLeftSplitsPanel__ArgsType;
  overrides: PlasmicLeftSplitsPanel__OverridesType;
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

  return (
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
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root
      )}
    >
      <LeftPaneHeader
        data-plasmic-name={"abHeader"}
        data-plasmic-override={overrides.abHeader}
        actions={
          <Button
            data-plasmic-name={"newTestButton"}
            data-plasmic-override={overrides.newTestButton}
            endIcon={
              <ChevronDownSvgIcon
                className={classNames(projectcss.all, sty.svg__wnOv)}
                role={"img"}
              />
            }
            size={"wide"}
            startIcon={
              <PlusSvgIcon
                className={classNames(projectcss.all, sty.svg__va03F)}
                role={"img"}
              />
            }
            type={["secondary"]}
            withIcons={["startIcon"]}
          >
            {"New test"}
          </Button>
        }
        className={classNames("__wab_instance", sty.abHeader)}
        description={"Run A/B tests to pick between winning designs."}
        title={"A/B Tests"}
      />

      <div
        data-plasmic-name={"abContent"}
        data-plasmic-override={overrides.abContent}
        className={classNames(projectcss.all, sty.abContent)}
      />

      <LeftPaneHeader
        data-plasmic-name={"segmentsHeader"}
        data-plasmic-override={overrides.segmentsHeader}
        actions={
          <Button
            data-plasmic-name={"newSegmentButton"}
            data-plasmic-override={overrides.newSegmentButton}
            endIcon={
              <ChevronDownSvgIcon
                className={classNames(projectcss.all, sty.svg__bnPy)}
                role={"img"}
              />
            }
            size={"wide"}
            startIcon={
              <PlusSvgIcon
                className={classNames(projectcss.all, sty.svg__eacMt)}
                role={"img"}
              />
            }
            type={["secondary"]}
            withIcons={["startIcon"]}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"New targeted content"}
            </div>
          </Button>
        }
        className={classNames("__wab_instance", sty.segmentsHeader)}
        description={
          "Target specific segments of your users with specialized content."
        }
        title={"Targeted Content"}
      />

      <div
        data-plasmic-name={"segmentsContent"}
        data-plasmic-override={overrides.segmentsContent}
        className={classNames(projectcss.all, sty.segmentsContent)}
      />

      <LeftPaneHeader
        data-plasmic-name={"leftPaneHeader"}
        data-plasmic-override={overrides.leftPaneHeader}
        actions={
          <Button
            data-plasmic-name={"newScheduleButton"}
            data-plasmic-override={overrides.newScheduleButton}
            endIcon={
              <ChevronDownSvgIcon
                className={classNames(projectcss.all, sty.svg__uEtw)}
                role={"img"}
              />
            }
            size={"wide"}
            startIcon={
              <PlusSvgIcon
                className={classNames(projectcss.all, sty.svg__j3MPs)}
                role={"img"}
              />
            }
            type={["secondary"]}
            withIcons={["startIcon"]}
          >
            {"New scheduled content"}
          </Button>
        }
        className={classNames("__wab_instance", sty.leftPaneHeader)}
        description={
          "Schedule content to be available in specific time ranges."
        }
        title={"Scheduled Content"}
      />

      <div
        data-plasmic-name={"scheduledContent"}
        data-plasmic-override={overrides.scheduledContent}
        className={classNames(projectcss.all, sty.scheduledContent)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "abHeader",
    "newTestButton",
    "abContent",
    "segmentsHeader",
    "newSegmentButton",
    "text",
    "segmentsContent",
    "leftPaneHeader",
    "newScheduleButton",
    "scheduledContent",
  ],
  abHeader: ["abHeader", "newTestButton"],
  newTestButton: ["newTestButton"],
  abContent: ["abContent"],
  segmentsHeader: ["segmentsHeader", "newSegmentButton", "text"],
  newSegmentButton: ["newSegmentButton", "text"],
  text: ["text"],
  segmentsContent: ["segmentsContent"],
  leftPaneHeader: ["leftPaneHeader", "newScheduleButton"],
  newScheduleButton: ["newScheduleButton"],
  scheduledContent: ["scheduledContent"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  abHeader: typeof LeftPaneHeader;
  newTestButton: typeof Button;
  abContent: "div";
  segmentsHeader: typeof LeftPaneHeader;
  newSegmentButton: typeof Button;
  text: "div";
  segmentsContent: "div";
  leftPaneHeader: typeof LeftPaneHeader;
  newScheduleButton: typeof Button;
  scheduledContent: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLeftSplitsPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLeftSplitsPanel__VariantsArgs;
    args?: PlasmicLeftSplitsPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLeftSplitsPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLeftSplitsPanel__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLeftSplitsPanel__ArgProps,
          internalVariantPropNames: PlasmicLeftSplitsPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLeftSplitsPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLeftSplitsPanel";
  } else {
    func.displayName = `PlasmicLeftSplitsPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicLeftSplitsPanel = Object.assign(
  // Top-level PlasmicLeftSplitsPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    abHeader: makeNodeComponent("abHeader"),
    newTestButton: makeNodeComponent("newTestButton"),
    abContent: makeNodeComponent("abContent"),
    segmentsHeader: makeNodeComponent("segmentsHeader"),
    newSegmentButton: makeNodeComponent("newSegmentButton"),
    text: makeNodeComponent("text"),
    segmentsContent: makeNodeComponent("segmentsContent"),
    leftPaneHeader: makeNodeComponent("leftPaneHeader"),
    newScheduleButton: makeNodeComponent("newScheduleButton"),
    scheduledContent: makeNodeComponent("scheduledContent"),

    // Metadata about props expected for PlasmicLeftSplitsPanel
    internalVariantProps: PlasmicLeftSplitsPanel__VariantProps,
    internalArgProps: PlasmicLeftSplitsPanel__ArgProps,
  }
);

export default PlasmicLeftSplitsPanel;
/* prettier-ignore-end */
