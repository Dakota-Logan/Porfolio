const db = require("./db");

class _blog {
	constructor () {
	}
	
	async get_blog_listing () {
		let data = await db.many("select * from blog_listing")
			.then(( data ) => {
				//TODO resolve data
			})
			.catch(( err ) => {
				//!TODO handle error
			});
		return data;
	}
	
	async get_by_id ( id ) {
		let data = await db.one("select * from blog where id = $1", [id])
			.then(( data ) => {
				//TODO resolve data
			})
			.catch(( err ) => {
				//!TODO handle error
			});
		return data;
	}
}

const DB = new _blog;
module.exports = DB;
