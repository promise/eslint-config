// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: require("../typescript").parserOptions,

  plugins: [
    ...require("../typescript").plugins ?? [],
    ...require("../jest-javascript").plugins ?? [],
  ],

  // https://github.com/jest-community/eslint-plugin-jest#rules
  rules: {
    ...require("../typescript").rules,
    ...require("../jest-javascript/rules"),
  },
};

module.exports = config;
