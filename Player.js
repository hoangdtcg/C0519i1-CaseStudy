let Player  = function (game,x,y,size,speed,hp) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = "red";
    this.speed = speed;
    this.hp = hp;
    this.isAlive = true;
    this.score = 0;
    // let self = this;


    this.drawPlayer = function () {
        game.ctx.beginPath();
        game.ctx.fillStyle = this.color;

        game.ctx.fillRect(this.x, this.y, this.size, this.size);
        game.ctx.fill();
    };
    // this.proccessMouseMove = function (event) {
    //     let rect = this.game.canvas.getBoundingClientRect();
    //     this.x = event.clientX - rect.left - (this.game.player.size / 2)
    //
    // };
    // this.Create = function () {
    //     this.game.canvas.addEventListener("mousemove", function (event) {
    //         self.proccessMouseMove(event)
    //
    //     });
    // };


    this.drawHP = function () {
      game.ctx.beginPath();
      game.ctx.fillStyle = "red";
      game.ctx.fillText("HP : " + this.hp,40,50);
      game.ctx.font = "40px Arial";
      game.ctx.fill();
    };
    this.moveRight = function () {
        this.x += this.speed;
        if(this.x >= game.canvas.width - this.size){
            this.x = game.canvas.width - this.size;
        }
    };
    this.moveLeft = function () {
        this.x -= this.speed;
        if(this.x <= 0){
            this.x = 0;
        }
    };
    this.moveUP = function () {
        this.y -= this.speed;
        if(this.y <= 0){
            this.y = 0;
        }
    };
    this.moveDown = function () {
        this.y += this.speed;
        if(this.y >= game.canvas.height - this.size){
            this.y = game.canvas.height - this.size;
        }
    }

};