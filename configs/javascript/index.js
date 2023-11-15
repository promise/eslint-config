// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
const config = {
  plugins: ["i", "@stylistic/js"],

  // https://eslint.org/docs/rules/
  rules: {
    ...require("./import"),
    ...require("./layout-and-formatting"),
    ...require("./possible-problems"),
    ...require("./suggestions"),
    ...require("./stylistic"),
  },
};

module.exports = config;
