// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ...require("../typescript").parserOptions,
    ...require("../react-javascript").parserOptions,
  },
  plugins: [
    ...require("../typescript").plugins ?? [],
    ...require("../react-javascript").plugins ?? [],
  ],

  // https://typescript-eslint.io/rules/
  rules: {
    ...require("../typescript").rules,
    ...require("../react-javascript/rules"),
    ...require("../react-javascript/jsx-specific"),
  },
};
