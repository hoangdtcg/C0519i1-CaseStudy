let gameBoard = function(){
	this.eggs = [];
	this.resourceLoaded = false;
	this.score = 0;
	this.over = false;
	this.ready;

	let self = this;

	this.init = function(){
		this.canvas = document.createElement("canvas");
		this.canvas.width  = 1250;
		this.canvas.height = 700;
		this.context = this.canvas.getContext("2d");

		document.body.appendChild(this.canvas);

		this.resource = new resource(this);

		this.resource.load();

		this.bowl = new bowl(this);
		this.bowl.init();
		this.bowl.getHp();
		this.bowl.hp = 10;

		setInterval(self.createNewEgg, 1200);

	};
	// this.eggs.checkInBowl = function () {
	// 	if ((this.game.eggs.x > this.game.bowl.x) &&
	// 		(this.game.eggs.x <(this.game.bowl.x + this.game.resource.bowl.img.width)) &&
	// 		(this.game.eggs.y >= 650)){
	// 		self.eggs.splice(0,1)
	// 	}
	// 	else if (this.game.eggs.y > this.canvas.height){
	// 		self.eggs.splice(0,1);
	// 		this.bowl.hp--;
	// 		return this.game.bowl.hp
	// 	}
	//
	// };
	this.checkRotation = function () {
		if (self.game.eggs.y > self.canvas.height){
			self.eggs.splice(0,1);
			this.bowl.hp --;
		}
		document.write(this.bowl.hp)

	};

	this.start = function(){
		this.loop();
	};

	this.loop = function(){
		self.update();
		self.draw();
		setTimeout(self.loop, 20);
	};

	this.update = function(){
		this.updateAllEggs();
	};

	this.updateAllEggs = function(){
		for (let i = 0; i < this.eggs.length; i++){
			this.eggs[i].update();
		}
	};

	this.draw = function(){
		self.context.fillStyle = "pink";
		self.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		if (self.resourceLoaded == false){
			self.drawLoading();
		}
		else {
			self.drawGameBoard();
		}
	};

	this.createNewEgg = function(){
		if (self.resourceLoaded){
			let newEgg = new egg(self);
			newEgg.init();
			self.eggs.push(newEgg);
		}
	};

	this.drawGameBoard = function(){
		// self.eggs.checkRotation();
		// self.drawHp();
		self.drawScore();
		self.bowl.draw();
		self.drawEggs();
	};

	this.drawHp= function () {
		return this.bowl.hp

	};

	this.drawEggs = function(){
		for (let i = 0; i < this.eggs.length; i++){
			this.eggs[i].draw();
		}
	};

	this.drawLoading = function(){
		self.context.fillStyle = "#ffffff";
		self.context.font = "70px Arial";
		self.context.fillText("Catch the Eggs !!!", 300, 200);
	};

	this.drawScore = function(){
		self.context.fillStyle = "#ffffff";
		self.context.font = "30px Arial";
		self.context.fillText("Score: " + this.score, 50, 50);
	};

	// this.drawHp = function () {
	// 	self.context.fillStyle = "#ffffff";
	// 	self.context.font = "30px Arial";
	// 	self.context.fillText("BowlHp " + this.bowl.hp, 100, 100)
	//
	// }


};