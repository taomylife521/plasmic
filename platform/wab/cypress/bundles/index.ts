import { Bundle } from "../../src/wab/shared/bundles";
import codeLibs from "./code-libs.json";
import formsBundle from "./forms.json";
import reactAriaComponentsBundle from "./react-aria-components.json";
import staleMigrationBundle from "./stale-bundle.json";
import stateManagementBundle from "./state-management.json";
import tutorialAppBundle from "./tutorial-app.json";

export default {
  "state-management": stateManagementBundle,
  "tutorial-app": tutorialAppBundle,
  "stale-bundle": staleMigrationBundle,
  forms: formsBundle,
  "code-libs": codeLibs,
  "react-aria-components": reactAriaComponentsBundle,
} as Record<string, Bundle>;
