let Game = function (id, width, height) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
    this.score = 0;
    this.balls = [];


    this.init = function () {
        this.player = new Player(this, this.canvas.width / 2, this.canvas.height - 100, 80, 20, 10);
    };
    this.draw = function () {
        this.player.drawPlayer();
        this.player.drawHP();
        // this.player.Create();
        this.drawScore();

    };


    this.gameOver = function () {

    };
    this.drawScore = function () {
        this.ctx.fillStyle = "red";
        this.ctx.fillText("Score: " + this.score, this.canvas.width / 3, this.canvas.height / 5);
        this.ctx.font = " 50px Arial";
        this.ctx.fill()
    };
    this.createBall = function () {
        let num = Math.random() * 1500;
        if (num < 30) {
            let ball = new Ball(
                this,
                Math.random() * this.canvas.width,
                70,
                20,
                2
            );
            this.balls.push(ball);
        }
        for (let i = 0; i < this.balls.length; i++) {
            this.balls[i].moveBall();
            this.balls[i].drawBall();
        }
    };
    this.CheckCrash = function (Obj1,Obj2) {
        let x1 = Obj1.x;
        let y1 = Obj1.y;
        let y2 = Obj2.y;
        let x2 = Obj2.x;
        if(x1 < x2 - Obj2.size/2 || x1 > x2 + Obj2.size/2 || y1 < y2 - Obj2.size/2 ){
                return false;
        }else {
            return true;
        }
    };
    this.checkInBall = function () {
            for(let i = 0; i < this.balls.length;i++){
                if(this.CheckCrash(this.balls[i],this.player)){
                    this.Ball.splice(this.balls[i]);
                    i--;
                    this.score += 10;
                    this.balls[i].status = false;
                }else if(this.balls[i].y > this.canvas.height){
                    this.Ball.splice[this.balls[i]]
                }
            }
    };



this.controll = function (evt) {
    switch (evt.keyCode) {
        case 37:
            this.player.moveLeft();
            break;
        case 39:
            this.player.moveRight();
            break;
        case 38:
            this.player.moveUP();
            break;
        case 40:
            this.player.moveDown();
            break;
    }
};

}
;

document.addEventListener("keydown", moveNow);

function moveNow(evt) {
    game.controll(evt)
}

function main() {

    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.createBall();
    game.draw();

    requestAnimationFrame(main);
}
