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
    { files: ["**/*.js"], ...require("./configs/javascript"), excludedFiles: ["**/*.test.js"]},
    { files: ["**/*.ts"], ...require("./configs/typescript"), excludedFiles: ["**/*.test.ts"]},
    { files: ["**/*.test.js"], ...require("./configs/jest-javascript") },
    { files: ["**/*.test.ts"], ...require("./configs/jest-typescript") },
    { files: ["**/*.jsx"], ...require("./configs/react-javascript") },
    { files: ["**/*.tsx"], ...require("./configs/react-typescript") },
  ],
  ignorePatterns: ["node_modules", "build"],
};
