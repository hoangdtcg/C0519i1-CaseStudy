let Ball  = function (game,x,y,size,speed) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = "blue";
    this.speed = speed;

    this.drawBall = function () {
        game.ctx.beginPath();
        game.ctx.fillStyle = this.color;
        game.ctx.arc(this.x, this.y,this.size,0,2*Math.PI);
        game.ctx.fill();
    };
    this.moveBall = function () {
        this.y += this.speed;
    };

};