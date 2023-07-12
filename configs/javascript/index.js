// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
const config = {
  plugins: ["i"],

  // https://eslint.org/docs/rules/
  rules: {
    ...require("./import/helpful"),
    ...require("./import/module"),
    ...require("./import/static"),
    ...require("./import/style"),
    ...require("./possible-problems"),
    ...require("./suggestions"),
    ...require("./layout-and-formatting"),
  },
};

module.exports = config;
