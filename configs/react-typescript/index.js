// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: require("../react-javascript").parserOptions,
  plugins: [...require("../react-javascript").plugins, "@typescript-eslint"],

  // https://typescript-eslint.io/rules/
  rules: {
    ...require("../react-javascript/rules"),
    ...require("../react-javascript/jsx-specific"),
    ...require("../typescript").rules,
  },
};
