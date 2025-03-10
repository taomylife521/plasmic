// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fQPf2UiMEMhB52C8QQXwWe
// Component: qx4iENdAfF

import * as React from "react";

import {
  Flex as Flex__,
  PlasmicImg as PlasmicImg__,
  SingleBooleanChoiceArg,
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

import OmnibarAddItem from "../../components/omnibar/OmnibarAddItem"; // plasmic-import: KnUjAGcQKT/component
import OmnibarCommandItem from "../../components/omnibar/OmnibarCommandItem"; // plasmic-import: A2li_iO_iw/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "./plasmic_plasmic_kit_omnibar.module.css"; // plasmic-import: fQPf2UiMEMhB52C8QQXwWe/projectcss
import sty from "./PlasmicOmnibarGroup.module.css"; // plasmic-import: qx4iENdAfF/css

import AddPageIcon from "../plasmic_kit_design_system/icons/PlasmicIcon__AddPage"; // plasmic-import: JuZ41tZRcH/icon
import image49X6ZsC5Ww5 from "../plasmic_kit_design_system/images/image4.svg"; // plasmic-import: 9X6ZsC5ww5/picture

createPlasmicElementProxy;

export type PlasmicOmnibarGroup__VariantMembers = {
  noTitle: "noTitle";
};
export type PlasmicOmnibarGroup__VariantsArgs = {
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
};
type VariantPropType = keyof PlasmicOmnibarGroup__VariantsArgs;
export const PlasmicOmnibarGroup__VariantProps = new Array<VariantPropType>(
  "noTitle"
);

export type PlasmicOmnibarGroup__ArgsType = {
  addChildren?: React.ReactNode;
  title?: React.ReactNode;
  commandChildren?: React.ReactNode;
  rightBtn?: React.ReactNode;
  codeName?: React.ReactNode;
};
type ArgPropType = keyof PlasmicOmnibarGroup__ArgsType;
export const PlasmicOmnibarGroup__ArgProps = new Array<ArgPropType>(
  "addChildren",
  "title",
  "commandChildren",
  "rightBtn",
  "codeName"
);

export type PlasmicOmnibarGroup__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultOmnibarGroupProps {
  addChildren?: React.ReactNode;
  title?: React.ReactNode;
  commandChildren?: React.ReactNode;
  rightBtn?: React.ReactNode;
  codeName?: React.ReactNode;
  noTitle?: SingleBooleanChoiceArg<"noTitle">;
  className?: string;
}

const $$ = {};

function PlasmicOmnibarGroup__RenderFunc(props: {
  variants: PlasmicOmnibarGroup__VariantsArgs;
  args: PlasmicOmnibarGroup__ArgsType;
  overrides: PlasmicOmnibarGroup__OverridesType;
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
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle,
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
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootnoTitle]: hasVariant($state, "noTitle", "noTitle") }
      )}
    >
      {(hasVariant($state, "noTitle", "noTitle") ? false : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__vhESn, {
            [sty.freeBoxnoTitle__vhESniOkW0]: hasVariant(
              $state,
              "noTitle",
              "noTitle"
            ),
          })}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__eaOhk)}
          >
            {renderPlasmicSlot({
              defaultContents: "Basic Elements",
              value: args.title,
              className: classNames(sty.slotTargetTitle),
            })}
            <div className={classNames(projectcss.all, sty.freeBox__kPuWw)}>
              {renderPlasmicSlot({
                defaultContents: "package-name",
                value: args.codeName,
                className: classNames(sty.slotTargetCodeName),
              })}
            </div>
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__tog1Z)}>
            {renderPlasmicSlot({
              defaultContents: (
                <Button
                  className={classNames("__wab_instance", sty.button__u1CUq)}
                  size={"small"}
                />
              ),

              value: args.rightBtn,
            })}
          </div>
        </div>
      ) : null}
      <div
        className={classNames(projectcss.all, sty.freeBox___3LGUg, {
          [sty.freeBoxnoTitle___3LGUgiOkW0]: hasVariant(
            $state,
            "noTitle",
            "noTitle"
          ),
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <OmnibarCommandItem
                className={classNames(
                  "__wab_instance",
                  sty.omnibarCommandItem__u5Xg
                )}
                icon={
                  <AddPageIcon
                    className={classNames(projectcss.all, sty.svg__aouWq)}
                    role={"img"}
                  />
                }
              />

              <OmnibarCommandItem
                className={classNames(
                  "__wab_instance",
                  sty.omnibarCommandItem__hOPb1
                )}
                icon={
                  <AddPageIcon
                    className={classNames(projectcss.all, sty.svg__yWmS3)}
                    role={"img"}
                  />
                }
              />
            </React.Fragment>
          ),

          value: args.commandChildren,
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___000Ba)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___4Vg7B, {
            [sty.freeBoxnoTitle___4Vg7BiOkW0]: hasVariant(
              $state,
              "noTitle",
              "noTitle"
            ),
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <OmnibarAddItem
                  className={classNames(
                    "__wab_instance",
                    sty.omnibarAddItem___4Jpgu
                  )}
                  previewNode={
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__t22Ta)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: image49X6ZsC5Ww5,
                        fullWidth: 300,
                        fullHeight: 150,
                        aspectRatio: 2,
                      }}
                    />
                  }
                  title={"Free box"}
                />

                <OmnibarAddItem
                  className={classNames(
                    "__wab_instance",
                    sty.omnibarAddItem___1NgS
                  )}
                  previewNode={
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___38NlQ)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: image49X6ZsC5Ww5,
                        fullWidth: 300,
                        fullHeight: 150,
                        aspectRatio: 2,
                      }}
                    />
                  }
                  title={"Row box"}
                />

                <OmnibarAddItem
                  className={classNames(
                    "__wab_instance",
                    sty.omnibarAddItem__cqFYg
                  )}
                  previewNode={
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__gAwyT)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: image49X6ZsC5Ww5,
                        fullWidth: 300,
                        fullHeight: 150,
                        aspectRatio: 2,
                      }}
                    />
                  }
                  title={"Column box"}
                />

                <OmnibarAddItem
                  className={classNames(
                    "__wab_instance",
                    sty.omnibarAddItem__gm8SE
                  )}
                  previewNode={
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__l4Slg)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: image49X6ZsC5Ww5,
                        fullWidth: 300,
                        fullHeight: 150,
                        aspectRatio: 2,
                      }}
                    />
                  }
                  title={"Textbox"}
                />

                <OmnibarAddItem
                  className={classNames(
                    "__wab_instance",
                    sty.omnibarAddItem__sj7Zp
                  )}
                  previewNode={
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___5Uxh)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      src={{
                        src: image49X6ZsC5Ww5,
                        fullWidth: 300,
                        fullHeight: 150,
                        aspectRatio: 2,
                      }}
                    />
                  }
                  title={"Icon"}
                />
              </React.Fragment>
            ),

            value: args.addChildren,
          })}
        </Stack__>
      </div>
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
  PlasmicOmnibarGroup__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOmnibarGroup__VariantsArgs;
    args?: PlasmicOmnibarGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOmnibarGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOmnibarGroup__ArgsType,
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
          internalArgPropNames: PlasmicOmnibarGroup__ArgProps,
          internalVariantPropNames: PlasmicOmnibarGroup__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicOmnibarGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOmnibarGroup";
  } else {
    func.displayName = `PlasmicOmnibarGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicOmnibarGroup = Object.assign(
  // Top-level PlasmicOmnibarGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicOmnibarGroup
    internalVariantProps: PlasmicOmnibarGroup__VariantProps,
    internalArgProps: PlasmicOmnibarGroup__ArgProps,
  }
);

export default PlasmicOmnibarGroup;
/* prettier-ignore-end */
