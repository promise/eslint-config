// https://github.com/import-js/eslint-plugin-import#style-guide

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "i/consistent-type-specifier-style": ["off"],
  "i/dynamic-import-chunkname": ["off"],
  "i/exports-last": ["off"],
  "i/extensions": ["off"],
  "i/first": ["warn"],
  "i/group-exports": ["off"],
  "i/max-dependencies": ["off"],
  "i/newline-after-import": ["error"],
  "i/no-anonymous-default-export": ["off"],
  "i/no-default-export": ["off"],
  "i/no-duplicates": ["error", { "prefer-inline": false }],
  "i/no-named-default": ["error"],
  "i/no-named-export": ["off"],
  "i/no-namespace": ["error"],
  "i/no-unassigned-import": ["off"],
  "i/order": ["error", { "alphabetize": { caseInsensitive: true, order: "asc", orderImportKind: "asc" }, "newlines-between": "never", "warnOnUnassignedImports": true }],
  "i/prefer-default-export": ["warn"],
};

module.exports = rules;
