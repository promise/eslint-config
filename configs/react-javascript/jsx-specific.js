// https://github.com/jsx-eslint/eslint-plugin-react#jsx-specific-rules

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "react/jsx-boolean-value": ["off"],
  "react/jsx-child-element-spacing": ["off"],
  "react/jsx-closing-bracket-location": ["off"],
  "react/jsx-closing-tag-location": ["off"],
  "react/jsx-curly-brace-presence": ["off"],
  "react/jsx-curly-newline": ["off"],
  "react/jsx-curly-spacing": ["off"],
  "react/jsx-equals-spacing": ["off"],
  "react/jsx-filename-extension": ["off"],
  "react/jsx-first-prop-new-line": ["off"],
  "react/jsx-fragments": ["off"],
  "react/jsx-handler-names": ["off"],
  "react/jsx-indent": ["off"],
  "react/jsx-indent-props": ["off"],
  "react/jsx-key": ["error"],
  "react/jsx-max-depth": ["off"],
  "react/jsx-max-props-per-line": ["off"],
  "react/jsx-newline": ["off"],
  "react/jsx-no-bind": ["off"],
  "react/jsx-no-comment-textnodes": ["error"],
  "react/jsx-no-constructed-context-values": ["off"],
  "react/jsx-no-duplicate-props": ["error"],
  "react/jsx-no-leaked-render": ["off"],
  "react/jsx-no-literals": ["off"],
  "react/jsx-no-script-url": ["off"],
  "react/jsx-no-target-blank": ["error"],
  "react/jsx-no-undef": ["error"],
  "react/jsx-no-useless-fragment": ["off"],
  "react/jsx-one-expression-per-line": ["off"],
  "react/jsx-pascal-case": ["off"],
  "react/jsx-props-no-multi-spaces": ["off"],
  "react/jsx-props-no-spreading": ["off"],
  "react/jsx-sort-default-props": ["off"],
  "react/jsx-sort-props": ["off"],
  "react/jsx-tag-spacing": ["off"],
  "react/jsx-uses-react": ["error"],
  "react/jsx-uses-vars": ["error"],
  "react/jsx-wrap-multilines": ["off"],
};

module.exports = rules;
