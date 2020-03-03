const pg = require("pg-promise");

class config {
	constructor () {
		this.db = pg ({schema: process.env.DATABASE_URL});
	}
}

module.exports = new config();