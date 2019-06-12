let egg = function (game) {
    this.game = game;
    this.x = 0;
    this.y = 80;
    this.img = null;
    this.type = 1;
    this.popped = false;
    this.visible = true;
    this.addedScore = false;

    this.init = function () {
        this.type = this.getRandomInt(1, 2);
        if (this.type === 1) {
            this.img = this.game.resource.egg1.img;
        } else {
            this.img = this.game.resource.egg2.img;
        }
        let positions = [78, 228, 378, 528, 678, 828, 978, 1128, 1378, 1478];
        this.x = positions[this.getRandomInt(0, 8)];
    };

    this.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.update = function () {
        if (this.y <= this.game.canvas.height) {
            this.y += 2;
        }
    };

    this.checkInBasket = function () {
        if (
            (this.x > this.game.basket.x) &&
            (this.x < (this.game.basket.x + this.game.resource.basket.img.width)) &&
            (this.y >= 700)
        ) {
            this.visible = false;

            if (this.addedScore === false) {
                this.game.score += this.type;
                this.addedScore = true;
            }
        }
    };

    this.draw = function () {
        this.game.context.drawImage(
            this.img,
            this.x - (this.img.width / 2),
            this.y
        )

    };
};
