/* eslint-disable no-console */
const { inspect } = require("util");
const config = require("../");

console.log(inspect(config, { depth: Infinity }));
