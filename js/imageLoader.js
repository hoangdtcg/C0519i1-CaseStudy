let gameImage = function(name, img){
	this.img = img;
	this.name = name;
	this.loaded = false;
	let self = this;

	this.load = function(){
		this.img = new Image();
		this.img.onload = function(){
			self.loaded = true;
		};
		this.img.src = "images/" + name + ".png";
	}
};

let resource = function(game) {
	this.game = game;
	this.bowl = new gameImage("bowl");
	this.egg = new gameImage("egg");

	let self = this;


	this.load = function(){
		this.bowl.load();
		this.egg.load();

		setInterval(function(){
			self.checkImageLoaded();
		}, 3000)
	};

	this.checkImageLoaded = function(){
		if (
			(this.bowl.loaded) &&
			(this.egg.loaded)
		){
			this.game.resourceLoaded = true;
		}
	}
};