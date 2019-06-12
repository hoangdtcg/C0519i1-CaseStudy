let basket = function (game) {
    this.game = game;
    this.x = 0;
    this.y = 700;
    this.hp = 10;
    let self = this;
    this.status = true;

    this.init = function () {
        this.game.canvas.addEventListener('mousemove', function (event) {
            self.proccessMouseMove(event);
        });
    };

    this.proccessMouseMove = function (event) {
        let rect = self.game.canvas.getBoundingClientRect();
        this.x = event.clientX - rect.left - (this.game.resource.basket.img.width / 2);
    };

    this.draw = function () {
        this.game.context.drawImage(
            this.game.resource.basket.img,
            this.x,
            this.y
        );
    };

    this.decreaseHP = function () {
       self.hp -= 1;
    };
};
