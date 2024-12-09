import globals from "globals";
import configs from "./src/configs/index.js";

// @ts-check
/** @type{ import("eslint").Linter.Config[] } */
export default [
  {
    languageOptions: {
      globals: { ...globals.node },
      sourceType: "module",
      ecmaVersion: "latest",
    },
    ignores: ["**/node_modules", "**/build"],
  },
  ...configs,
];
