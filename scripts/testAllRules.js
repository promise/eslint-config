import { builtinRules } from "eslint/use-at-your-own-risk";
import { allConfigs } from "../configs/index.js";

let response = "";

for (const [configName, config] of Object.entries(allConfigs)) {
  const definedRules = Object.keys(config.rules || {}).sort();

  const plugins = [
    ["eslint", { rules: Object.fromEntries(builtinRules.entries()) }],
    ...Object.entries(config.plugins || {}),
  ];

  const allRules = plugins.map(([pluginName, plugin]) => {
    const rules = plugin.rules || {};
    const pluginRules = rules.entries ? Object.fromEntries(rules.entries()) : rules;
    return pluginName === "eslint" ? pluginRules : Object.fromEntries(Object.entries(pluginRules).map(([rule, value]) => [`${pluginName}/${rule}`, value]));
  }).reduce((acc, rules) => ({ ...acc, ...rules }), {});

  const nonDeprecatedRules = Object.entries(allRules)
    .filter(([, rule]) => !rule?.meta?.deprecated)
    .map(([name]) => name)
    .sort();

  const addedRules = nonDeprecatedRules.filter(rule => !definedRules.includes(rule));
  const removedRules = definedRules.filter(rule => !nonDeprecatedRules.includes(rule));
  if (addedRules.length || removedRules.length) response += `# Config ${configName}\n\n`;
  if (addedRules.length) response += `## New rules\n\n\`\`\`diff\n${addedRules.map(rule => `+ ${rule}`).join("\n")}\n\`\`\`\n\n`;
  if (removedRules.length) response += `## Deprecated rules\n\n\`\`\`diff\n${removedRules.map(rule => `- ${rule}`).join("\n")}\n\`\`\`\n\n`;
}

// eslint-disable-next-line no-console
console.log(response || "All rules are defined.");
if (response) process.exit(1);
