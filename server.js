require ("dotenv").config ({}); //Configure the env file for use within.
const
fs = require ("fs"),
fastify = require ("fastify") (),
path = require ("path");
ss = require("serve-static");

// fastify.register (require ("fastify-static"), {
// 	root: path.join (__dirname, "src")
// });
//Serve client
fastify.use(ss(path.join(__dirname, "\src")));
// fastify.register((instance, opts, next)=>{
//
// });
//Routes
fastify.register(require ("./routing"), {prefix: "/api"});

fastify.listen (process.env.PORT, "0.0.0.0", (e) => {
	console.log ("running on port:" + process.env.PORT);
	if (e == null)
		console.log ("Error unspecified.");
	else if (e)
		console.log (e.message);
});