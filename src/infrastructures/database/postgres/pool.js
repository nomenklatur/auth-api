/* istanbul ignore file */
// text above is to inform Jest to ignore this file

const { Pool }  = require('pg');
const config = require('../../../commons/config.js');

const pool = new Pool(config.database);

module.exports =  pool; 