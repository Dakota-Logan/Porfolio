const
fs = require ("fs"),
http = require ("http");

const app = http.createServer((req, res) => {
	fs.readFile(__dirname + "/index.html", (err, data) => {
		res.writeHead(200);
		res.end(data);
	});
}).listen(process.env.PORT);