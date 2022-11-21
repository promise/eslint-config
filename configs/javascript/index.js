// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
const config = {
  // https://eslint.org/docs/rules/
  rules: {
    ...require("./possible-problems"),
    ...require("./suggestions"),
    ...require("./layout-and-formatting"),
  },
};

module.exports = config;
