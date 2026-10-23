/* eslint-disable no-console */

import { inspect } from "util";
import config from "../index.js";

console.log(inspect(config, { depth: Infinity }));
