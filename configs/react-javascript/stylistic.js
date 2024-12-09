// https://eslint.style/packages/jsx

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "@stylistic/jsx/jsx-child-element-spacing": ["error"],
  "@stylistic/jsx/jsx-closing-bracket-location": ["error"],
  "@stylistic/jsx/jsx-closing-tag-location": ["error"],
  "@stylistic/jsx/jsx-curly-brace-presence": ["off"],
  "@stylistic/jsx/jsx-curly-newline": ["error"],
  "@stylistic/jsx/jsx-curly-spacing": ["error"],
  "@stylistic/jsx/jsx-equals-spacing": ["error"],
  "@stylistic/jsx/jsx-first-prop-new-line": ["off"],
  "@stylistic/jsx/jsx-function-call-newline": ["error", "multiline"],
  // "@stylistic/jsx/jsx-indent": ["error", 2],
  "@stylistic/jsx/jsx-indent-props": ["off"],
  "@stylistic/jsx/jsx-max-props-per-line": ["off"],
  "@stylistic/jsx/jsx-newline": ["off"],
  "@stylistic/jsx/jsx-one-expression-per-line": ["off"],
  "@stylistic/jsx/jsx-pascal-case": ["error"],
  "@stylistic/jsx/jsx-props-no-multi-spaces": ["error"],
  "@stylistic/jsx/jsx-self-closing-comp": ["error"],
  "@stylistic/jsx/jsx-sort-props": ["off"],
  "@stylistic/jsx/jsx-tag-spacing": ["off"],
  "@stylistic/jsx/jsx-wrap-multilines": ["off"],
};

Object.keys(rules).forEach(ruleFull => {
  const [,, rule] = ruleFull.split("/");
  if (!["jsx-self-closing-comp", "jsx-function-call-newline"].includes(rule)) rules[`react/${rule}`] = ["off"];
});

export default rules;
