/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: T_OF2Q8rJc1U

import * as React from "react";

import {
  Flex as Flex__,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import Select from "../../components/widgets/Select"; // plasmic-import: j_4IQyOWK2b/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicThemeInitialStylesPanel.module.css"; // plasmic-import: T_OF2Q8rJc1U/css

import PlusSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__PlusSvg"; // plasmic-import: sQKgd2GNr/icon

createPlasmicElementProxy;

export type PlasmicThemeInitialStylesPanel__VariantMembers = {};
export type PlasmicThemeInitialStylesPanel__VariantsArgs = {};
type VariantPropType = keyof PlasmicThemeInitialStylesPanel__VariantsArgs;
export const PlasmicThemeInitialStylesPanel__VariantProps =
  new Array<VariantPropType>();

export type PlasmicThemeInitialStylesPanel__ArgsType = {};
type ArgPropType = keyof PlasmicThemeInitialStylesPanel__ArgsType;
export const PlasmicThemeInitialStylesPanel__ArgProps =
  new Array<ArgPropType>();

export type PlasmicThemeInitialStylesPanel__OverridesType = {
  root?: Flex__<"div">;
  elementSelect?: Flex__<typeof Select>;
  svg?: Flex__<"svg">;
  form?: Flex__<"div">;
};

export interface DefaultThemeInitialStylesPanelProps {
  className?: string;
}

const $$ = {};

function PlasmicThemeInitialStylesPanel__RenderFunc(props: {
  variants: PlasmicThemeInitialStylesPanel__VariantsArgs;
  args: PlasmicThemeInitialStylesPanel__ArgsType;
  overrides: PlasmicThemeInitialStylesPanel__OverridesType;
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
        path: "elementSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
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
      <div className={classNames(projectcss.all, sty.freeBox___1GpQq)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___27NdN
          )}
        >
          {
            "Define initial styles that new elements of different types start with when they are inserted."
          }
        </div>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__kPz9)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__t3OaN
          )}
        >
          {"Element Type"}
        </div>
        <Select
          data-plasmic-name={"elementSelect"}
          data-plasmic-override={overrides.elementSelect}
          className={classNames("__wab_instance", sty.elementSelect)}
          icon={
            <PlusSvgIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          }
          onChange={async (...eventArgs: any) => {
            ((...eventArgs) => {
              generateStateOnChangeProp($state, ["elementSelect", "value"])(
                eventArgs[0]
              );
            }).apply(null, eventArgs);

            if (
              eventArgs.length > 1 &&
              eventArgs[1] &&
              eventArgs[1]._plasmic_state_init_
            ) {
              return;
            }
          }}
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
          type={"bordered"}
          value={generateStateValueProp($state, ["elementSelect", "value"])}
        />
      </Stack__>
      <div
        data-plasmic-name={"form"}
        data-plasmic-override={overrides.form}
        className={classNames(projectcss.all, sty.form)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "elementSelect", "svg", "form"],
  elementSelect: ["elementSelect", "svg"],
  svg: ["svg"],
  form: ["form"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  elementSelect: typeof Select;
  svg: "svg";
  form: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicThemeInitialStylesPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicThemeInitialStylesPanel__VariantsArgs;
    args?: PlasmicThemeInitialStylesPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicThemeInitialStylesPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicThemeInitialStylesPanel__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicThemeInitialStylesPanel__ArgProps,
          internalVariantPropNames:
            PlasmicThemeInitialStylesPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicThemeInitialStylesPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicThemeInitialStylesPanel";
  } else {
    func.displayName = `PlasmicThemeInitialStylesPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicThemeInitialStylesPanel = Object.assign(
  // Top-level PlasmicThemeInitialStylesPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    elementSelect: makeNodeComponent("elementSelect"),
    svg: makeNodeComponent("svg"),
    form: makeNodeComponent("form"),

    // Metadata about props expected for PlasmicThemeInitialStylesPanel
    internalVariantProps: PlasmicThemeInitialStylesPanel__VariantProps,
    internalArgProps: PlasmicThemeInitialStylesPanel__ArgProps,
  }
);

export default PlasmicThemeInitialStylesPanel;
/* prettier-ignore-end */
