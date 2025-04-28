// https://eslint.style/packages/js

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

import rulesJsStylistic from "../javascript/stylistic.js";

const fromStylisticJs = [
  "block-spacing",
  "brace-style",
  "comma-dangle",
  "comma-spacing",
  "func-call-spacing",
  "function-call-spacing",
  "indent",
  "key-spacing",
  "keyword-spacing",
  "lines-around-comment",
  "lines-between-class-members",
  "no-extra-parens",
  "no-extra-semi",
  "object-curly-newline",
  "object-curly-spacing",
  "object-property-newline",
  "padding-line-between-statements",
  "quote-props",
  "quotes",
  "semi",
  "semi-spacing",
  "space-before-blocks",
  "space-before-function-paren",
  "space-infix-ops",
];

const fixedRulesForStylisticJs = Object.fromEntries(fromStylisticJs.map(rule => [
  [`@stylistic/js/${rule}`, ["off"]],
  [`@stylistic/ts/${rule}`, rulesJsStylistic[`@stylistic/js/${rule}`]],
]).reduce((acc, [one, two]) => {
  acc.push(one, two);
  return acc;
}, []));

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "@stylistic/ts/member-delimiter-style": ["error"],
  "@stylistic/ts/type-annotation-spacing": ["error"],
  ...fixedRulesForStylisticJs,
};
