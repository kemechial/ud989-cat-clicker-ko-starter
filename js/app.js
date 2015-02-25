var Cat=function(){
	this.clickCount=ko.observable(0);
	this.levelNames=ko.observableArray(["cute","sweet","adorable"]);
	this.nickNames=ko.observableArray([
	                                   {nick:'Klaus'},
	                                   {nick:'Jack'},
	                                   {nick:'Lazy'},
	                                   {nick:'Peter'},
	                                   {nick:'Easy'}
	                                   ]);
	this.name=ko.observable('Tabby');
	this.imgSrc=ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution=ko.observable('https://flickr.com/...');
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
	this.currentCat=ko.observable(new Cat());
	this.incrementCounter=function(){
		this.currentCat().clickCount(this.currentCat().clickCount()+1);
		};
};

ko.applyBindings(new ViewModel());