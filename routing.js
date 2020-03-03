const blog = require("./services/blogService");
const cms = require("./services/cmsService");

module.exports = function (fastify, opts, done) {
	//Blog endpoints
	fastify.get("/blogs", (req,res)=>blog.get(req, res));
	fastify.get("/blogs/:id", (req,res)=>blog.getBlog(req, res));
	fastify.post("/cms", (req, res)=>cms.post(req, res));
	
	//Else Handler
	fastify.get("/*", (req,res)=>{
		res.status = 404;
		res.send({data: "No Route Found"})
	});
	done();
}