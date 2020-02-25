const fastify = require("fastify")();
const path = require("path");
const log = require("log-to-file");
//Import plugins
const routes = require("./routes/routes");

fastify.register(require("fastify-static"), {
	root: path.join(__dirname, "src")
});

fastify.get("/", (req, res) => {

});

routes.forEach(route => {fastify.route(route)});

fastify.listen(5000 , "0.0.0.0", (err => {
	log(err, "./server/logs/error.index.log")
	fastify.log.error (err);
}));