//Utility functions for the router (no need to expose them to other files);

function formatLoc () {
	return (window.location.hash.substr(1) || '/').split (/(?=\/)/);
}

function formatLocAdr (input) {
	let str = input;
	if(str === undefined)
		return '';
	if (str[0] === undefined)
		return '';
	else
		return str[0];
}

function formatLocMod (input) {
	let str = input;
	// console.log ('locmod: ',str);
	if (str[1] !== undefined && str[1] !== '')
		return str[1];
	else
		return '';
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
		this.locAdr = formatLocAdr(this.loc);
		
		// console.log('b4 locmod: ', this.loc);
		//Make sure the modifier exists; else set the mod to empty string.
		this.locMod = formatLocMod(this.loc);
		
		// console.log (this.loc, this.locAdr, this.locMod);
		
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
				console.log ("No need");
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
		this.loc = formatLoc();
		this.locAdr = formatLocAdr(this.loc);
		this.locMod = formatLocMod(this.loc);
	}
	
	fPortfolio () {
		//TODO Set the active button style for the PORTFOLIO btn.
		fetch ('/api/portfolio')
		.then (res => res.json ())
		.then (f => {
			console.log (f);
			// this.header = f.header;
			// this.content = f.content;
			window.history.pushState ({}, 'portfolio', '#/portfolio');
		});
	}
	
	fBlogs () {
		//TODO Set the active button style for the BLOGS btn.
		fetch ("/api/blogs")
		.then (res => res.json ())
		.then (f => {
			console.log (f);
			// this.header = f.header;
			// this.content = f.content;
			window.history.pushState ({}, 'blogs', '#/blogs')
		})
	}
	
	fBlog () {
		//TODO Remove any active styles from the nav buttons.
		fetch ("/api/blog" + num || null)
		.then (res => res.json ())
		.then (f => {
			this.header = f.header;
			this.content = f.content;
			window.history.pushState ({}, 'blog' + num, '#/blogs/' + this.locMod)
		})
	}
	
	callRoute () {
		if(this.locMod!=='')
			return this.fBlog();
		else
			this.routes[this.locAdr].callback();
	}
}

const R = new Router ();


export default R;
