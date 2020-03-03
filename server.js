require ("dotenv").config ({}); //Configure the env file for use within.
const
fs = require ("fs"),
fastify = require ("fastify") (),
path = require ("path"),
pg = require("pg"),
ss = require("serve-static");

//Setup
// fastify.register (require ("fastify-static"), {
// 	root: path.join (__dirname, "src")
// });

const serve = ss('src', {index: 'index.html'});

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