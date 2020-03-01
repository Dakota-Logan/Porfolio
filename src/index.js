let func = () => {
	fetch("/api/blogs")
	.then(res => res.json())
	.then(x => console.log(x.data));
};

func();