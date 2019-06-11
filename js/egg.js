


let egg = function(game, img) {
	this.game = game;
	this.x = 0;
	this.y = 80;
	this.img = img;
	this.speed = 3;
	this.type = 1;
	this.status = true;
	this.addedScore = false;


	let self = this;

	this.init = function () {

		if (this.type == 1) {
			this.img = this.game.resource.egg.img;
		}

		this.x = Math.floor(Math.random() * 1250);
	};

	this.update = function () {

		if (this.y <= 700) {
			this.y += this.speed;
		}

		this.checkInBowl();
	};

	this.checkInBowl = function () {
		if ((this.x > this.game.bowl.x) &&
			(this.x < (this.game.bowl.x + this.game.resource.bowl.img.width)) &&
			(this.y >= 620)) {
			this.status = false;
			if (this.addedScore == false) {
				this.game.score += this.type;
				this.addedScore = true;
			}
		}
	};

		this.draw = function () {
			if (this.status) {
				this.game.context.drawImage(
					self.img,
					this.x - (this.img.width / 2),
					this.y
				);
			}
		}

	};