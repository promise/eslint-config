// https://github.com/import-js/eslint-plugin-import#module-systems

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "i/no-amd": ["error"],
  "i/no-commonjs": ["off"],
  "i/no-import-module-exports": ["error"],
  "i/no-nodejs-modules": ["off"],
  "i/unambiguous": ["off"],
};

module.exports = rules;
