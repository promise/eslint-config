// https://eslint.org/docs/rules/#possible-problems

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "perfectionist/sort-array-includes": ["error"],
  "perfectionist/sort-classes": ["warn"],
  "perfectionist/sort-decorators": ["warn"],
  "perfectionist/sort-enums": ["warn"],
  "perfectionist/sort-exports": ["warn"],
  "perfectionist/sort-heritage-clauses": ["warn"],
  "perfectionist/sort-imports": ["error", { newlinesBetween: "ignore", partitionByNewLine: true }],
  "perfectionist/sort-interfaces": ["off"],
  "perfectionist/sort-intersection-types": ["error"],
  "perfectionist/sort-jsx-props": ["error"],
  "perfectionist/sort-maps": ["error"],
  "perfectionist/sort-modules": ["off"],
  "perfectionist/sort-named-exports": ["error"],
  "perfectionist/sort-named-imports": ["error"],
  "perfectionist/sort-object-types": ["error"],
  "perfectionist/sort-objects": ["off"],
  "perfectionist/sort-sets": ["error"],
  "perfectionist/sort-switch-case": ["off"],
  "perfectionist/sort-union-types": ["error"],
  "perfectionist/sort-variable-declarations": ["off"],
};
