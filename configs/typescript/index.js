import pluginStylisticTs from "@stylistic/eslint-plugin-ts";
import pluginTypescriptEslint from "@typescript-eslint/eslint-plugin";
import parserTypescriptEslint from "@typescript-eslint/parser";
import configJavascript from "../javascript/index.js";
import rulesFixes from "./fixes.js";
import rulesMain from "./main.js";
import rulesStylistic from "./stylistic.js";

// @ts-check
/** @type{ import("eslint").Linter.Config } */
export default {
  languageOptions: {
    parser: parserTypescriptEslint,
    parserOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      projectService: true,
    },
  },

  files: ["**/*.ts"],
  ignores: ["**/*.test.ts"],

  plugins: {
    ...configJavascript.plugins,
    "@typescript-eslint": pluginTypescriptEslint,
    "@stylistic/ts": pluginStylisticTs,
  },

  rules: {
    ...configJavascript.rules,
    ...rulesMain,
    ...rulesFixes,
    ...rulesStylistic,
  },
};
