import globals from "globals";
import configs from "./configs/index.js";

// @ts-check
/** @type{ import("eslint").Linter.Config[] } */
export default [
  { ignores: ["**/node_modules", "**/build"] },
  {
    languageOptions: {
      globals: { ...globals.node },
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
  ...configs,
];
