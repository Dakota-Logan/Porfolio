// const db =


class blog {
	get(req, res) {
		res.send({hello: "World"});
	}
	getById(req, res) {
		res.send({hello: ("Worlddd"+req.params.id)});
	}
}

module.exports = new blog();