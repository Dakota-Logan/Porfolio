const
fs = require ("fs"),
http = require ("http");
require("dotenv").config();

http.createServer((req, res) => {
	fs.readFile(__dirname + "/index.html", (err, data) => {
		res.writeHead(200);
		res.end(data);
	});
}).listen(process.env.PORT);
console.log(/*"running on port "+*/process.env.PORT);