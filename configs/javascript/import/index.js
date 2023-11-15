/* eslint sort-keys: ["error", "asc"] -- More readable for long list */

// @ts-check
/** @type{ import("eslint").Linter.RulesRecord } */
const rules = {
  ...require("./helpful"),
  ...require("./module"),
  ...require("./static"),
  ...require("./style"),
};

module.exports = rules;
