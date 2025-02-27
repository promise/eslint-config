// https://eslint.org/docs/rules/#possible-problems

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "array-callback-return": ["error", { checkForEach: true }],
  "constructor-super": ["error"],
  "for-direction": ["error"],
  "getter-return": ["error"],
  "no-async-promise-executor": ["off"],
  "no-await-in-loop": ["off"],
  "no-class-assign": ["error"],
  "no-compare-neg-zero": ["error"],
  "no-cond-assign": ["error", "always"],
  "no-const-assign": ["error"],
  "no-constant-binary-expression": ["error"],
  "no-constant-condition": ["error"],
  "no-constructor-return": ["error"],
  "no-control-regex": ["error"],
  "no-debugger": ["error"],
  "no-dupe-args": ["error"],
  "no-dupe-class-members": ["error"],
  "no-dupe-else-if": ["error"],
  "no-dupe-keys": ["error"],
  "no-duplicate-case": ["error"],
  "no-duplicate-imports": ["off"],
  "no-empty-character-class": ["error"],
  "no-empty-pattern": ["error"],
  "no-ex-assign": ["error"],
  "no-fallthrough": ["error", { commentPattern: "passthrough" }],
  "no-func-assign": ["error"],
  "no-import-assign": ["error"],
  "no-inner-declarations": ["error", "both"],
  "no-invalid-regexp": ["error"],
  "no-irregular-whitespace": ["error", { skipRegExps: true, skipStrings: true, skipTemplates: true }],
  "no-loss-of-precision": ["error"],
  "no-misleading-character-class": ["error"],
  "no-new-native-nonconstructor": ["error"],
  "no-obj-calls": ["error"],
  "no-promise-executor-return": ["error"],
  "no-prototype-builtins": ["error"],
  "no-self-assign": ["error", { props: true }],
  "no-self-compare": ["error"],
  "no-setter-return": ["error"],
  "no-sparse-arrays": ["error"],
  "no-template-curly-in-string": ["error"],
  "no-this-before-super": ["error"],
  "no-undef": ["off"],
  "no-unexpected-multiline": ["error"],
  "no-unmodified-loop-condition": ["error"],
  "no-unreachable": ["error"],
  "no-unreachable-loop": ["error"],
  "no-unsafe-finally": ["error"],
  "no-unsafe-negation": ["error", { enforceForOrderingRelations: true }],
  "no-unsafe-optional-chaining": ["error", { disallowArithmeticOperators: true }],
  "no-unused-private-class-members": ["error"],
  "no-unused-vars": ["error"],
  "no-use-before-define": ["error", "nofunc"],
  "no-useless-assignment": ["error"],
  "no-useless-backreference": ["error"],
  "require-atomic-updates": ["error", { allowProperties: true }],
  "use-isnan": ["error"],
  "valid-typeof": ["error", { requireStringLiterals: true }],
};
