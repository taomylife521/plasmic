// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4nEqjj19Sbp3EVnBkgQMP1
// Component: LRUE0mIhfL
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  StrictProps,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as React from "react";
import defaultcss from "../PP__plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import sty from "./PlasmicSimplePathRowHeader.module.css"; // plasmic-import: LRUE0mIhfL/css
import projectcss from "./plasmic_plasmic_kit_data_expressions.module.css"; // plasmic-import: 4nEqjj19Sbp3EVnBkgQMP1/projectcss

export type PlasmicSimplePathRowHeader__VariantMembers = {};

export type PlasmicSimplePathRowHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicSimplePathRowHeader__VariantsArgs;
export const PlasmicSimplePathRowHeader__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSimplePathRowHeader__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSimplePathRowHeader__ArgsType;
export const PlasmicSimplePathRowHeader__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicSimplePathRowHeader__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSimplePathRowHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicSimplePathRowHeader__RenderFunc(props: {
  variants: PlasmicSimplePathRowHeader__VariantsArgs;
  args: PlasmicSimplePathRowHeader__ArgsType;
  overrides: PlasmicSimplePathRowHeader__OverridesType;
  dataFetches?: PlasmicSimplePathRowHeader__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Fields",
        value: args.children,
        className: classNames(sty.slotTargetChildren),
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSimplePathRowHeader__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicSimplePathRowHeader__VariantsArgs;
  args?: PlasmicSimplePathRowHeader__ArgsType;
  overrides?: NodeOverridesType<T>;
  dataFetches?: PlasmicSimplePathRowHeader__Fetches;
} & Omit<PlasmicSimplePathRowHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicSimplePathRowHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSimplePathRowHeader__ArgProps,
      internalVariantPropNames: PlasmicSimplePathRowHeader__VariantProps,
    });

    const { dataFetches } = props;

    return PlasmicSimplePathRowHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSimplePathRowHeader";
  } else {
    func.displayName = `PlasmicSimplePathRowHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicSimplePathRowHeader = Object.assign(
  // Top-level PlasmicSimplePathRowHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSimplePathRowHeader
    internalVariantProps: PlasmicSimplePathRowHeader__VariantProps,
    internalArgProps: PlasmicSimplePathRowHeader__ArgProps,
  }
);

export default PlasmicSimplePathRowHeader;
/* prettier-ignore-end */
