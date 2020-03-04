const cfg = require("../config");
const db = cfg.db;
const ejs = cfg.ejs;

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
			let data = '<section><div id="heading">Hello!</div><div id="content-primary">Lorem Ipsum</div></section>';
			/*await db.any('select * from blogs where id = $1', [req.params.id]);*/
			// res.view("blog.ejs", {data: data});
			ejs.renderFile('./templates/blog.ejs', {data: data}, (err, fd)=>{
				console.log (fd);
				res.send({data:fd});
			});
		} catch (e) {
			console.log(e.message);
			res.status = 500;
			res.send({error: e.message})
		}
	}
}

module.exports = new blog();