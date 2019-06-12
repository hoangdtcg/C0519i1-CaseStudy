let perched = function (game) {
    this.game = game;

    this.draw = function () {
        this.game.context.drawImage(
            this.game.resource.perched.img,
            20,
            100,
        );
        this.game.context.drawImage(
            this.game.resource.perched.img,
            420,
            100,
        );
        this.game.context.drawImage(
            this.game.resource.perched.img,
            820,
            100,
        );
    }
};