// https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "react/boolean-prop-naming": ["off"],
  "react/button-has-type": ["off"],
  "react/checked-requires-onchange-or-readonly": ["off"],
  "react/default-props-match-prop-types": ["off"],
  "react/destructuring-assignment": ["off"],
  "react/display-name": ["error"],
  "react/forbid-component-props": ["off"],
  "react/forbid-dom-props": ["off"],
  "react/forbid-elements": ["off"],
  "react/forbid-foreign-prop-types": ["off"],
  "react/forbid-prop-types": ["off"],
  "react/function-component-definition": ["off"],
  "react/hook-use-state": ["off"],
  "react/iframe-missing-sandbox": ["off"],
  "react/no-access-state-in-setstate": ["off"],
  "react/no-adjacent-inline-elements": ["off"],
  "react/no-array-index-key": ["off"],
  "react/no-arrow-function-lifecycle": ["off"],
  "react/no-children-prop": ["error"],
  "react/no-danger": ["off"],
  "react/no-danger-with-children": ["error"],
  "react/no-deprecated": ["error"],
  "react/no-did-mount-set-state": ["off"],
  "react/no-did-update-set-state": ["off"],
  "react/no-direct-mutation-state": ["error"],
  "react/no-find-dom-node": ["error"],
  "react/no-invalid-html-attribute": ["off"],
  "react/no-is-mounted": ["error"],
  "react/no-multi-comp": ["off"],
  "react/no-namespace": ["off"],
  "react/no-object-type-as-default-prop": ["off"],
  "react/no-redundant-should-component-update": ["off"],
  "react/no-render-return-value": ["error"],
  "react/no-set-state": ["off"],
  "react/no-string-refs": ["error"],
  "react/no-this-in-sfc": ["off"],
  "react/no-typos": ["off"],
  "react/no-unescaped-entities": ["error"],
  "react/no-unknown-property": ["error"],
  "react/no-unsafe": ["off"],
  "react/no-unstable-nested-components": ["off"],
  "react/no-unused-class-component-methods": ["off"],
  "react/no-unused-prop-types": ["error"],
  "react/no-unused-state": ["off"],
  "react/no-will-update-set-state": ["off"],
  "react/prefer-es6-class": ["off"],
  "react/prefer-exact-props": ["off"],
  "react/prefer-read-only-props": ["off"],
  "react/prefer-stateless-function": ["off"],
  "react/prop-types": ["off"],
  "react/react-in-jsx-scope": ["error"],
  "react/require-default-props": ["off"],
  "react/require-optimization": ["off"],
  "react/require-render-return": ["error"],
  "react/self-closing-comp": ["off"],
  "react/sort-comp": ["off"],
  "react/sort-default-props": ["off"],
  "react/sort-prop-types": ["off"],
  "react/state-in-constructor": ["off"],
  "react/static-property-placement": ["off"],
  "react/style-prop-object": ["off"],
  "react/void-dom-elements-no-children": ["off"],
};

module.exports = rules;
