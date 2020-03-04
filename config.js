const pgp = require("pg-promise")();

class config {
	constructor () {
		this.db = pgp(process.env.DATABASE_URL);
		this.ejs = require("ejs");
	}
}

module.exports = new config();