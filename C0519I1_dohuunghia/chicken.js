let chicken = function (game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;

    this.draw = function () {
        this.game.context.drawImage(
            this.game.resource.chicken.img,
            x,
            y
        );
    }

};