const cfg = require("../config");
const db = cfg.db;

class cms {
	post(req, res) {
		console.log(req.body);
		res.send(JSON.stringify({data: req.body}))
	}
}

module.exports = new cms();