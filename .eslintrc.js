// @ts-check
/** @type{ import("eslint").Linter.Config } */
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  overrides: [
    { files: ["**/*.js"], ...require("./configs/javascript") },
    { files: ["**/*.ts"], ...require("./configs/typescript") },
  ],
  ignorePatterns: ["node_modules"],
};
