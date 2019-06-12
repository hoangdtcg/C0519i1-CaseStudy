let Egg = function (gameboard,x,y,score,speed,size) {
    this.gameboard = gameboard;
    this.x = x;
    this.y = y;
    this.score = score;
    this.speed = speed;
    this.size = size;
    this.color = "black";
    this.isAlive = true;

    this.draw = function () {
        //ve egg
        gameboard.ctx.beginPath();
        gameboard.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        gameboard.ctx.fillStyle = this.color;
        gameboard.ctx.fill();
    }
    this.move = function () {
        //di chuyen egg
        this.y += this.speed;
    }
}