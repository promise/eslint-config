// https://eslint.style/packages/js

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "@stylistic/js/array-bracket-newline": ["error"],
  "@stylistic/js/array-bracket-spacing": ["error", "never", { arraysInArrays: false, objectsInArrays: false, singleValue: false }],
  "@stylistic/js/array-element-newline": ["error", "consistent", { multiline: true }],
  "@stylistic/js/arrow-parens": ["error", "as-needed"],
  "@stylistic/js/arrow-spacing": ["error"],
  "@stylistic/js/block-spacing": ["error"],
  "@stylistic/js/brace-style": ["error", "1tbs", { allowSingleLine: true }],
  "@stylistic/js/comma-dangle": ["error", "always-multiline"],
  "@stylistic/js/comma-spacing": ["error"],
  "@stylistic/js/comma-style": ["error"],
  "@stylistic/js/computed-property-spacing": ["error"],
  "@stylistic/js/dot-location": ["error", "property"],
  "@stylistic/js/eol-last": ["error"],
  "@stylistic/js/func-call-spacing": ["error"],
  "@stylistic/js/function-call-argument-newline": ["error", "consistent"],
  "@stylistic/js/function-call-spacing": ["error"],
  "@stylistic/js/function-paren-newline": ["error", "consistent"],
  "@stylistic/js/generator-star-spacing": ["error"],
  "@stylistic/js/implicit-arrow-linebreak": ["error"],
  "@stylistic/js/indent": ["error", 2],
  "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
  "@stylistic/js/key-spacing": ["error"],
  "@stylistic/js/keyword-spacing": ["error"],
  "@stylistic/js/line-comment-position": ["error"],
  "@stylistic/js/linebreak-style": ["error", "windows"],
  "@stylistic/js/lines-around-comment": ["off"],
  "@stylistic/js/lines-between-class-members": ["off"],
  "@stylistic/js/max-len": ["off"],
  "@stylistic/js/max-statements-per-line": ["error"],
  "@stylistic/js/multiline-comment-style": ["error", "separate-lines"],
  "@stylistic/js/multiline-ternary": ["error", "always-multiline"],
  "@stylistic/js/new-parens": ["error"],
  "@stylistic/js/newline-per-chained-call": ["error"],
  "@stylistic/js/no-confusing-arrow": ["off"],
  "@stylistic/js/no-extra-parens": ["error"],
  "@stylistic/js/no-extra-semi": ["error"],
  "@stylistic/js/no-floating-decimal": ["error"],
  "@stylistic/js/no-mixed-operators": ["off"],
  "@stylistic/js/no-mixed-spaces-and-tabs": ["error"],
  "@stylistic/js/no-multi-spaces": ["error"],
  "@stylistic/js/no-multiple-empty-lines": ["error", { max: 2, maxBOF: 0, maxEOF: 1 }],
  "@stylistic/js/no-tabs": ["error"],
  "@stylistic/js/no-trailing-spaces": ["error"],
  "@stylistic/js/no-whitespace-before-property": ["error"],
  "@stylistic/js/nonblock-statement-body-position": ["error"],
  "@stylistic/js/object-curly-newline": ["error", { consistent: true, multiline: true }],
  "@stylistic/js/object-curly-spacing": ["error", "always"],
  "@stylistic/js/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
  "@stylistic/js/one-var-declaration-per-line": ["off"],
  "@stylistic/js/operator-linebreak": ["error", "after"],
  "@stylistic/js/padded-blocks": ["off"],
  "@stylistic/js/padding-line-between-statements": ["off"],
  "@stylistic/js/quote-props": ["error", "consistent-as-needed"],
  "@stylistic/js/quotes": ["error", "double"],
  "@stylistic/js/rest-spread-spacing": ["error"],
  "@stylistic/js/semi": ["error"],
  "@stylistic/js/semi-spacing": ["error"],
  "@stylistic/js/semi-style": ["error"],
  "@stylistic/js/space-before-blocks": ["error"],
  "@stylistic/js/space-before-function-paren": ["error", { anonymous: "always", asyncArrow: "always", named: "never" }],
  "@stylistic/js/space-in-parens": ["error"],
  "@stylistic/js/space-infix-ops": ["error"],
  "@stylistic/js/space-unary-ops": ["error", { nonwords: false, words: true }],
  "@stylistic/js/spaced-comment": ["error"],
  "@stylistic/js/switch-colon-spacing": ["error"],
  "@stylistic/js/template-curly-spacing": ["error"],
  "@stylistic/js/template-tag-spacing": ["error"],
  "@stylistic/js/wrap-iife": ["error", "inside"],
  "@stylistic/js/wrap-regex": ["error"],
  "@stylistic/js/yield-star-spacing": ["error"],
};
