let Player = function (gameboard, x, y, speed, hp, size) {
    this.gameboard = gameboard;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.hp = hp;
    this.size = size;
    this.color = "red";
    this.isAlive = true;

    this.draw = function () {
        //ve player
        gameboard.ctx.beginPath();
        gameboard.ctx.fillRect(this.x, this.y, this.size, this.size)
        gameboard.ctx.fillStyle = this.color;
        gameboard.ctx.fill();
    }
    this.clear = function () {
        gameboard.ctx.clearRect(this.x, this.y, this.size, this.size);
    }
    this.moveLeft = function () {
        this.x -= this.speed;
    }
    this.moveRight = function () {
        this.x += this.speed;

    }


}

