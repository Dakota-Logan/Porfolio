//Utiliy functions for the router (no need to expose them to other files);

function formatLoc () {
	return (window.location.hash.split ('#')[1] || '/').split (/(?=\/)/);
}
function formatLocAdr (str) {
	if (this.loc[0] !== undefined)
		this.locAdr = this.loc[0].replace ('/', '');
	else
		this.locAdr = '';
}
function formatLocMod (str) {

}

//Class declaration and definition.
class Router {
	constructor () {
		//Initialize variables (mostly for reference).
		this.loc = '';
		this.locAdr = '';
		this.locMod = '';
	}
	
	init () {
		//Store the hash location minus the # symbol.
		this.loc = formatLoc();
		
		//Set the location address; make sure the locAdr is not null
		this.locAdr = formatLocAdr(loc)
		
		//Make sure the modifier exists; else set the mod to empty string.
		if (this.loc[1] !== undefined && this.loc[1] !== '')
			this.locMod = this.loc[1].replace ('/', '');
		else
			this.locMod = '';
		console.log (this.loc);
		
		//Invoke this routes callback to make sure the correct data is loaded.
		this.routes[this.loc[0]].callback ();
		this.header = document.getElementsByTagName ("header");
		this.content = document.getElementsByTagName ("main");
		
		console.log (this);
	}
	
	routes = {
		"/": {
			path: "/",
			name: "root",
			callback: () => {
			}
			
		},
		"/portfolio": {
			path: "/portfolio",
			name: "portfolio",
			callback: this.fPortfolio
		},
		"/blogs": {
			path: '/blogs',
			name: 'blogs',
			callback: this.fBlogs
		},
		"/blog/:id": {
			path: '/blogs/:id',
			name: 'blog',
			callback: this.fBlog
		}
	};
	
	/**
	 * Gets the current values from the url, parses them and sets them to the appropriate variables.
	 */
	getValues () {
		//str.split(/(?=\/)/)
	}
	
	fPortfolio () {
		//TODO Set the active button style for the PORTFOLIO btn.
		fetch ('/api/portfolio')
		.then (res => res.json ())
		.then (f => {
			this.header = f.header;
			this.content = f.content;
			window.history.pushState ({}, 'portfolio', 'portfolio');
		});
	}
	
	fBlogs () {
		//TODO Set the active button style for the BLOGS btn.
		fetch ("/api/blog" + num || null)
		.then (res => res.json ())
		.then (f => {
			this.header = f.header;
			this.content = f.content;
			window.history.pushState ({}, 'blogs', '/blogs')
		})
	}
	
	fBlog () {
		//TODO Remove any active styles from the nav buttons.
		let num = 1; //TODO Get the id from the route (/blogs/->:id<-).
		fetch ("/api/blog" + num || null)
		.then (res => res.json ())
		.then (f => {
			this.header = f.header;
			this.content = f.content;
			window.history.pushState ({}, 'blog' + num, '/blogs/' + num)
		})
	}
}

const R = new Router ();


export default R;
