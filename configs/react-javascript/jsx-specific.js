// https://github.com/jsx-eslint/eslint-plugin-react#jsx-specific-rules

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "react/jsx-boolean-value": ["off"],
  "react/jsx-filename-extension": ["off"],
  "react/jsx-fragments": ["off"],
  "react/jsx-handler-names": ["off"],
  "react/jsx-key": ["error"],
  "react/jsx-max-depth": ["off"],
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
  "react/jsx-pascal-case": ["off"],
  "react/jsx-props-no-spreading": ["off"],
  "react/jsx-uses-react": ["error"],
  "react/jsx-uses-vars": ["error"],
};

module.exports = rules;
