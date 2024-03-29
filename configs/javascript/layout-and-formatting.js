// https://eslint.org/docs/rules/#possible-problems

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "line-comment-position": ["error"],
  "unicode-bom": ["error", "never"],

};

module.exports = rules;
