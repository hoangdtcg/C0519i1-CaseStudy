function Player(game, x, y, width, height, speed) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = width;
    this.height = height;
    this.draw = function () {
        this.game.ctx.beginPath();
        this.game.ctx.rect(this.x, this.y, this.width, this.height);
        this.game.ctx.fillStyle = "green";
        this.game.ctx.fill();
    };
    this.moveLeft = function () {
        if (this.x > 0) {
            this.x -= this.speed;
        }
    };
    this.moveRight = function () {
        if (this.x < game.canvas.width - this.width) {
            this.x += this.speed;
        }
    };
    this.move = function (evt) {
        switch (evt.keyCode) {
            case 37:
                this.moveLeft();
            break;
            case 39:
                this.moveRight();
        }
    }
}

