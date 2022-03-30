/* eslint-disable max-len */
// https://eslint.org/docs/rules/#suggestions

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "accessor-pairs": ["error"],
  "arrow-body-style": ["error", "as-needed"],
  "block-scoped-var": ["error"],
  "camelcase": ["error"],
  "capitalized-comments": ["error", "never"],
  "class-methods-use-this": ["error"],
  "complexity": ["warn"],
  "consistent-return": ["error"],
  "consistent-this": ["error"],
  "curly": ["error", "multi"],
  "default-case": ["error"],
  "default-case-last": ["error"],
  "default-param-last": ["error"],
  "dot-notation": ["error"],
  "eqeqeq": ["error"],
  "func-name-matching": ["error", "never"],
  "func-names": ["error", "as-needed"],
  "func-style": ["error", "declaration", {allowArrowFunctions: true}],
  "grouped-accessor-pairs": ["error", "getBeforeSet"],
  "guard-for-in": ["off"],
  "id-denylist": ["off"],
  "id-length": ["warn"],
  "id-match": ["off"],
  "init-declarations": ["error"],
  "max-classes-per-file": ["warn"],
  "max-depth": ["warn"],
  "max-lines": ["warn", {skipBlankLines: true, skipComments: true}],
  "max-lines-per-function": ["warn", {skipBlankLines: true, skipComments: true}],
  "max-nested-callbacks": ["warn"],
  "max-params": ["off"],
  "max-statements": ["off"],
  "multiline-comment-style": ["error", "separate-lines"],
  "new-cap": ["error"],
  "no-alert": ["off"],
  "no-array-constructor": ["error"],
  "no-bitwise": ["error"],
  "no-caller": ["error"],
  "no-case-declarations": ["error"],
  "no-confusing-arrow": ["error"],
  "no-console": ["warn"],
  "no-continue": ["error"],
  "no-delete-var": ["error"],
  "no-div-regex": ["error"],
  "no-else-return": ["error", {allowElseIf: false}],
  "no-empty": ["error"],
  "no-empty-function": ["error"],
  "no-eq-null": ["error"],
  "no-eval": ["warn"],
  "no-extend-native": ["error"],
  "no-extra-bind": ["error"],
  "no-extra-boolean-cast": ["error"],
  "no-extra-label": ["error"],
  "no-extra-semi": ["error"],
  "no-floating-decimal": ["error"],
  "no-global-assign": ["error"],
  "no-implicit-coercion": ["error", {disallowTemplateShorthand: true}],
  "no-implicit-globals": ["off"],
  "no-implied-eval": ["error"],
  "no-inline-comments": ["error"],
  "no-invalid-this": ["error"],
  "no-iterator": ["error"],
  "no-label-var": ["error"],
  "no-labels": ["error"],
  "no-lone-blocks": ["error"],
  "no-lonely-if": ["error"],
  "no-loop-func": ["error"],
  "no-magic-numbers": ["warn"],
  "no-mixed-operators": ["error"],
  "no-multi-assign": ["error"],
  "no-multi-str": ["error"],
  "no-negated-condition": ["error"],
  "no-nested-ternary": ["error"],
  "no-new": ["error"],
  "no-new-func": ["error"],
  "no-new-object": ["error"],
  "no-new-wrappers": ["off"],
  "no-nonoctal-decimal-escape": ["error"],
  "no-octal": ["error"],
  "no-octal-escape": ["error"],
  "no-param-reassign": ["error"],
  "no-plusplus": ["error"],
  "no-proto": ["error"],
  "no-redeclare": ["error"],
  "no-regex-spaces": ["error"],
  "no-restricted-exports": ["off"],
  "no-restricted-globals": ["off"],
  "no-restricted-imports": ["off"],
  "no-restricted-properties": ["off"],
  "no-restricted-syntax": ["off"],
  "no-return-assign": ["error", "always"],
  "no-return-await": ["error"],
  "no-script-url": ["error"],
  "no-sequences": ["error", {allowInParentheses: false}],
  "no-shadow": ["error"],
  "no-shadow-restricted-names": ["error"],
  "no-ternary": ["off"],
  "no-throw-literal": ["error"],
  "no-undef-init": ["error"],
  "no-undefined": ["error"],
  "no-underscore-dangle": ["error"],
  "no-unneeded-ternary": ["error"],
  "no-unused-expressions": ["error"],
  "no-unused-labels": ["error"],
  "no-useless-call": ["error"],
  "no-useless-catch": ["error"],
  "no-useless-computed-key": ["error"],
  "no-useless-concat": ["error"],
  "no-useless-constructor": ["error"],
  "no-useless-escape": ["error"],
  "no-useless-rename": ["error"],
  "no-useless-return": ["error"],
  "no-var": ["error"],
  "no-void": ["off"],
  "no-warning-comments": ["warn"],
  "no-with": ["error"],
  "object-shorthand": ["error"],
  "one-var": ["error", "never"],
  "one-var-declaration-per-line": ["off"],
  "operator-assignment": ["error", "always"],
  "prefer-arrow-callback": ["error"],
  "prefer-const": ["error"],
  "prefer-destructuring": ["error"],
  "prefer-exponentiation-operator": ["error"],
  "prefer-named-capture-group": ["off"],
  "prefer-numeric-literals": ["error"],
  "prefer-object-has-own": ["error"],
  "prefer-object-spread": ["error"],
  "prefer-promise-reject-errors": ["off"],
  "prefer-regex-literals": ["error"],
  "prefer-rest-params": ["error"],
  "prefer-spread": ["error"],
  "prefer-template": ["error"],
  "quote-props": ["error", "consistent-as-needed"],
  "radix": ["error", "as-needed"],
  "require-await": ["error"],
  "require-unicode-regexp": ["warn"],
  "require-yield": ["error"],
  "sort-imports": ["error"],
  "sort-keys": ["off"],
  "sort-vars": ["off"],
  "spaced-comment": ["error", "always"],
  "strict": ["off"],
  "symbol-description": ["error"],
  "vars-on-top": ["error"],
  "yoda": ["error"],
};

module.exports = rules;
