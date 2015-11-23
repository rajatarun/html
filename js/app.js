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
			url:"https://s3.amazonaws.com/tarunblog/rsz_nature1.jpg"

		},
		{
			name:"nature2",
			url:"https://s3.amazonaws.com/tarunblog/rsz_nature2.jpg"

		},
		{
			name:"nature3",
			url:"https://s3.amazonaws.com/tarunblog/rsz_nature3.jpg"

		},
		{
			name:"nature4",
			url:"https://s3.amazonaws.com/tarunblog/nature4.JPG"

		},
		{
			name:"nature5",
			url:"https://s3.amazonaws.com/tarunblog/nature5.JPG"

		},
		{
			name:"nature6",
			url:"https://s3.amazonaws.com/tarunblog/nature6.JPG"

		},	
		{
			name:"nature7",
			url:"https://s3.amazonaws.com/tarunblog/nature7.JPG"

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

	app.controller("NewsController",function($scope,$http){
		$http.get("http://api.nytimes.com/svc/news/v3/content/all/U.S./1.json?limit=3&api-key=14ffa0c3d5869d898956dbae65bd5601%3A4%3A72071069")
   		.success(function (response) {$scope.names = response.records;
   			$scope.data = response;});
	});
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