(function(){
	var app = angular.module("store",[]);

	var css1 = {
		boot:"bootstrap.min.css",
		my:"mystyle.css"
	};
	var gem = [
		{
			name:'tarun', 
			age:22,
			image:"mypic.jpg"
		},
		{
			name:'raja',
			age:22,
			image:"mypic.jpg"
		}
		];
	var head = {
		heading:"tarun blog"
	}
	var nav =[
		{ 
			name :"Home",
			url : "index.html"

		},
		{
			name:"About",
			url : "about.html"
		},
		{
			name:"Photography",
			url : "photo.html"
		},
		{
			name:"Contact",
			url : "contact.html"
		}
		];
	var footnav =[
		{ 
			name :"Home",
			url : "index.html"

		},
		{
			name:"About",
			url : "about.html"
		},
		{
			name:"Photography",
			url : "photo.html"
		},
		{
			name:"Contact",
			url : "contact.html"
		}
		];
	var photos = [
		{
			name:"nature1",
			url:"images/nature1.jpg"

		},
		{
			name:"nature2",
			url:"images/nature2.jpg"

		},
		{
			name:"nature3",
			url:"images/nature3.jpg"

		},
		{
			name:"nature4",
			url:"images/nature4.jpg"

		},
		{
			name:"nature5",
			url:"images/nature5.jpg"

		},
		{
			name:"nature6",
			url:"images/nature6.jpg"

		},	
		{
			name:"nature7",
			url:"images/nature7.jpg"

		}						
	];
	var contact ={

	};
	app.controller("ContactController",function(){
		this.product = contact;
	});
	app.controller("PhotoController",function(){
		this.product = photos;
	});
	app.controller("NavController",function(){
		this.product = nav;
	});
	app.controller("FooterNavController",function(){
		this.product = footnav;
	});
	app.controller("HeadingController",function(){
		this.product = head;
	});
	app.controller("CssController",function(){
		this.product = css1;
	});
	app.controller("StoreController",function(){
		this.product = gem;
	});

})();