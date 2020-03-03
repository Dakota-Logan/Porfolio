// const cfg = require("../config");
// const db = cfg.db;
const pgp = require("pg-promise")();
let cn = process.env.DATABASE_URL.toString();
console.log(process.env.DATABASE_URL);
const db = pgp (cn);

class blog {
	async get(req, res) {
		try {
			let data = await db.any('select blogsummaries.blogid, summary.html from blogsummaries, summary where summary.id = blogsummaries.id');
			res.send(data);
		} catch (e) {
			console.error(e.message);
			// fastify.log(e.message);
			res.send();
		}
	}
	async getById(req, res) {
		db.any('SELECT * from blogs where id = $1', [req.params.id])
		.then(data=>res.send(data))
		.catch(e=>console.log(e.message))
	}
}

module.exports = new blog();