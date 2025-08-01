/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: nMR4ibQ-Ep

import * as React from "react";

import {
  Flex as Flex__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import DefaultLayout from "../../components/dashboard/DefaultLayout"; // plasmic-import: nSkQWLjK-B/component
import NavTeamSection from "../../components/dashboard/NavTeamSection"; // plasmic-import: VqaN_WL-stA/component
import ProjectList from "../../components/ProjectList"; // plasmic-import: -k-p1OXXphn/component

import { useEnvironment } from "../plasmic_kit_pricing/PlasmicGlobalVariant__Environment"; // plasmic-import: hIjF9NLAUKG-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicAllProjectsPage.module.css"; // plasmic-import: nMR4ibQ-Ep/css

createPlasmicElementProxy;

export type PlasmicAllProjectsPage__VariantMembers = {};
export type PlasmicAllProjectsPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicAllProjectsPage__VariantsArgs;
export const PlasmicAllProjectsPage__VariantProps =
  new Array<VariantPropType>();

export type PlasmicAllProjectsPage__ArgsType = {};
type ArgPropType = keyof PlasmicAllProjectsPage__ArgsType;
export const PlasmicAllProjectsPage__ArgProps = new Array<ArgPropType>();

export type PlasmicAllProjectsPage__OverridesType = {
  root?: Flex__<"div">;
  defaultLayout?: Flex__<typeof DefaultLayout>;
  projectList?: Flex__<typeof ProjectList>;
  navTeamSection?: Flex__<typeof NavTeamSection>;
};

export interface DefaultAllProjectsPageProps {
  className?: string;
}

const $$ = {};

function PlasmicAllProjectsPage__RenderFunc(props: {
  variants: PlasmicAllProjectsPage__VariantsArgs;
  args: PlasmicAllProjectsPage__ArgsType;
  overrides: PlasmicAllProjectsPage__OverridesType;
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
            navigation={"allProjects"}
            newProjectButtonAsDropdown={true}
            teams={
              <NavTeamSection
                data-plasmic-name={"navTeamSection"}
                data-plasmic-override={overrides.navTeamSection}
                className={classNames("__wab_instance", sty.navTeamSection)}
              />
            }
          >
            <ProjectList
              data-plasmic-name={"projectList"}
              data-plasmic-override={overrides.projectList}
              className={classNames("__wab_instance", sty.projectList)}
            />
          </DefaultLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "defaultLayout", "projectList", "navTeamSection"],
  defaultLayout: ["defaultLayout", "projectList", "navTeamSection"],
  projectList: ["projectList"],
  navTeamSection: ["navTeamSection"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  defaultLayout: typeof DefaultLayout;
  projectList: typeof ProjectList;
  navTeamSection: typeof NavTeamSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAllProjectsPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAllProjectsPage__VariantsArgs;
    args?: PlasmicAllProjectsPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAllProjectsPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAllProjectsPage__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAllProjectsPage__ArgProps,
          internalVariantPropNames: PlasmicAllProjectsPage__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicAllProjectsPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAllProjectsPage";
  } else {
    func.displayName = `PlasmicAllProjectsPage.${nodeName}`;
  }
  return func;
}

export const PlasmicAllProjectsPage = Object.assign(
  // Top-level PlasmicAllProjectsPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    defaultLayout: makeNodeComponent("defaultLayout"),
    projectList: makeNodeComponent("projectList"),
    navTeamSection: makeNodeComponent("navTeamSection"),

    // Metadata about props expected for PlasmicAllProjectsPage
    internalVariantProps: PlasmicAllProjectsPage__VariantProps,
    internalArgProps: PlasmicAllProjectsPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
);

export default PlasmicAllProjectsPage;
/* prettier-ignore-end */
