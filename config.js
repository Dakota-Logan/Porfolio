const pgp = require("pg-promise")();

class config {
	constructor () {
		this.db = pgp(process.env.DATABASE_URL);
	}
}

module.exports = new config();