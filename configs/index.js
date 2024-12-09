import configJavascript from "./javascript/index.js";
import configJestJavascript from "./jest-javascript/index.js";
import configJestTypescript from "./jest-typescript/index.js";
import configReactJavascript from "./react-javascript/index.js";
import configReactTypescript from "./react-typescript/index.js";
import configTypescript from "./typescript/index.js";

/** @type{ Record<string, import("eslint").Linter.Config> } */
export const allConfigs = {
  "javascript": configJavascript,
  "jest-javascript": configJestJavascript,
  "jest-typescript": configJestTypescript,
  "react-javascript": configReactJavascript,
  "react-typescript": configReactTypescript,
  "typescript": configTypescript,
};

export default Object.values(allConfigs);
