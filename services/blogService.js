const cfg = require("../config");
const db = cfg.db;

class blog {
	async get(req, res) {
		try {
			let data = await db.any('select blogsummaries.blogid, summary.html from blogsummaries, summary where summary.id = blogsummaries.id');
			res.send(data);
		} catch (e) {
			console.error(e.message);
			res.status = 500;
			res.send({error: e.message});
		}
	}
	
	async getBlog(req, res) {
		try{
			let data = await db.any('select * from blogs where id = $1', [req.params.id]);
			res.view("../templates/blog.ejs", {data: data});
			res.send();
		} catch (e) {
			console.error(e.message);
			res.status = 500;
			res.send({error: e.message})
		}
	}
}

module.exports = new blog();