const { overrides } = require("..");
const builtInRules = Object.fromEntries(require("../node_modules/eslint/lib/rules").entries());

test.each(overrides.map(override => [override.files.join(", "), override]).slice(3, 4))("test config for %s", (_, override) => {
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

  expect(definedRules).toEqual(nonDeprecatedRules);
});

const methods = [
  name => `eslint-plugin-${name}`,
  name => `${name}/eslint-plugin`,
];

function findPlugin(pluginName) {
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
