// https://eslint.style/packages/js

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "@stylistic/ts/member-delimiter-style": ["error"],
  "@stylistic/ts/type-annotation-spacing": ["error"],
};

module.exports = rules;
