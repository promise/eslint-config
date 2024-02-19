// https://typescript-eslint.io/rules/#extension-rules

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

const jsRules = require("../javascript").rules;

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {};

const ruleFixes = [
  "block-spacing",
  "brace-style",
  "class-methods-use-this",
  "comma-dangle",
  "comma-spacing",
  "default-param-last",
  "dot-notation",
  "func-call-spacing",
  "function-call-spacing",
  "indent",
  "init-declarations",
  "key-spacing",
  "keyword-spacing",
  "lines-around-comment",
  "lines-between-class-members",
  "max-params",
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
  "prefer-destructuring",
  "prefer-promise-reject-errors",
  "quotes",
  "quote-props",
  "require-await",
  "semi",
  "space-before-blocks",
  "space-before-function-paren",
  "space-infix-ops",
];

const deprecatedTypescriptEslintRules = [
  "block-spacing",
  "brace-style",
  "comma-dangle",
  "comma-spacing",
  "func-call-spacing",
  "indent",
  "key-spacing",
  "keyword-spacing",
  "lines-around-comment",
  "lines-between-class-members",
  "no-extra-parens",
  "no-extra-semi",
  "padding-line-between-statements",
  "quotes",
  "quote-props",
  "semi",
  "space-before-blocks",
  "space-before-function-paren",
  "space-infix-ops",
  "function-call-spacing",
  "object-curly-spacing",
];

ruleFixes.forEach(rule => {
  if (jsRules[`@stylistic/js/${rule}`]) {
    rules[`@stylistic/ts/${rule}`] = jsRules[`@stylistic/js/${rule}`];
    rules[`@stylistic/js/${rule}`] = ["off"];
    if (!deprecatedTypescriptEslintRules.includes(rule)) rules[`@typescript-eslint/${rule}`] = ["off"];
  } else if (jsRules[rule]) {
    rules[`@typescript-eslint/${rule}`] = jsRules[rule];
    rules[rule] = ["off"];
  }
});

module.exports = rules;
