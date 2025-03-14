// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oermwjefjidrRRHcrxyCjQ
// Component: 3_QVitiqMh
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  SingleBooleanChoiceArg,
  StrictProps,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as React from "react";
import NewComponentItem from "../../components/widgets/NewComponentItem"; // plasmic-import: csXhXQDIqh/component
import eyesvgZxKyHRa6Q6Pa from "../plasmic_kit_design_system/images/eyeSvg.svg"; // plasmic-import: Zx-kyHRa6Q6PA/picture
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_new_component.module.css"; // plasmic-import: oermwjefjidrRRHcrxyCjQ/projectcss
import sty from "./PlasmicNewComponentSection.module.css"; // plasmic-import: 3_QVitiqMh/css

export type PlasmicNewComponentSection__VariantMembers = {
  hideTitle: "hideTitle";
};

export type PlasmicNewComponentSection__VariantsArgs = {
  hideTitle?: SingleBooleanChoiceArg<"hideTitle">;
};

type VariantPropType = keyof PlasmicNewComponentSection__VariantsArgs;
export const PlasmicNewComponentSection__VariantProps =
  new Array<VariantPropType>("hideTitle");

export type PlasmicNewComponentSection__ArgsType = {
  title?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNewComponentSection__ArgsType;
export const PlasmicNewComponentSection__ArgProps = new Array<ArgPropType>(
  "title",
  "children"
);

export type PlasmicNewComponentSection__OverridesType = {
  root?: p.Flex<"div">;
  title?: p.Flex<"div">;
  items?: p.Flex<"div">;
};

export interface DefaultNewComponentSectionProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  hideTitle?: SingleBooleanChoiceArg<"hideTitle">;
  className?: string;
}

function PlasmicNewComponentSection__RenderFunc(props: {
  variants: PlasmicNewComponentSection__VariantsArgs;
  args: PlasmicNewComponentSection__ArgsType;
  overrides: PlasmicNewComponentSection__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

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
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(variants, "hideTitle", "hideTitle") ? false : true) ? (
        <div
          data-plasmic-name={"title"}
          data-plasmic-override={overrides.title}
          className={classNames(projectcss.all, sty.title, {
            [sty.titlehideTitle]: hasVariant(
              variants,
              "hideTitle",
              "hideTitle"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Section title",
            value: args.title,
            className: classNames(sty.slotTargetTitle, {
              [sty.slotTargetTitlehideTitle]: hasVariant(
                variants,
                "hideTitle",
                "hideTitle"
              ),
            }),
          })}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        data-plasmic-name={"items"}
        data-plasmic-override={overrides.items}
        hasGap={true}
        className={classNames(projectcss.all, sty.items, {
          [sty.itemshideTitle]: hasVariant(variants, "hideTitle", "hideTitle"),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <NewComponentItem
                className={classNames(
                  "__wab_instance",
                  sty.newComponentItem___50Oun
                )}
                controls={
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img___2Qggo
                    )}
                    loading={"lazy" as const}
                    src={eyesvgZxKyHRa6Q6Pa}
                  />
                }
              />

              <NewComponentItem
                className={classNames(
                  "__wab_instance",
                  sty.newComponentItem__mplbv
                )}
                controls={
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__ylGDf
                    )}
                    loading={"lazy" as const}
                    src={eyesvgZxKyHRa6Q6Pa}
                  />
                }
              />
            </React.Fragment>
          ),

          value: args.children,
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "title", "items"],
  title: ["title"],
  items: ["items"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  title: "div";
  items: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewComponentSection__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicNewComponentSection__VariantsArgs;
  args?: PlasmicNewComponentSection__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicNewComponentSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicNewComponentSection__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNewComponentSection__ArgProps,
      internalVariantPropNames: PlasmicNewComponentSection__VariantProps,
    });

    return PlasmicNewComponentSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewComponentSection";
  } else {
    func.displayName = `PlasmicNewComponentSection.${nodeName}`;
  }
  return func;
}

export const PlasmicNewComponentSection = Object.assign(
  // Top-level PlasmicNewComponentSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    title: makeNodeComponent("title"),
    items: makeNodeComponent("items"),

    // Metadata about props expected for PlasmicNewComponentSection
    internalVariantProps: PlasmicNewComponentSection__VariantProps,
    internalArgProps: PlasmicNewComponentSection__ArgProps,
  }
);

export default PlasmicNewComponentSection;
/* prettier-ignore-end */
