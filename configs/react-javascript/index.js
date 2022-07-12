// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
const config = {
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: ["react"],

  // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
  rules: {
    ...require("./rules"),
    ...require("./jsx-specific"),
    ...require("../javascript").rules,
  },
};

module.exports = config;
