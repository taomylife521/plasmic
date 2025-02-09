// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dyzP6dbCdycwJpqiR2zkwe
// Component: RiY7IxtDrH
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import LabeledProp from "../../components/docs/LabeledProp"; // plasmic-import: 95ed9ODv12/component
import Textbox from "../../components/widgets/Textbox"; // plasmic-import: pA22NEzDCsn_/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_docs_portal.module.css"; // plasmic-import: dyzP6dbCdycwJpqiR2zkwe/projectcss
import sty from "./PlasmicLinkedProp.module.css"; // plasmic-import: RiY7IxtDrH/css

import LinkIcon from "../plasmic_kit/PlasmicIcon__Link"; // plasmic-import: BQBWbw0fg66Lw/icon
import ClosesvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__CloseSvg"; // plasmic-import: DhvEHyCHT/icon
import SearchsvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__SearchSvg"; // plasmic-import: R5DLz11OA/icon

export type PlasmicLinkedProp__VariantMembers = {};

export type PlasmicLinkedProp__VariantsArgs = {};
type VariantPropType = keyof PlasmicLinkedProp__VariantsArgs;
export const PlasmicLinkedProp__VariantProps = new Array<VariantPropType>();

export type PlasmicLinkedProp__ArgsType = {
  label?: React.ReactNode;
  children?: React.ReactNode;
  type?: React.ReactNode;
};

type ArgPropType = keyof PlasmicLinkedProp__ArgsType;
export const PlasmicLinkedProp__ArgProps = new Array<ArgPropType>(
  "label",
  "children",
  "type"
);

export type PlasmicLinkedProp__OverridesType = {
  root?: p.Flex<"div">;
  labeledProp?: p.Flex<typeof LabeledProp>;
  svg?: p.Flex<"svg">;
};

export interface DefaultLinkedPropProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  type?: React.ReactNode;
  className?: string;
}

export const defaultLinkedProp__Args: Partial<PlasmicLinkedProp__ArgsType> = {};

function PlasmicLinkedProp__RenderFunc(props: {
  variants: PlasmicLinkedProp__VariantsArgs;
  args: PlasmicLinkedProp__ArgsType;
  overrides: PlasmicLinkedProp__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultLinkedProp__Args, props.args);
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
      <LabeledProp
        data-plasmic-name={"labeledProp"}
        data-plasmic-override={overrides.labeledProp}
        className={classNames("__wab_instance", sty.labeledProp)}
        hasType={true}
        icon={
          <LinkIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        }
        label={p.renderPlasmicSlot({
          defaultContents: "color",
          value: args.label,
        })}
        type={p.renderPlasmicSlot({
          defaultContents: "string | undefined",
          value: args.type,
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Textbox
              className={classNames("__wab_instance", sty.textbox__lmxPj)}
              prefixIcon={
                <SearchsvgIcon
                  className={classNames(projectcss.all, sty.svg__ietaa)}
                  role={"img"}
                />
              }
              styleType={["bordered"]}
              suffixIcon={
                <ClosesvgIcon
                  className={classNames(projectcss.all, sty.svg__iqq4Q)}
                  role={"img"}
                />
              }
            />
          ),

          value: args.children,
        })}
      </LabeledProp>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "labeledProp", "svg"],
  labeledProp: ["labeledProp", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  labeledProp: typeof LabeledProp;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLinkedProp__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicLinkedProp__VariantsArgs;
  args?: PlasmicLinkedProp__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicLinkedProp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicLinkedProp__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicLinkedProp__ArgProps,
      internalVariantPropNames: PlasmicLinkedProp__VariantProps,
    });

    return PlasmicLinkedProp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkedProp";
  } else {
    func.displayName = `PlasmicLinkedProp.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkedProp = Object.assign(
  // Top-level PlasmicLinkedProp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    labeledProp: makeNodeComponent("labeledProp"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicLinkedProp
    internalVariantProps: PlasmicLinkedProp__VariantProps,
    internalArgProps: PlasmicLinkedProp__ArgProps,
  }
);

export default PlasmicLinkedProp;
/* prettier-ignore-end */
