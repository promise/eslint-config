// https://github.com/import-js/eslint-plugin-import#style-guide

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "import/consistent-type-specifier-style": ["error"],
  "import/dynamic-import-chunkname": ["off"],
  "import/exports-last": ["off"],
  "import/extensions": ["off"],
  "import/first": ["warn"],
  "import/group-exports": ["off"],
  "import/max-dependencies": ["off"],
  "import/newline-after-import": ["error"],
  "import/no-anonymous-default-export": ["off"],
  "import/no-default-export": ["off"],
  "import/no-duplicates": ["error", { "prefer-inline": true }],
  "import/no-named-default": ["error"],
  "import/no-named-export": ["off"],
  "import/no-namespace": ["error"],
  "import/no-unassigned-import": ["error"],
  "import/order": ["error", { "alphabetize": { caseInsensitive: true, order: "asc", orderImportKind: "asc" }, "newlines-between": "never", "warnOnUnassignedImports": true }],
  "import/prefer-default-export": ["warn"],
};

module.exports = rules;
