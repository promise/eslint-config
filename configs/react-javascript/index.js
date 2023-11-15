// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
const config = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: [
    ...require("../javascript").plugins ?? [],
    "react",
    "tailwindcss",
    "@stylistic/jsx",
  ],

  // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
  rules: {
    ...require("../javascript").rules,
    ...require("./jsx-specific"),
    ...require("./rules"),
    ...require("./stylistic"),
    ...require("./tailwind"),
  },
};

module.exports = config;
