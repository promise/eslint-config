// https://github.com/import-js/eslint-plugin-import#helpful-warnings

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "i/export": ["error"],
  "i/no-deprecated": ["warn"],
  "i/no-empty-named-blocks": ["error"],
  "i/no-extraneous-dependencies": ["off"],
  "i/no-mutable-exports": ["error"],
  "i/no-named-as-default": ["warn"],
  "i/no-named-as-default-member": ["error"],
  "i/no-unused-modules": ["off"],
};

module.exports = rules;
