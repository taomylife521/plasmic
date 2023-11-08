// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dyzP6dbCdycwJpqiR2zkwe
// Component: dwF8TMwvPf
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
import DocsCollapsibleExplanation from "../../components/docs/DocsCollapsibleExplanation"; // plasmic-import: twJQ9idqHQ/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import ComponentPropsSubHeader from "../../components/docs/ComponentPropsSubHeader"; // plasmic-import: buRRLzgjkH/component
import VariantProp from "../../components/docs/VariantProp"; // plasmic-import: QTY-rRQEAY/component
import Textbox from "../../components/widgets/Textbox"; // plasmic-import: pA22NEzDCsn_/component
import SlotProp from "../../components/docs/SlotProp"; // plasmic-import: jW-aUu5X3W/component
import LinkedProp from "../../components/docs/LinkedProp"; // plasmic-import: RiY7IxtDrH/component
import ElementProp from "../../components/docs/ElementProp"; // plasmic-import: TrtPQzZ8M2/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_docs_portal.module.css"; // plasmic-import: dyzP6dbCdycwJpqiR2zkwe/projectcss
import sty from "./PlasmicComponentTogglesPanel.module.css"; // plasmic-import: dwF8TMwvPf/css

import ResetIcon from "../plasmic_kit/PlasmicIcon__Reset"; // plasmic-import: Dj3u-HuPv94sN/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import SearchsvgIcon from "../q_4_icons/icons/PlasmicIcon__Searchsvg"; // plasmic-import: R5DLz11OA/icon
import ClosesvgIcon from "../q_4_icons/icons/PlasmicIcon__Closesvg"; // plasmic-import: DhvEHyCHT/icon
import HStackBlockIcon from "../plasmic_kit/PlasmicIcon__HStackBlock"; // plasmic-import: vrE0GHgUiSGkm/icon
import ComponentIcon from "../plasmic_kit/PlasmicIcon__Component"; // plasmic-import: nNWEF4jI3s5DI/icon

export type PlasmicComponentTogglesPanel__VariantMembers = {};

export type PlasmicComponentTogglesPanel__VariantsArgs = {};
type VariantPropType = keyof PlasmicComponentTogglesPanel__VariantsArgs;
export const PlasmicComponentTogglesPanel__VariantProps =
  new Array<VariantPropType>();

export type PlasmicComponentTogglesPanel__ArgsType = {
  variantProps?: React.ReactNode;
  slotProps?: React.ReactNode;
  linkedProps?: React.ReactNode;
  elementProps?: React.ReactNode;
  header?: React.ReactNode;
};

type ArgPropType = keyof PlasmicComponentTogglesPanel__ArgsType;
export const PlasmicComponentTogglesPanel__ArgProps = new Array<ArgPropType>(
  "variantProps",
  "slotProps",
  "linkedProps",
  "elementProps",
  "header"
);

export type PlasmicComponentTogglesPanel__OverridesType = {
  root?: p.Flex<"div">;
  explanation?: p.Flex<typeof DocsCollapsibleExplanation>;
  headerContainer?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  resetButton?: p.Flex<typeof Button>;
  body?: p.Flex<"div">;
  variantsHeader?: p.Flex<typeof ComponentPropsSubHeader>;
  variantPropsContainer?: p.Flex<"div">;
  slotPropsHeader?: p.Flex<typeof ComponentPropsSubHeader>;
  slotPropsContainer?: p.Flex<"div">;
  linkedPropsHeader?: p.Flex<typeof ComponentPropsSubHeader>;
  linkedPropsContainer?: p.Flex<"div">;
  elementPropsHeader?: p.Flex<typeof ComponentPropsSubHeader>;
  elementPropsContainer?: p.Flex<"div">;
};

export interface DefaultComponentTogglesPanelProps {
  variantProps?: React.ReactNode;
  slotProps?: React.ReactNode;
  linkedProps?: React.ReactNode;
  elementProps?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
}

export const defaultComponentTogglesPanel__Args: Partial<PlasmicComponentTogglesPanel__ArgsType> =
  {};

function PlasmicComponentTogglesPanel__RenderFunc(props: {
  variants: PlasmicComponentTogglesPanel__VariantsArgs;
  args: PlasmicComponentTogglesPanel__ArgsType;
  overrides: PlasmicComponentTogglesPanel__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign(
    {},
    defaultComponentTogglesPanel__Args,
    props.args
  );

  const $props = args;

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
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <DocsCollapsibleExplanation
        data-plasmic-name={"explanation"}
        data-plasmic-override={overrides.explanation}
        className={classNames("__wab_instance", sty.explanation)}
      />

      <div
        data-plasmic-name={"headerContainer"}
        data-plasmic-override={overrides.headerContainer}
        className={classNames(projectcss.all, sty.headerContainer)}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__zJvYt
            )}
          >
            {"Props for"}
          </div>

          {p.renderPlasmicSlot({
            defaultContents: "PlasmicTextbox",
            value: args.header,
            className: classNames(sty.slotTargetHeader),
          })}
        </div>

        <Button
          data-plasmic-name={"resetButton"}
          data-plasmic-override={overrides.resetButton}
          className={classNames("__wab_instance", sty.resetButton)}
          endIcon={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__atgaP)}
              role={"img"}
            />
          }
          startIcon={
            <ResetIcon
              className={classNames(projectcss.all, sty.svg__iijJf)}
              role={"img"}
            />
          }
          type={"seamless" as const}
          withIcons={"startIcon" as const}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__eixHp
            )}
          >
            {"Reset all"}
          </div>
        </Button>
      </div>

      <div
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        className={classNames(projectcss.all, sty.body)}
      >
        <ComponentPropsSubHeader
          data-plasmic-name={"variantsHeader"}
          data-plasmic-override={overrides.variantsHeader}
          className={classNames("__wab_instance", sty.variantsHeader)}
          slot={"Activate different variants of the component"}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___5Ydwu
            )}
          >
            {"Variant Props "}
          </div>
        </ComponentPropsSubHeader>

        <p.Stack
          as={"div"}
          data-plasmic-name={"variantPropsContainer"}
          data-plasmic-override={overrides.variantPropsContainer}
          hasGap={true}
          className={classNames(projectcss.all, sty.variantPropsContainer)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <VariantProp
                  className={classNames(
                    "__wab_instance",
                    sty.variantProp__yqiyG
                  )}
                >
                  <Textbox
                    className={classNames("__wab_instance", sty.textbox__aNfmX)}
                    prefixIcon={
                      <SearchsvgIcon
                        className={classNames(projectcss.all, sty.svg__mXRx)}
                        role={"img"}
                      />
                    }
                    styleType={["bordered"]}
                    suffixIcon={
                      <ClosesvgIcon
                        className={classNames(projectcss.all, sty.svg__nYBu)}
                        role={"img"}
                      />
                    }
                  />
                </VariantProp>

                <VariantProp
                  className={classNames(
                    "__wab_instance",
                    sty.variantProp___0ZuhY
                  )}
                  label={"isDisabled"}
                >
                  <Textbox
                    className={classNames("__wab_instance", sty.textbox__eVtb)}
                    prefixIcon={
                      <SearchsvgIcon
                        className={classNames(projectcss.all, sty.svg___319Y)}
                        role={"img"}
                      />
                    }
                    styleType={["bordered"]}
                    suffixIcon={
                      <ClosesvgIcon
                        className={classNames(projectcss.all, sty.svg__ot8Nk)}
                        role={"img"}
                      />
                    }
                  />
                </VariantProp>
              </React.Fragment>
            ),

            value: args.variantProps,
          })}
        </p.Stack>

        <ComponentPropsSubHeader
          data-plasmic-name={"slotPropsHeader"}
          data-plasmic-override={overrides.slotPropsHeader}
          className={classNames("__wab_instance", sty.slotPropsHeader)}
          slot={"Customize slot content"}
        >
          {"Slot Props"}
        </ComponentPropsSubHeader>

        <p.Stack
          as={"div"}
          data-plasmic-name={"slotPropsContainer"}
          data-plasmic-override={overrides.slotPropsContainer}
          hasGap={true}
          className={classNames(projectcss.all, sty.slotPropsContainer)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <SlotProp
                  className={classNames("__wab_instance", sty.slotProp__o6Qg3)}
                  label={"children"}
                >
                  <Textbox
                    className={classNames("__wab_instance", sty.textbox__pu95O)}
                    prefixIcon={
                      <SearchsvgIcon
                        className={classNames(projectcss.all, sty.svg___9ALws)}
                        role={"img"}
                      />
                    }
                    styleType={["bordered"]}
                    suffixIcon={
                      <ClosesvgIcon
                        className={classNames(projectcss.all, sty.svg__hSEzQ)}
                        role={"img"}
                      />
                    }
                  />
                </SlotProp>

                <SlotProp
                  className={classNames("__wab_instance", sty.slotProp___3GZuj)}
                  label={"icon"}
                >
                  <Textbox
                    className={classNames("__wab_instance", sty.textbox__e6AqT)}
                    prefixIcon={
                      <SearchsvgIcon
                        className={classNames(projectcss.all, sty.svg___0Uguy)}
                        role={"img"}
                      />
                    }
                    styleType={["bordered"]}
                    suffixIcon={
                      <ClosesvgIcon
                        className={classNames(projectcss.all, sty.svg___6E53V)}
                        role={"img"}
                      />
                    }
                  />
                </SlotProp>
              </React.Fragment>
            ),

            value: args.slotProps,
          })}
        </p.Stack>

        <ComponentPropsSubHeader
          data-plasmic-name={"linkedPropsHeader"}
          data-plasmic-override={overrides.linkedPropsHeader}
          className={classNames("__wab_instance", sty.linkedPropsHeader)}
          noDetails={true}
        >
          {"Other Props"}
        </ComponentPropsSubHeader>

        <div
          data-plasmic-name={"linkedPropsContainer"}
          data-plasmic-override={overrides.linkedPropsContainer}
          className={classNames(projectcss.all, sty.linkedPropsContainer)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <LinkedProp
                className={classNames("__wab_instance", sty.linkedProp__zHz9)}
                label={"placeholder"}
              >
                <Textbox
                  className={classNames("__wab_instance", sty.textbox__nsfUx)}
                  prefixIcon={
                    <SearchsvgIcon
                      className={classNames(projectcss.all, sty.svg__dmQKy)}
                      role={"img"}
                    />
                  }
                  suffixIcon={
                    <ClosesvgIcon
                      className={classNames(projectcss.all, sty.svg__kOvsd)}
                      role={"img"}
                    />
                  }
                />
              </LinkedProp>
            ),

            value: args.linkedProps,
          })}
        </div>

        <ComponentPropsSubHeader
          data-plasmic-name={"elementPropsHeader"}
          data-plasmic-override={overrides.elementPropsHeader}
          className={classNames("__wab_instance", sty.elementPropsHeader)}
          slot={"Override props of named elements"}
        >
          {"Named Element Props"}
        </ComponentPropsSubHeader>

        <p.Stack
          as={"div"}
          data-plasmic-name={"elementPropsContainer"}
          data-plasmic-override={overrides.elementPropsContainer}
          hasGap={true}
          className={classNames(projectcss.all, sty.elementPropsContainer)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <ElementProp
                  className={classNames(
                    "__wab_instance",
                    sty.elementProp__ld9th
                  )}
                  icon={
                    <HStackBlockIcon
                      className={classNames(projectcss.all, sty.svg__zwF5I)}
                      role={"img"}
                    />
                  }
                  label={"root"}
                />

                <ElementProp
                  className={classNames(
                    "__wab_instance",
                    sty.elementProp__f7KBs
                  )}
                  elementType={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xsXcE
                      )}
                    >
                      {"<Button />"}
                    </div>
                  }
                  icon={
                    <ComponentIcon
                      className={classNames(projectcss.all, sty.svg__dmqB9)}
                      role={"img"}
                    />
                  }
                  label={"button"}
                />
              </React.Fragment>
            ),

            value: args.elementProps,
          })}
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "explanation",
    "headerContainer",
    "freeBox",
    "resetButton",
    "body",
    "variantsHeader",
    "variantPropsContainer",
    "slotPropsHeader",
    "slotPropsContainer",
    "linkedPropsHeader",
    "linkedPropsContainer",
    "elementPropsHeader",
    "elementPropsContainer",
  ],

  explanation: ["explanation"],
  headerContainer: ["headerContainer", "freeBox", "resetButton"],
  freeBox: ["freeBox"],
  resetButton: ["resetButton"],
  body: [
    "body",
    "variantsHeader",
    "variantPropsContainer",
    "slotPropsHeader",
    "slotPropsContainer",
    "linkedPropsHeader",
    "linkedPropsContainer",
    "elementPropsHeader",
    "elementPropsContainer",
  ],

  variantsHeader: ["variantsHeader"],
  variantPropsContainer: ["variantPropsContainer"],
  slotPropsHeader: ["slotPropsHeader"],
  slotPropsContainer: ["slotPropsContainer"],
  linkedPropsHeader: ["linkedPropsHeader"],
  linkedPropsContainer: ["linkedPropsContainer"],
  elementPropsHeader: ["elementPropsHeader"],
  elementPropsContainer: ["elementPropsContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  explanation: typeof DocsCollapsibleExplanation;
  headerContainer: "div";
  freeBox: "div";
  resetButton: typeof Button;
  body: "div";
  variantsHeader: typeof ComponentPropsSubHeader;
  variantPropsContainer: "div";
  slotPropsHeader: typeof ComponentPropsSubHeader;
  slotPropsContainer: "div";
  linkedPropsHeader: typeof ComponentPropsSubHeader;
  linkedPropsContainer: "div";
  elementPropsHeader: typeof ComponentPropsSubHeader;
  elementPropsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComponentTogglesPanel__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicComponentTogglesPanel__VariantsArgs;
  args?: PlasmicComponentTogglesPanel__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicComponentTogglesPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicComponentTogglesPanel__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicComponentTogglesPanel__ArgProps,
      internalVariantPropNames: PlasmicComponentTogglesPanel__VariantProps,
    });

    return PlasmicComponentTogglesPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComponentTogglesPanel";
  } else {
    func.displayName = `PlasmicComponentTogglesPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicComponentTogglesPanel = Object.assign(
  // Top-level PlasmicComponentTogglesPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    explanation: makeNodeComponent("explanation"),
    headerContainer: makeNodeComponent("headerContainer"),
    freeBox: makeNodeComponent("freeBox"),
    resetButton: makeNodeComponent("resetButton"),
    body: makeNodeComponent("body"),
    variantsHeader: makeNodeComponent("variantsHeader"),
    variantPropsContainer: makeNodeComponent("variantPropsContainer"),
    slotPropsHeader: makeNodeComponent("slotPropsHeader"),
    slotPropsContainer: makeNodeComponent("slotPropsContainer"),
    linkedPropsHeader: makeNodeComponent("linkedPropsHeader"),
    linkedPropsContainer: makeNodeComponent("linkedPropsContainer"),
    elementPropsHeader: makeNodeComponent("elementPropsHeader"),
    elementPropsContainer: makeNodeComponent("elementPropsContainer"),

    // Metadata about props expected for PlasmicComponentTogglesPanel
    internalVariantProps: PlasmicComponentTogglesPanel__VariantProps,
    internalArgProps: PlasmicComponentTogglesPanel__ArgProps,
  }
);

export default PlasmicComponentTogglesPanel;
/* prettier-ignore-end */