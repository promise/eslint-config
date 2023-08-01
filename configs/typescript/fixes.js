// https://typescript-eslint.io/rules/#extension-rules

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

const jsRules = require("../javascript").rules;

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "@typescript-eslint/return-await": ["error"],
};

const ruleFixes = [
  "brace-style",
  "block-spacing",
  "class-methods-use-this",
  "comma-dangle",
  "comma-spacing",
  "default-param-last",
  "dot-notation",
  "func-call-spacing",
  "indent",
  "init-declarations",
  "key-spacing",
  "keyword-spacing",
  "lines-around-comment",
  "lines-between-class-members",
  "no-array-constructor",
  "no-dupe-class-members",
  "no-empty-function",
  "no-extra-parens",
  "no-extra-semi",
  "no-implied-eval",
  "no-invalid-this",
  "no-loop-func",
  "no-loss-of-precision",
  "no-magic-numbers",
  "no-redeclare",
  "no-restricted-imports",
  "no-shadow",
  "no-throw-literal",
  "no-unused-expressions",
  "no-unused-vars",
  "no-use-before-define",
  "no-useless-constructor",
  "object-curly-spacing",
  "padding-line-between-statements",
  "quotes",
  "require-await",
  "semi",
  "space-before-blocks",
  "space-before-function-paren",
  "space-infix-ops",
];

ruleFixes.forEach(rule => {
  rules[`@typescript-eslint/${rule}`] = jsRules[rule];
  rules[rule] = ["off"];
});

module.exports = rules;
