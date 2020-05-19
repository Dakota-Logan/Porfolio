var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	// let data = await --get data here from db
	let initialData = JSON.stringify([
		{
			title: "test",
			id: 0,
			description: "A test blog post for the ejs templating engine."
		}
	]);
	console.log(initialData);
	let data = JSON.parse(initialData);
	
	res.render('blogs', data);
});

router.get('/:id', (req, res, next) => {
	
	let data = JSON.parse({
		"id": JSON.stringify(req.params.id),
		"0": {
			"type": "header",
			"content": "Test Blog"
		},
		"1": {
			"type": "subheader",
			"content": "This blog post shall be used to test the ejs templating engine."
		},
		"2": {
			"type": "p_1",
			"content": "This is test PARAGRAPH ONE."
		},
		"3": {
			"type": "code",
			"content": "this_is(a){code block};"
		},
		"4": {
			"type": "p_2",
			"content": "This is the SECOND test PARAGRAPH."
		}
	});
	
	res.render('blog', data)
})

module.exports = router;
