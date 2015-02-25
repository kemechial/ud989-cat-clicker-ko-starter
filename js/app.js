var initialCats=[
                 {
                	 clickCount: 0,
                	 name:'Klaus',
                	 imgSrc:'img/kitty0.jpg',
                	 imgAttribution: 'https://flickr.com/...',
                	 nickNames: [
                                 {nick:'ZZZz'},
                                 {nick:'Tabby'},
                                 {nick:'Tiger'}
                                 ]

	   },
	   {
		   clickCount: 0,
		   name:'Jack',
		   imgSrc:'img/kitty1.jpg',
		   imgAttribution: 'https://flickr.com/...',
      	   nickNames: [
                     {nick:'ZZZz'},
                     {nick:'Lucky'},
                     {nick:'Fuzzy'}
                     ]


		   },
	   {
	    clickCount: 0,
	    name:'Lazy',
		imgSrc:'img/kitty2.jpg',
		imgAttribution: 'https://flickr.com/...',
   	   nickNames: [
                   {nick:'ZZZz'},
                   {nick:'Lucky'},
                   {nick:'Fuzzy'}
                   ]

	   },
	   {
		 clickCount: 0,
		 name:'Peter',
	     imgSrc:'img/kitty3.jpg',
	     imgAttribution: 'https://flickr.com/...',
    	   nickNames: [
                       {nick:'ZZZz'},
                       {nick:'Lucky'},
                       {nick:'Tobby'}
                       ]

		 },
	 {
	  clickCount: 0,
	  name:'Easy',
	  imgSrc:'img/kitty4.jpg',
	  imgAttribution: 'https://flickr.com/...',
 	   nickNames: [
                   {nick:'Ace'},
                   {nick:'Gray'},
                   {nick:'Sleepy'}
                   ]

	  }
                 
                 
                 
                 ];


var Cat=function(data){
	this.clickCount=ko.observable(data.clickCount);
	this.levelNames=ko.observableArray(["cute","sweet","adorable"]);
	this.nickNames=ko.observableArray(data.nickNames);
	this.name=ko.observable(data.name);
	this.imgSrc=ko.observable(data.imgSrc);
	this.imgAttribution=ko.observable(data.imgAttribution);
	this.level=ko.computed(function(){
		if(this.clickCount()<5){
			return this.levelNames()[0];
		}else if(this.clickCount()<10){
			return this.levelNames()[1];
		}else{
			return this.levelNames()[2];
		}
					
	},this);	
	
};

var ViewModel=function(){
	var self=this;
	this.catList=ko.observableArray([]);
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	this.currentCat=ko.observable(this.catList()[0]);
	this.setCurrentCat=function(clickedCat){
		self.currentCat(clickedCat);
	};
	this.incrementCounter=function(){
		/*
		we changed this line, because previously when we were clicking on cat,
		we were in ViewModel Context. Since we create a new binding context with "with binding" inside div,
		but now when you click the image you are in the binding context of the currentCat.
		*/
		this.clickCount(this.clickCount()+1);
		};
};

ko.applyBindings(new ViewModel());