let func = () => {
	fetch("/blogs")
	.then(res => res.json())
	.then(x => console.log(x.data));
};

func()