// https://github.com/import-js/eslint-plugin-import#helpful-warnings

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "import/export": ["error"],
  "import/no-deprecated": ["warn"],
  "import/no-empty-named-blocks": ["error"],
  "import/no-extraneous-dependencies": ["off"],
  "import/no-mutable-exports": ["error"],
  "import/no-named-as-default": ["warn"],
  "import/no-named-as-default-member": ["error"],
  "import/no-unused-modules": ["off"],
};
