function Bullet(game, x,y,radius,speedX, speedY) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.draw = function () {
        this.game.ctx.beginPath();
        this.game.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        this.game.ctx.fillStyle = "red";
        this.game.ctx.fill();
    };
    this.moveBullet = function () {
        if (this.y < 0 || this.y > game.canvas.height) {
            this.speedY = -this.speedY;
        }
        if (this.x < 0 || this.x > game.canvas.width) {
            this.speedX = -this.speedX;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }
}
