// https://github.com/import-js/eslint-plugin-import#module-systems

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "import/no-amd": ["error"],
  "import/no-commonjs": ["off"],
  "import/no-import-module-exports": ["error"],
  "import/no-nodejs-modules": ["off"],
  "import/unambiguous": ["off"],
};
