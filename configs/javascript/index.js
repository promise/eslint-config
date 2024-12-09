import pluginStylisticJs from "@stylistic/eslint-plugin-js";
import { rules as pluginImportRules } from "eslint-plugin-import";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import rulesImport from "./import/index.js";
import rulesLayoutAndFormatting from "./layout-and-formatting.js";
import rulesPerfectionist from "./perfectionist.js";
import rulesPossibleProblems from "./possible-problems.js";
import rulesStylistic from "./stylistic.js";
import rulesSuggestions from "./suggestions.js";

// @ts-check
/** @type{ import("eslint").Linter.Config } */
export default {
  files: ["**/*.js"],
  ignores: ["**/*.test.js"],

  plugins: {
    // import package is really weird right here
    "import": { rules: pluginImportRules },
    "@stylistic/js": pluginStylisticJs,
    "perfectionist": pluginPerfectionist,
  },

  // https://eslint.org/docs/rules/
  rules: {
    ...rulesImport,
    ...rulesLayoutAndFormatting,
    ...rulesPerfectionist,
    ...rulesPossibleProblems,
    ...rulesSuggestions,
    ...rulesStylistic,
  },
};
