import pluginTypescriptEslint from "@typescript-eslint/eslint-plugin";
import parserTypescriptEslint from "@typescript-eslint/parser";
import configJavascript from "../javascript/index.js";
import rulesFixes from "./fixes.js";
import rulesMain from "./main.js";

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
  },

  rules: {
    ...configJavascript.rules,
    ...rulesMain,
    ...rulesFixes,
  },
};
