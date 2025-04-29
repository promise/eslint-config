import pluginStylisticJsx from "@stylistic/eslint-plugin-jsx";
import pluginReact from "eslint-plugin-react";
// import pluginTailwindcss from "eslint-plugin-tailwindcss";
import configJavascript from "../javascript/index.js";
import rulesJsxSpecific from "./jsx-specific.js";
import rulesMain from "./main.js";
import rulesStylistic from "./stylistic.js";
// import rulesTailwind from "./tailwind.js";

// @ts-check
/** @type{ import("eslint").Linter.Config } */
export default {
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  files: ["**/*.jsx"],

  plugins: {
    ...configJavascript.plugins,
    "react": pluginReact,
    // "tailwindcss": pluginTailwindcss,
    "@stylistic/jsx": pluginStylisticJsx,
  },

  // https://github.com/jest-community/eslint-plugin-jest#rules
  rules: {
    ...configJavascript.rules,
    ...rulesJsxSpecific,
    ...rulesMain,
    ...rulesStylistic,
    // ...rulesTailwind,
  },
};
