/* eslint-disable no-console */
const config = require("../");
const { inspect } = require("util");

console.log(inspect(config, { depth: Infinity }));
