const blogs = require("./blogs")


const routes = [
	{
		method: "GET",
		url: "/blogs",
		handler: blogs.get
	},
	{
		method: "GET",
		url: "/blogs/:id",
		handler: blogs.getById
	},
	{
		method: "GET",
		url: "/blogs/:id/print",
		handler: (req, res)=>res.send("Print feature is coming soon.")
	},
	//?CMS stuff below.
]

module.exports = routes;