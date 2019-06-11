const FULL_HP =10;


let bowl = function(game) {
	this.game = game;
	this.x = 0;
	this.y = 650;
	this.hp = FULL_HP;
	let self = this;
	this.init = function () {
		this.game.canvas.addEventListener('mousemove', function (event) {
			self.proccessMouseMove(event);
		});
	};
	this.proccessMouseMove = function (event) {
		let rect = self.game.canvas.getBoundingClientRect();
		this.x = event.clientX - rect.left - (this.game.resource.bowl.img.width / 2);
	};
	this.update = function(){

	};
	this.draw = function(){
		this.game.context.drawImage(
			this.game.resource.bowl.img,
			this.x,
			this.y
		);
	};
	this.getHp = function () {
		return this.hp
	};
	// this.takeEggs = function () {
	// 	if ((this.game.eggs.x === this.x) && (this.game.eggs.y === this.y)){
	// 		this.hp++
	//
	// 	}
	//
	// }
	// this.takeHit = function () {
	// 	this.hp -= 1;
	// }
};