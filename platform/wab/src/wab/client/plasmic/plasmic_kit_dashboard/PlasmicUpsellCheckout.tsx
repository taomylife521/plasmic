/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: 5PfErhGRfT

import * as React from "react";

import {
  Flex as Flex__,
  PlasmicLink as PlasmicLink__,
  SingleBooleanChoiceArg,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import Bill from "../../components/dashboard/Bill"; // plasmic-import: sK-iPs7I1Z/component
import PriceTierPicker from "../../components/pricing/PriceTierPicker"; // plasmic-import: Xx_WsdQKli-S/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import Switch from "../../components/widgets/Switch"; // plasmic-import: b35JDgXpbiF/component

import { useEnvironment } from "../plasmic_kit_pricing/PlasmicGlobalVariant__Environment"; // plasmic-import: hIjF9NLAUKG-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicUpsellCheckout.module.css"; // plasmic-import: 5PfErhGRfT/css

import ArrowRightSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__ArrowRightSvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownSvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicUpsellCheckout__VariantMembers = {
  skipCreditCard: "skipCreditCard";
  onFreeTrial: "onFreeTrial";
  tempPickOneModal: "tempPickOneModal";
};
export type PlasmicUpsellCheckout__VariantsArgs = {
  skipCreditCard?: SingleBooleanChoiceArg<"skipCreditCard">;
  onFreeTrial?: SingleBooleanChoiceArg<"onFreeTrial">;
  tempPickOneModal?: SingleBooleanChoiceArg<"tempPickOneModal">;
};
type VariantPropType = keyof PlasmicUpsellCheckout__VariantsArgs;
export const PlasmicUpsellCheckout__VariantProps = new Array<VariantPropType>(
  "skipCreditCard",
  "onFreeTrial",
  "tempPickOneModal"
);

export type PlasmicUpsellCheckout__ArgsType = { teamName?: React.ReactNode };
type ArgPropType = keyof PlasmicUpsellCheckout__ArgsType;
export const PlasmicUpsellCheckout__ArgProps = new Array<ArgPropType>(
  "teamName"
);

export type PlasmicUpsellCheckout__OverridesType = {
  root?: Flex__<"div">;
  operationTitle?: Flex__<"div">;
  operationDescription?: Flex__<"div">;
  billingFrequencyToggle?: Flex__<typeof Switch>;
  priceTierPicker?: Flex__<typeof PriceTierPicker>;
  bill?: Flex__<typeof Bill>;
  spinnerContainer?: Flex__<"div">;
  cancelButton?: Flex__<typeof Button>;
  confirmButton?: Flex__<typeof Button>;
  stripeCardElement?: Flex__<"div">;
  stripeExpiryElement?: Flex__<"div">;
  stripeCvcElement?: Flex__<"div">;
  spinnerContainer2?: Flex__<"div">;
  cancelButton2?: Flex__<typeof Button>;
  confirmButton2?: Flex__<typeof Button>;
};

export interface DefaultUpsellCheckoutProps {
  teamName?: React.ReactNode;
  skipCreditCard?: SingleBooleanChoiceArg<"skipCreditCard">;
  onFreeTrial?: SingleBooleanChoiceArg<"onFreeTrial">;
  tempPickOneModal?: SingleBooleanChoiceArg<"tempPickOneModal">;
  className?: string;
}

const $$ = {};

function PlasmicUpsellCheckout__RenderFunc(props: {
  variants: PlasmicUpsellCheckout__VariantsArgs;
  args: PlasmicUpsellCheckout__ArgsType;
  overrides: PlasmicUpsellCheckout__OverridesType;
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
        path: "skipCreditCard",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.skipCreditCard,
      },
      {
        path: "onFreeTrial",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.onFreeTrial,
      },
      {
        path: "tempPickOneModal",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.tempPickOneModal,
      },
      {
        path: "billingFrequencyToggle.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => "isChecked",
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

  const globalVariants = ensureGlobalVariants({
    environment: useEnvironment(),
  });

  return (
    <Stack__
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
          [sty.rootonFreeTrial]: hasVariant(
            $state,
            "onFreeTrial",
            "onFreeTrial"
          ),
          [sty.roottempPickOneModal]: hasVariant(
            $state,
            "tempPickOneModal",
            "tempPickOneModal"
          ),
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___67Tlr, {
          [sty.freeBoxonFreeTrial___67TlRgSsNx]: hasVariant(
            $state,
            "onFreeTrial",
            "onFreeTrial"
          ),
          [sty.freeBoxtempPickOneModal___67TlRzGtUe]: hasVariant(
            $state,
            "tempPickOneModal",
            "tempPickOneModal"
          ),
        })}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___48TmO, {
            [sty.freeBoxonFreeTrial___48TmOgSsNx]: hasVariant(
              $state,
              "onFreeTrial",
              "onFreeTrial"
            ),
            [sty.freeBoxtempPickOneModal___48TmOzGtUe]: hasVariant(
              $state,
              "tempPickOneModal",
              "tempPickOneModal"
            ),
          })}
        >
          <div
            data-plasmic-name={"operationTitle"}
            data-plasmic-override={overrides.operationTitle}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.operationTitle,
              {
                [sty.operationTitleonFreeTrial]: hasVariant(
                  $state,
                  "onFreeTrial",
                  "onFreeTrial"
                ),
                [sty.operationTitletempPickOneModal]: hasVariant(
                  $state,
                  "tempPickOneModal",
                  "tempPickOneModal"
                ),
              }
            )}
          >
            {"Upgrade "}
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__ot68, {
              [sty.freeBoxtempPickOneModal__ot68ZGtUe]: hasVariant(
                $state,
                "tempPickOneModal",
                "tempPickOneModal"
              ),
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "TEAM NAME",
              value: args.teamName,
              className: classNames(sty.slotTargetTeamName, {
                [sty.slotTargetTeamNametempPickOneModal]: hasVariant(
                  $state,
                  "tempPickOneModal",
                  "tempPickOneModal"
                ),
              }),
            })}
          </div>
        </Stack__>
        <div
          className={classNames(projectcss.all, sty.freeBox__veMFb, {
            [sty.freeBoxtempPickOneModal__veMFbzGtUe]: hasVariant(
              $state,
              "tempPickOneModal",
              "tempPickOneModal"
            ),
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pa5Ic,
              {
                [sty.textonFreeTrial__pa5ICgSsNx]: hasVariant(
                  $state,
                  "onFreeTrial",
                  "onFreeTrial"
                ),
                [sty.texttempPickOneModal__pa5ICzGtUe]: hasVariant(
                  $state,
                  "tempPickOneModal",
                  "tempPickOneModal"
                ),
              }
            )}
          >
            {hasVariant($state, "tempPickOneModal", "tempPickOneModal")
              ? "Select a new plan to upgrade. "
              : hasVariant($state, "onFreeTrial", "onFreeTrial")
              ? "Select a new plan to upgrade. You'll only be charged after your trial ends. "
              : "Select a new plan to "}
          </div>
          <div
            data-plasmic-name={"operationDescription"}
            data-plasmic-override={overrides.operationDescription}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.operationDescription,
              {
                [sty.operationDescriptiononFreeTrial]: hasVariant(
                  $state,
                  "onFreeTrial",
                  "onFreeTrial"
                ),
                [sty.operationDescriptiontempPickOneModal]: hasVariant(
                  $state,
                  "tempPickOneModal",
                  "tempPickOneModal"
                ),
              }
            )}
          >
            {hasVariant($state, "tempPickOneModal", "tempPickOneModal") ? (
              <React.Fragment>
                <React.Fragment>
                  {"Select a new plan to upgrade. "}
                </React.Fragment>
                {
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link___7C6Pl,
                      {
                        [sty.linkonFreeTrial___7C6PLgSsNx]: hasVariant(
                          $state,
                          "onFreeTrial",
                          "onFreeTrial"
                        ),
                        [sty.linktempPickOneModal___7C6PLzGtUe]: hasVariant(
                          $state,
                          "tempPickOneModal",
                          "tempPickOneModal"
                        ),
                      }
                    )}
                    href={"https://www.plasmic.app/pricing/"}
                    platform={"react"}
                    target={"_blank"}
                  >
                    {hasVariant($state, "tempPickOneModal", "tempPickOneModal")
                      ? "Learn more."
                      : hasVariant($state, "onFreeTrial", "onFreeTrial")
                      ? "Learn more."
                      : "Learn more."}
                  </PlasmicLink__>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            ) : hasVariant($state, "onFreeTrial", "onFreeTrial") ? (
              <React.Fragment>
                <React.Fragment>
                  {
                    "Select a new plan to upgrade. You'll only be charged after your trial ends. "
                  }
                </React.Fragment>
                {
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link___7C6Pl,
                      {
                        [sty.linkonFreeTrial___7C6PLgSsNx]: hasVariant(
                          $state,
                          "onFreeTrial",
                          "onFreeTrial"
                        ),
                        [sty.linktempPickOneModal___7C6PLzGtUe]: hasVariant(
                          $state,
                          "tempPickOneModal",
                          "tempPickOneModal"
                        ),
                      }
                    )}
                    href={"https://www.plasmic.app/pricing/"}
                    platform={"react"}
                    target={"_blank"}
                  >
                    {hasVariant($state, "tempPickOneModal", "tempPickOneModal")
                      ? "Learn more."
                      : hasVariant($state, "onFreeTrial", "onFreeTrial")
                      ? "Learn more."
                      : "Learn more."}
                  </PlasmicLink__>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            ) : (
              "upgrade"
            )}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nm0Di,
              {
                [sty.textonFreeTrial__nm0DigSsNx]: hasVariant(
                  $state,
                  "onFreeTrial",
                  "onFreeTrial"
                ),
                [sty.texttempPickOneModal__nm0DizGtUe]: hasVariant(
                  $state,
                  "tempPickOneModal",
                  "tempPickOneModal"
                ),
              }
            )}
          >
            {hasVariant($state, "tempPickOneModal", "tempPickOneModal") ? (
              <React.Fragment>
                <React.Fragment>
                  {"Select a new plan to upgrade. "}
                </React.Fragment>
                {
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link__py5Bc,
                      {
                        [sty.linkonFreeTrial__py5BcgSsNx]: hasVariant(
                          $state,
                          "onFreeTrial",
                          "onFreeTrial"
                        ),
                        [sty.linktempPickOneModal__py5BczGtUe]: hasVariant(
                          $state,
                          "tempPickOneModal",
                          "tempPickOneModal"
                        ),
                      }
                    )}
                    href={"https://www.plasmic.app/pricing/"}
                    platform={"react"}
                    target={"_blank"}
                  >
                    {hasVariant($state, "tempPickOneModal", "tempPickOneModal")
                      ? "Learn more."
                      : hasVariant($state, "onFreeTrial", "onFreeTrial")
                      ? "Learn more."
                      : "Learn more."}
                  </PlasmicLink__>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            ) : hasVariant($state, "onFreeTrial", "onFreeTrial") ? (
              <React.Fragment>
                <React.Fragment>
                  {
                    "Select a new plan to upgrade. You'll only be charged after your trial ends. "
                  }
                </React.Fragment>
                {
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link__py5Bc,
                      {
                        [sty.linkonFreeTrial__py5BcgSsNx]: hasVariant(
                          $state,
                          "onFreeTrial",
                          "onFreeTrial"
                        ),
                        [sty.linktempPickOneModal__py5BczGtUe]: hasVariant(
                          $state,
                          "tempPickOneModal",
                          "tempPickOneModal"
                        ),
                      }
                    )}
                    href={"https://www.plasmic.app/pricing/"}
                    platform={"react"}
                    target={"_blank"}
                  >
                    {hasVariant($state, "tempPickOneModal", "tempPickOneModal")
                      ? "Learn more."
                      : hasVariant($state, "onFreeTrial", "onFreeTrial")
                      ? "Learn more."
                      : "Learn more."}
                  </PlasmicLink__>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <React.Fragment>{". "}</React.Fragment>
                {
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      projectcss.plasmic_default__inline,
                      sty.link__py5Bc,
                      {
                        [sty.linkonFreeTrial__py5BcgSsNx]: hasVariant(
                          $state,
                          "onFreeTrial",
                          "onFreeTrial"
                        ),
                        [sty.linktempPickOneModal__py5BczGtUe]: hasVariant(
                          $state,
                          "tempPickOneModal",
                          "tempPickOneModal"
                        ),
                      }
                    )}
                    href={"https://www.plasmic.app/pricing/"}
                    platform={"react"}
                    target={"_blank"}
                  >
                    {hasVariant($state, "tempPickOneModal", "tempPickOneModal")
                      ? "Learn more."
                      : hasVariant($state, "onFreeTrial", "onFreeTrial")
                      ? "Learn more."
                      : "Learn more."}
                  </PlasmicLink__>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__eBvEe)}>
        <Switch
          data-plasmic-name={"billingFrequencyToggle"}
          data-plasmic-override={overrides.billingFrequencyToggle}
          className={classNames("__wab_instance", sty.billingFrequencyToggle)}
          isChecked={
            generateStateValueProp($state, [
              "billingFrequencyToggle",
              "isChecked",
            ]) ?? false
          }
          onChange={async (...eventArgs: any) => {
            ((...eventArgs) => {
              generateStateOnChangeProp($state, [
                "billingFrequencyToggle",
                "isChecked",
              ])(eventArgs[0]);
            }).apply(null, eventArgs);

            if (
              eventArgs.length > 1 &&
              eventArgs[1] &&
              eventArgs[1]._plasmic_state_init_
            ) {
              return;
            }
          }}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__c7DnN
            )}
          >
            {"Annual Billing (Save 20%)"}
          </div>
        </Switch>
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__cZbE, {
          [sty.freeBoxskipCreditCard__cZbE73226]: hasVariant(
            $state,
            "skipCreditCard",
            "skipCreditCard"
          ),
        })}
      >
        <PriceTierPicker
          data-plasmic-name={"priceTierPicker"}
          data-plasmic-override={overrides.priceTierPicker}
          billingFrequency={"month"}
          className={classNames("__wab_instance", sty.priceTierPicker, {
            [sty.priceTierPickertempPickOneModal]: hasVariant(
              $state,
              "tempPickOneModal",
              "tempPickOneModal"
            ),
          })}
          noScrolling={true}
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lrnq, {
            [sty.freeBoxskipCreditCard__lrnq73226]: hasVariant(
              $state,
              "skipCreditCard",
              "skipCreditCard"
            ),
            [sty.freeBoxtempPickOneModal__lrnQzGtUe]: hasVariant(
              $state,
              "tempPickOneModal",
              "tempPickOneModal"
            ),
          })}
        >
          <div className={classNames(projectcss.all, sty.freeBox__tMKh6)}>
            <Bill
              data-plasmic-name={"bill"}
              data-plasmic-override={overrides.bill}
              className={classNames("__wab_instance", sty.bill)}
              seatDescription={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pogjR
                  )}
                >
                  {"$15 x 10 seats x 1 month"}
                </div>
              }
            />
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___7P51B, {
              [sty.freeBoxskipCreditCard___7P51B73226]: hasVariant(
                $state,
                "skipCreditCard",
                "skipCreditCard"
              ),
            })}
          >
            <div
              data-plasmic-name={"spinnerContainer"}
              data-plasmic-override={overrides.spinnerContainer}
              className={classNames(projectcss.all, sty.spinnerContainer)}
            />

            <Button
              data-plasmic-name={"cancelButton"}
              data-plasmic-override={overrides.cancelButton}
              className={classNames("__wab_instance", sty.cancelButton)}
              endIcon={
                <ChevronDownSvgIcon
                  className={classNames(projectcss.all, sty.svg__cbbt)}
                  role={"img"}
                />
              }
              size={"wide"}
              startIcon={
                <ArrowRightSvgIcon
                  className={classNames(projectcss.all, sty.svg__hfzby)}
                  role={"img"}
                />
              }
            >
              {"Cancel"}
            </Button>
            <Button
              data-plasmic-name={"confirmButton"}
              data-plasmic-override={overrides.confirmButton}
              className={classNames("__wab_instance", sty.confirmButton)}
              endIcon={
                <ChevronDownSvgIcon
                  className={classNames(projectcss.all, sty.svg__p2T2J)}
                  role={"img"}
                />
              }
              size={"wide"}
              startIcon={
                <ArrowRightSvgIcon
                  className={classNames(projectcss.all, sty.svg__r5EBh)}
                  role={"img"}
                />
              }
              type={["primary"]}
            >
              {"Submit"}
            </Button>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6BfLa, {
            [sty.freeBoxskipCreditCard___6BfLa73226]: hasVariant(
              $state,
              "skipCreditCard",
              "skipCreditCard"
            ),
            [sty.freeBoxtempPickOneModal___6BfLAzGtUe]: hasVariant(
              $state,
              "tempPickOneModal",
              "tempPickOneModal"
            ),
          })}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__eVxan)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ik21K
              )}
            >
              {"Checkout"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__i0LzW)}
            >
              <div
                data-plasmic-name={"stripeCardElement"}
                data-plasmic-override={overrides.stripeCardElement}
                className={classNames(projectcss.all, sty.stripeCardElement)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__b6Vot
                  )}
                >
                  {"STRIPE CARD ELEMENT"}
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___6RZop)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__aX7C
                  )}
                >
                  {"Expiration"}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__m66BV)}>
                  <div
                    data-plasmic-name={"stripeExpiryElement"}
                    data-plasmic-override={overrides.stripeExpiryElement}
                    className={classNames(
                      projectcss.all,
                      sty.stripeExpiryElement
                    )}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__a3V3H
                      )}
                    >
                      {"EXP-ELT"}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__s2GDv)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__naWaw
                  )}
                >
                  {"Security Code"}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__wiZSw)}>
                  <div
                    data-plasmic-name={"stripeCvcElement"}
                    data-plasmic-override={overrides.stripeCvcElement}
                    className={classNames(projectcss.all, sty.stripeCvcElement)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__biGjm
                      )}
                    >
                      {"CVC-ELT"}
                    </div>
                  </div>
                </div>
              </div>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___5U5GM, {
              [sty.freeBoxskipCreditCard___5U5GM73226]: hasVariant(
                $state,
                "skipCreditCard",
                "skipCreditCard"
              ),
            })}
          >
            <div
              data-plasmic-name={"spinnerContainer2"}
              data-plasmic-override={overrides.spinnerContainer2}
              className={classNames(projectcss.all, sty.spinnerContainer2)}
            />

            <Button
              data-plasmic-name={"cancelButton2"}
              data-plasmic-override={overrides.cancelButton2}
              className={classNames("__wab_instance", sty.cancelButton2)}
              endIcon={
                <ChevronDownSvgIcon
                  className={classNames(projectcss.all, sty.svg__muOl)}
                  role={"img"}
                />
              }
              size={"wide"}
              startIcon={
                <ArrowRightSvgIcon
                  className={classNames(projectcss.all, sty.svg___6COrm)}
                  role={"img"}
                />
              }
            >
              {"Cancel"}
            </Button>
            <Button
              data-plasmic-name={"confirmButton2"}
              data-plasmic-override={overrides.confirmButton2}
              className={classNames("__wab_instance", sty.confirmButton2)}
              endIcon={
                <ChevronDownSvgIcon
                  className={classNames(projectcss.all, sty.svg__m1Mj)}
                  role={"img"}
                />
              }
              size={"wide"}
              startIcon={
                <ArrowRightSvgIcon
                  className={classNames(projectcss.all, sty.svg___8Fw5J)}
                  role={"img"}
                />
              }
              type={["primary"]}
            >
              {"Submit"}
            </Button>
          </Stack__>
        </Stack__>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "operationTitle",
    "operationDescription",
    "billingFrequencyToggle",
    "priceTierPicker",
    "bill",
    "spinnerContainer",
    "cancelButton",
    "confirmButton",
    "stripeCardElement",
    "stripeExpiryElement",
    "stripeCvcElement",
    "spinnerContainer2",
    "cancelButton2",
    "confirmButton2",
  ],
  operationTitle: ["operationTitle"],
  operationDescription: ["operationDescription"],
  billingFrequencyToggle: ["billingFrequencyToggle"],
  priceTierPicker: ["priceTierPicker"],
  bill: ["bill"],
  spinnerContainer: ["spinnerContainer"],
  cancelButton: ["cancelButton"],
  confirmButton: ["confirmButton"],
  stripeCardElement: ["stripeCardElement"],
  stripeExpiryElement: ["stripeExpiryElement"],
  stripeCvcElement: ["stripeCvcElement"],
  spinnerContainer2: ["spinnerContainer2"],
  cancelButton2: ["cancelButton2"],
  confirmButton2: ["confirmButton2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  operationTitle: "div";
  operationDescription: "div";
  billingFrequencyToggle: typeof Switch;
  priceTierPicker: typeof PriceTierPicker;
  bill: typeof Bill;
  spinnerContainer: "div";
  cancelButton: typeof Button;
  confirmButton: typeof Button;
  stripeCardElement: "div";
  stripeExpiryElement: "div";
  stripeCvcElement: "div";
  spinnerContainer2: "div";
  cancelButton2: typeof Button;
  confirmButton2: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpsellCheckout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpsellCheckout__VariantsArgs;
    args?: PlasmicUpsellCheckout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUpsellCheckout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicUpsellCheckout__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicUpsellCheckout__ArgProps,
          internalVariantPropNames: PlasmicUpsellCheckout__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicUpsellCheckout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUpsellCheckout";
  } else {
    func.displayName = `PlasmicUpsellCheckout.${nodeName}`;
  }
  return func;
}

export const PlasmicUpsellCheckout = Object.assign(
  // Top-level PlasmicUpsellCheckout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    operationTitle: makeNodeComponent("operationTitle"),
    operationDescription: makeNodeComponent("operationDescription"),
    billingFrequencyToggle: makeNodeComponent("billingFrequencyToggle"),
    priceTierPicker: makeNodeComponent("priceTierPicker"),
    bill: makeNodeComponent("bill"),
    spinnerContainer: makeNodeComponent("spinnerContainer"),
    cancelButton: makeNodeComponent("cancelButton"),
    confirmButton: makeNodeComponent("confirmButton"),
    stripeCardElement: makeNodeComponent("stripeCardElement"),
    stripeExpiryElement: makeNodeComponent("stripeExpiryElement"),
    stripeCvcElement: makeNodeComponent("stripeCvcElement"),
    spinnerContainer2: makeNodeComponent("spinnerContainer2"),
    cancelButton2: makeNodeComponent("cancelButton2"),
    confirmButton2: makeNodeComponent("confirmButton2"),

    // Metadata about props expected for PlasmicUpsellCheckout
    internalVariantProps: PlasmicUpsellCheckout__VariantProps,
    internalArgProps: PlasmicUpsellCheckout__ArgProps,
  }
);

export default PlasmicUpsellCheckout;
/* prettier-ignore-end */
