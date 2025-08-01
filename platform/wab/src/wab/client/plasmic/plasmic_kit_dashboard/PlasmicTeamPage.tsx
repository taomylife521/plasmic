/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: O3FCcJ_viT

import * as React from "react";

import {
  Flex as Flex__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  renderPlasmicSlot,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import DefaultLayout from "../../components/dashboard/DefaultLayout"; // plasmic-import: nSkQWLjK-B/component
import NavTeamSection from "../../components/dashboard/NavTeamSection"; // plasmic-import: VqaN_WL-stA/component
import NavWorkspaceButton from "../../components/dashboard/NavWorkspaceButton"; // plasmic-import: Cma6XahJmS/component
import TeamPageHeader from "../../components/dashboard/TeamPageHeader"; // plasmic-import: pcPdf_yULU3/component
import WorkspaceSection from "../../components/dashboard/WorkspaceSection"; // plasmic-import: 5cdjGaqBQ4/component
import ProjectListItem from "../../components/ProjectListItem"; // plasmic-import: 2FvZipCkyxl/component

import { useEnvironment } from "../plasmic_kit_pricing/PlasmicGlobalVariant__Environment"; // plasmic-import: hIjF9NLAUKG-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicTeamPage.module.css"; // plasmic-import: O3FCcJ_viT/css

createPlasmicElementProxy;

export type PlasmicTeamPage__VariantMembers = {};
export type PlasmicTeamPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicTeamPage__VariantsArgs;
export const PlasmicTeamPage__VariantProps = new Array<VariantPropType>();

export type PlasmicTeamPage__ArgsType = { children?: React.ReactNode };
type ArgPropType = keyof PlasmicTeamPage__ArgsType;
export const PlasmicTeamPage__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTeamPage__OverridesType = {
  root?: Flex__<"div">;
  defaultLayout?: Flex__<typeof DefaultLayout>;
  header?: Flex__<typeof TeamPageHeader>;
  navTeamSection?: Flex__<typeof NavTeamSection>;
  text?: Flex__<"div">;
};

export interface DefaultTeamPageProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicTeamPage__RenderFunc(props: {
  variants: PlasmicTeamPage__VariantsArgs;
  args: PlasmicTeamPage__ArgsType;
  overrides: PlasmicTeamPage__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    environment: useEnvironment(),
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
            plasmic_plasmic_kit_pricing_css.plasmic_tokens,
            sty.root,
            {
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
              [plasmic_plasmic_kit_pricing_css.global_environment_website]:
                hasVariant(globalVariants, "environment", "website"),
            }
          )}
        >
          <DefaultLayout
            data-plasmic-name={"defaultLayout"}
            data-plasmic-override={overrides.defaultLayout}
            className={classNames("__wab_instance", sty.defaultLayout)}
            hideNewProjectButton={true}
            teams={
              <NavTeamSection
                data-plasmic-name={"navTeamSection"}
                data-plasmic-override={overrides.navTeamSection}
                className={classNames("__wab_instance", sty.navTeamSection)}
              >
                <NavWorkspaceButton
                  className={classNames(
                    "__wab_instance",
                    sty.navWorkspaceButton__vrx2D
                  )}
                />

                <NavWorkspaceButton
                  className={classNames(
                    "__wab_instance",
                    sty.navWorkspaceButton___5MOvF
                  )}
                  name={
                    <div
                      data-plasmic-name={"text"}
                      data-plasmic-override={overrides.text}
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text
                      )}
                    >
                      {"Workspace B"}
                    </div>
                  }
                />
              </NavTeamSection>
            }
          >
            <div className={classNames(projectcss.all, sty.freeBox__cpaZg)}>
              <TeamPageHeader
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />

              <div className={classNames(projectcss.all, sty.freeBox__jk5PX)}>
                {renderPlasmicSlot({
                  defaultContents: (
                    <React.Fragment>
                      <WorkspaceSection
                        canUseCms={true}
                        canUseCmsAndDataSources={"empty"}
                        inTeamPage={true}
                        noProjects={true}
                        numMembers={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__l2A9P
                            )}
                          >
                            {"6"}
                          </div>
                        }
                      >
                        <ProjectListItem timestamp={"updated 1h ago"} />

                        <ProjectListItem
                          className={classNames(
                            "__wab_instance",
                            sty.projectListItem__gcUcH
                          )}
                        />

                        <ProjectListItem
                          className={classNames(
                            "__wab_instance",
                            sty.projectListItem__bkTRw
                          )}
                        />
                      </WorkspaceSection>
                      <WorkspaceSection inTeamPage={true}>
                        <ProjectListItem />

                        <ProjectListItem
                          className={classNames(
                            "__wab_instance",
                            sty.projectListItem__zqqA
                          )}
                        />

                        <ProjectListItem
                          className={classNames(
                            "__wab_instance",
                            sty.projectListItem___449Jj
                          )}
                        />
                      </WorkspaceSection>
                    </React.Fragment>
                  ),
                  value: args.children,
                })}
              </div>
            </div>
          </DefaultLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "defaultLayout", "header", "navTeamSection", "text"],
  defaultLayout: ["defaultLayout", "header", "navTeamSection", "text"],
  header: ["header"],
  navTeamSection: ["navTeamSection", "text"],
  text: ["text"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  defaultLayout: typeof DefaultLayout;
  header: typeof TeamPageHeader;
  navTeamSection: typeof NavTeamSection;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeamPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeamPage__VariantsArgs;
    args?: PlasmicTeamPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeamPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTeamPage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTeamPage__ArgProps,
          internalVariantPropNames: PlasmicTeamPage__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTeamPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamPage";
  } else {
    func.displayName = `PlasmicTeamPage.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamPage = Object.assign(
  // Top-level PlasmicTeamPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    defaultLayout: makeNodeComponent("defaultLayout"),
    header: makeNodeComponent("header"),
    navTeamSection: makeNodeComponent("navTeamSection"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicTeamPage
    internalVariantProps: PlasmicTeamPage__VariantProps,
    internalArgProps: PlasmicTeamPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
);

export default PlasmicTeamPage;
/* prettier-ignore-end */
