/* istanbul ignore file */
// text above is to inform Jest to ignore this file

import { Pool } from "pg";
import config from "../../../commons/config.js";

const pool = new Pool(config.database);

export { pool };