const blog = require("./services/blogService");

module.exports = function (fastify, opts, done) {
	//Blog endpoints
	fastify.get("/blogs", (req,res)=>blog.get(req, res));
	fastify.get("/blogs/:id", (req,res)=>blog.getById(req, res));
	
	//Else Handler
	// fastify.route ({
	// 	method: "GET",
	// 	url: "/?",
	// 	handler: ((req, res) => {
	// 		res.sendFile ("/404.html")
	// 	})
	// });
	done();
}