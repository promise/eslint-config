// @ts-check
/** @type{ import("eslint").Linter.BaseConfig } */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "tsconfig.json",
  },
  plugins: ["@typescript-eslint"],

  // https://typescript-eslint.io/rules/
  rules: {
    ...require("../javascript").rules,
    ...require("./main"),
    ...require("./overrides"),
  },
};
