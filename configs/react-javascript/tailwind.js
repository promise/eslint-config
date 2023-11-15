// https://github.com/francoismassart/eslint-plugin-tailwindcss#supported-rules

/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  "tailwindcss/classnames-order": ["error", { removeDuplicates: true }],
  "tailwindcss/enforces-negative-arbitrary-values": ["error"],
  "tailwindcss/enforces-shorthand": ["error"],
  "tailwindcss/migration-from-tailwind-2": ["off"],
  "tailwindcss/no-arbitrary-value": ["error"],
  "tailwindcss/no-contradicting-classname": ["error"],
  "tailwindcss/no-custom-classname": ["off"],
};

module.exports = rules;
