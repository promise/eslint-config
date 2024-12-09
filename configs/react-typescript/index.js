import configReactJavascript from "../react-javascript/index.js";
import configTypescript from "../typescript/index.js";

// @ts-check
/** @type{ import("eslint").Linter.Config } */
export default {
  languageOptions: {
    parser: configTypescript.languageOptions?.parser,
    parserOptions: {
      ...configTypescript.languageOptions?.parserOptions,
      ...configReactJavascript.languageOptions?.parserOptions,
    },
  },
  files: ["**/*.tsx"],

  plugins: {
    ...configTypescript.plugins,
    ...configReactJavascript.plugins,
  },

  rules: {
    ...configTypescript.rules,
    ...configReactJavascript.rules,
  },
};
