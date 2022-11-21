/* eslint-disable no-console */
const { overrides } = require("..");
const builtInRules = Object.fromEntries(require("../node_modules/eslint/lib/rules").entries());

for (const override of overrides) {
  const plugins = override.plugins || [];
  const definedRules = Object.keys(override.rules || {}).sort();
  const allRules = { ...builtInRules };

  plugins.forEach(plugin => {
    const rules = getRules(findPlugin(plugin).rules);
    for (const rule in rules) allRules[`${plugin}/${rule}`] = rules[rule];
  });

  const nonDeprecatedRules = Object.entries(allRules)
    .filter(([, { meta }]) => !meta?.deprecated)
    .map(([name]) => name)
    .sort();

  const addedRules = nonDeprecatedRules.filter(rule => !definedRules.includes(rule));
  const removedRules = definedRules.filter(rule => !nonDeprecatedRules.includes(rule));

  if (addedRules.length) response += `# New rules\n\n\`\`\`diff\n${addedRules.map(rule => `+ ${rule}`).join("\n")}\`\`\`\n\n`;
  if (removedRules.length) response += `# Removed rules\n\n\`\`\`diff\n${removedRules.map(rule => `- ${rule}`).join("\n")}\`\`\`\n\n`;

  console.log(response || "All rules are defined.");
  if (response) process.exit(1);
}

function findPlugin(pluginName) {
  const methods = [
    name => `eslint-plugin-${name}`,
    name => `${name}/eslint-plugin`,
  ];

  for (const name of methods) {
    try {
      return require(name(pluginName));
    } catch (err) {
      /* no plugin with name, try next one */
    }
  }

  return new Error("plugin not found");
}

function getRules(rules) {
  // convert map to object if it's an object, otherwise just return itself
  return rules.entries ? Object.fromEntries(rules.entries()) : rules;
}
