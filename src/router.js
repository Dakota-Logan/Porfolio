class Router {
	constructor () {
		console.log ("in router construc");
		window.onload = this.init;
	}
	
	init () {
		console.log ("Init Router");
		this.loc = window.location.pathname;
		this.header = document.getElementsByTagName("header");
		this.content = document.getElementsByTagName("main");
	}
	
	routes = [
		{
			path: '/',
			name: 'root',
			callback: () => {
			}
			
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			callback: this.fPortfolio
		},
		{
			path: '/blogs',
			name: 'blogs',
			callback: this.fBlogs
		},
		{
			path: '/blogs/:id',
			name: 'blog',
			callback: this.fBlog
		}
	];
	
	fPortfolio () {
		fetch ('/api/portfolio')
		.then (res => res.json ())
		.then (f => {
			this.header = f.header;
			this.content = f.content;
			window.history.pushState({}, 'portfolio', 'portfolio');
		});
	}
	
	fBlogs () {
	
	}
	
	fBlog () {
		// let num = somthing
		fetch ("/api/blog" + num || null);
	}
}

export default new Router ();