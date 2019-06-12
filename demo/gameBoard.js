function gameBoard(id, width, height) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
    this.score = 0;

    this.init = function () {
        this.player = new Player(this, 110, 480, 80, 15, 40);
        this.bullet = new Bullet(this, 140, 240, 10, 5, 5);
    };
    this.draw = function () {
        this.player.draw();
        this.bullet.draw();
    };
    this.checkCrash = function () {
        let isBouncingY = (this.bullet.y > this.player.y - this.bullet.radius );
        let isBouncingX = ((this.bullet.x > this.player.x) && (this.bullet.x < (this.player.x + this.player.width)));

        if (isBouncingX && isBouncingY) {
            this.bullet.speedY = - this.bullet.speedY;
            this.score++;
            document.getElementById("showScore").innerHTML = "Score  = " + this.score;
        }
    }
}

function main() {
    if (game.bullet.y < game.canvas.height - game.bullet.radius) {
        game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
        game.draw();
        game.checkCrash();
        this.movebullet();
        requestAnimationFrame(main);
    } else {
        alert("Your score : " + game.score);
    }
}
function movebullet() {
    game.bullet.moveBullet();
}
function move(evt) {
    game.player.move(evt)
}
function log(content) {
    console.log(content);
}