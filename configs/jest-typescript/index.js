import configJestJavascript from "../jest-javascript/index.js";
import configTypescript from "../typescript/index.js";

// @ts-check
/** @type{ import("eslint").Linter.Config } */
export default {
  languageOptions: configTypescript.languageOptions,
  files: ["**/*.test.ts"],

  plugins: {
    ...configTypescript.plugins,
    ...configJestJavascript.plugins,
  },

  // https://github.com/jest-community/eslint-plugin-jest#rules
  rules: {
    ...configTypescript.rules,
    ...configJestJavascript.rules,
  },
};
