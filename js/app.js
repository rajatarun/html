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
	var mydata = {
		name: "Tarun Raja",
		college : "SUNY Binghamton",
		mypic :"https://s3.amazonaws.com/tarunblog/mypic.jpg"

	};
	var contact ={

	};
	var articles = [
		{
			img:"http://graphics8.nytimes.com/images/2015/11/06/us/00mississippi3/00mississippi3-sfSpan.jpg",
			des:"With the closing of the polls on Tuesday night, what could turn out to be last battle over the Confederate battle flag in Mississippi has begun in earnest."
		}	
	];
	var mywork = {
		email:"rajatarun12@gamil.com",
		linkedin:"https://www.linkedin.com/in/tarunraja1",
		github:"https://github.com/rajatarun",
		facebook:"https://www.facebook.com/studentconnect"
	};

	app.controller("MyWorkController",function(){
		this.product = mywork;
	});
	app.controller("MyDataController",function(){
		this.product = mydata;
	});
	app.controller("ArticleController",function(){
		this.product= articles;
	});
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