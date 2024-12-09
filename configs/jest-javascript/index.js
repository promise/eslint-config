import pluginJest from "eslint-plugin-jest";
import configJavascript from "../javascript/index.js";
import rulesMain from "./main.js";

// @ts-check
/** @type{ import("eslint").Linter.Config } */
export default {
  files: ["**/*.test.js"],

  plugins: {
    ...configJavascript.plugins,
    jest: pluginJest,
  },

  // https://github.com/jest-community/eslint-plugin-jest#rules
  rules: {
    ...configJavascript.rules,
    ...rulesMain,
  },
};
