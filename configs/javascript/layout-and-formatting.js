// https://eslint.org/docs/rules/#possible-problems

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "unicode-bom": ["error", "never"],
};
