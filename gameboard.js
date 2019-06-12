let Gameboard = function (id, width, height) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
    this.score = 0;
    this.eggs = [];

    this.init = function () {

        this.player =
            new player(this, this.canvas.width / 2, this.canvas.height - 30, 10, 10, 60);
    };
    this.draw = function () {
        this.player.draw();
    };
    this.crash = function () {

    };
    // this.gameOver = function () {
    // };
    this.isCrash = function (eggs, bowl) {
        let x1 = eggs.x;
        let x2 = bowl.x;
        let y1 = eggs.y;
        let y2 = bowl.y;
        if (x1 < x2 - bowl.size / 2 || x1 > x2 + bowl.size / 2 || y1 < y2 - bowl.size / 2) {
            return false;
        } else {
            return true;

        }
    };
    this.check = function () {
        for (let i = 0; i < this.eggs.length; i++) {
            if (this.isCrash(this.eggs[i], this.player)) {
                this.eggs.splice(i, 1);
                i--;
                this.score++;

            }
        }

    }

    this.createEgg = function () {
        let num = Math.random() * 1000;
        if (num < 20) {
            let egg = new Egg(this, Math.floor(Math.random() * 600), 0, 5, 2, 10);
            this.eggs.push(egg);
            ;
        }
        for (let i = 0; i < this.eggs.length; i++) {
            this.eggs[i].move();
            this.eggs[i].draw();
        }
    }

};

function main() {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    // game.player.x += 10;
    game.draw();
    game.createEgg();
    game.check();
    requestAnimationFrame(main);
}

function move(evt) {
    game.player.move(evt);
}