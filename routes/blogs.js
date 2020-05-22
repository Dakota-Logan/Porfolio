let express = require("express");
let router = express.Router();
const _db = require("../db/blogs");


router.get("/", (req, res, next) => {
	let data = _db.get_blog_listing();
	
	res.render("blogs", {data: data});
});

router.get("/:id", (req, res, next) => {
	let data = _db.get_by_id(req.params.id);
	
	res.render("blog", {data: data})
})

module.exports = router;
