require('dotenv').config();

const pgp = require("pg-promise")({});
const cn = process.env.connection_string;
const db = pgp(cn);

module.exports = db;