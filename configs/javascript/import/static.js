// https://github.com/import-js/eslint-plugin-import#static-analysis

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
export default {
  "import/default": ["error"],
  "import/named": ["error"],
  "import/namespace": ["error"],
  "import/no-absolute-path": ["error"],
  "import/no-cycle": ["warn"],
  "import/no-dynamic-require": ["off"],
  "import/no-internal-modules": ["off"],
  "import/no-relative-packages": ["error"],
  "import/no-relative-parent-imports": ["off"],
  "import/no-restricted-paths": ["off"],
  "import/no-self-import": ["error"],
  "import/no-unresolved": ["off"],
  "import/no-useless-path-segments": ["error"],
  "import/no-webpack-loader-syntax": ["error"],
};
