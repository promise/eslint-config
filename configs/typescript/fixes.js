// https://typescript-eslint.io/rules/#extension-rules

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

const jsRules = require("../javascript").rules;

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "@typescript-eslint/brace-style": jsRules["brace-style"],
  "@typescript-eslint/comma-dangle": jsRules["comma-dangle"],
  "@typescript-eslint/comma-spacing": jsRules["comma-spacing"],
  "@typescript-eslint/default-param-last": jsRules["default-param-last"],
  "@typescript-eslint/dot-notation": jsRules["dot-notation"],
  "@typescript-eslint/func-call-spacing": jsRules["func-call-spacing"],
  "@typescript-eslint/indent": jsRules.indent,
  "@typescript-eslint/init-declarations": jsRules["init-declarations"],
  "@typescript-eslint/keyword-spacing": jsRules["keyword-spacing"],
  "@typescript-eslint/lines-between-class-members": jsRules["lines-between-class-members"],
  "@typescript-eslint/no-array-constructor": jsRules["no-array-constructor"],
  "@typescript-eslint/no-dupe-class-members": jsRules["no-dupe-class-members"],
  "@typescript-eslint/no-empty-function": jsRules["no-empty-function"],
  "@typescript-eslint/no-extra-parens": jsRules["no-extra-parens"],
  "@typescript-eslint/no-extra-semi": jsRules["no-extra-semi"],
  "@typescript-eslint/no-implied-eval": jsRules["no-implied-eval"],
  "@typescript-eslint/no-invalid-this": jsRules["no-invalid-this"],
  "@typescript-eslint/no-loop-func": jsRules["no-loop-func"],
  "@typescript-eslint/no-loss-of-precision": jsRules["no-loss-of-precision"],
  "@typescript-eslint/no-magic-numbers": jsRules["no-magic-numbers"],
  "@typescript-eslint/no-redeclare": jsRules["no-redeclare"],
  "@typescript-eslint/no-restricted-imports": jsRules["no-restricted-imports"],
  "@typescript-eslint/no-shadow": jsRules["no-shadow"],
  "@typescript-eslint/no-throw-literal": jsRules["no-throw-literal"],
  "@typescript-eslint/no-unused-expressions": jsRules["no-unused-expressions"],
  "@typescript-eslint/no-unused-vars": jsRules["no-unused-vars"],
  "@typescript-eslint/no-use-before-define": jsRules["no-use-before-define"],
  "@typescript-eslint/no-useless-constructor": jsRules["no-useless-constructor"],
  "@typescript-eslint/object-curly-spacing": jsRules["object-curly-spacing"],
  "@typescript-eslint/padding-line-between-statements": jsRules["padding-line-between-statements"],
  "@typescript-eslint/quotes": jsRules.quotes,
  "@typescript-eslint/require-array-sort-compare": ["error"],
  "@typescript-eslint/require-await": jsRules["require-await"],
  "@typescript-eslint/return-await": jsRules["no-return-await"],
  "@typescript-eslint/semi": jsRules.semi,
  "@typescript-eslint/space-before-blocks": jsRules["space-before-blocks"],
  "@typescript-eslint/space-before-function-paren": jsRules["space-before-function-paren"],
  "@typescript-eslint/space-infix-ops": jsRules["space-infix-ops"],
  "brace-style": ["off"],
  "comma-dangle": ["off"],
  "comma-spacing": ["off"],
  "default-param-last": ["off"],
  "dot-notation": ["off"],
  "func-call-spacing": ["off"],
  "indent": ["off"],
  "init-declarations": ["off"],
  "keyword-spacing": ["off"],
  "lines-between-class-members": ["off"],
  "no-array-constructor": ["off"],
  "no-dupe-class-members": ["off"],
  "no-duplicate-imports": ["off"],
  "no-empty-function": ["off"],
  "no-extra-parens": ["off"],
  "no-extra-semi": ["off"],
  "no-implied-eval": ["off"],
  "no-invalid-this": ["off"],
  "no-loop-func": ["off"],
  "no-loss-of-precision": ["off"],
  "no-magic-numbers": ["off"],
  "no-redeclare": ["off"],
  "no-restricted-imports": ["off"],
  "no-return-await": ["off"],
  "no-shadow": ["off"],
  "no-throw-literal": ["off"],
  "no-unused-expressions": ["off"],
  "no-unused-vars": ["off"],
  "no-use-before-define": ["off"],
  "no-useless-constructor": ["off"],
  "object-curly-spacing": ["off"],
  "padding-line-between-statements": ["off"],
  "quotes": ["off"],
  "require-await": ["off"],
  "semi": ["off"],
  "space-before-blocks": ["off"],
  "space-before-function-paren": ["off"],
  "space-infix-ops": ["off"],
};

module.exports = rules;
