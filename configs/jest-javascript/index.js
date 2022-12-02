// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
const config = {
  plugins: [
    ...require("../javascript").plugins ?? [],
    "jest",
  ],

  // https://github.com/jest-community/eslint-plugin-jest#rules
  rules: {
    ...require("../javascript").rules,
    ...require("./rules"),
  },
};

module.exports = config;
