require ("dotenv").config ({}); //Configure the env file for use within.
const
fs = require ("fs"),
fastify = require ("fastify") (),
path = require ("path"),
pg = require("pg-promise"),
ss = require("serve-static");

//Setup
//Connect to db
db = pg ({schema: process.env.DATABASE_URL});

//Serve client
fastify.use(ss(path.join(__dirname, "\src"), {index: 'index.html'}));
//Routes
fastify.register(require ("./routing"), {prefix: "/api"});

fastify.listen (process.env.PORT, "0.0.0.0", (e) => {
	console.log ("running on port:" + process.env.PORT);
	if (e == null)
		console.log ("Error unspecified.");
	else if (e)
		console.log (e.message);
});