let egg = function(game, img) {
	this.game = game;
	this.x = 0;
	this.y = 80;
	this.img = img;
	this.speed = 3;
	this.status = true;
	this.addedScore = false;


	let self = this;

	this.init = function () {

			this.img = this.game.resource.egg.img;


		this.x = Math.floor(Math.random() * 1420);
	};

	this.update = function () {

		if (this.y <= 700) {
			this.y += this.speed;
		}
	};

	this.checkInBowl = function () {
		if ((this.x > this.game.bowl.x) &&
			(this.x < (this.game.bowl.x + this.game.resource.bowl.img.width)) &&
			(this.y >= 626)) {
			this.status = false;

			if (this.addedScore == false) {
				this.game.score += 1;
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