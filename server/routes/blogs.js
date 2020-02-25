exports.get = (req, res) => {
	res.send(JSON.stringify("Hello!"))
}

exports.getById = (req, res) => {
	let data = {data: "hello: " + req.params.id}
	res.send(JSON.stringify(data));
}