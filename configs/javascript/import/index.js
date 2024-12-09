import rulesHelpful from "./helpful.js";
import rulesModule from "./module.js";
import rulesStatic from "./static.js";
import rulesStyle from "./style.js";

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  ...rulesHelpful,
  ...rulesModule,
  ...rulesStatic,
  ...rulesStyle,
};
