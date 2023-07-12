// https://github.com/import-js/eslint-plugin-import#static-analysis

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "i/default": ["error"],
  "i/named": ["error"],
  "i/namespace": ["error"],
  "i/no-absolute-path": ["error"],
  "i/no-cycle": ["warn"],
  "i/no-dynamic-require": ["off"],
  "i/no-internal-modules": ["off"],
  "i/no-relative-packages": ["error"],
  "i/no-relative-parent-imports": ["off"],
  "i/no-restricted-paths": ["off"],
  "i/no-self-import": ["error"],
  "i/no-unresolved": ["off"],
  "i/no-useless-path-segments": ["error"],
  "i/no-webpack-loader-syntax": ["error"],
};

module.exports = rules;
