require("dotenv").config(); //Configure the env file for use within.
const
fs = require ("fs"),
fastify = require("fastify")(),
path = require("path");

fastify.register(require("fastify-static"), {
	root: path.join(__dirname, "src")
});

fastify.use("*", (req, res)=>{
	res.sendFile("index.html")
});

fastify.listen(process.env.PORT, "0.0.0.0", ()=>{
	console.log("running on port:" + process.env.PORT)
});