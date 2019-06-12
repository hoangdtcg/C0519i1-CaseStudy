let Gameboard = function (id, width, height) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
    this.score = 0;
    this.eggs = [];

    this.init = function () {
        //set cac chi so player va egg
        //set thong so mac dinh
        this.player =
            new Player(this, this.canvas.width / 2, this.canvas.height - 50, 10, 100, 30);
    }


    this.increaseScore = function () {
        this.score += 10;

    }
    this.decreaseHp = function () {
        //giam hp
        //khi hp = 0 thi gameover
        this.player.hp = this.player.hp - 10;
    }
    // this.gameOver= function () {
    //     if (this.player.hp==0) {
    //         alert("game over");
    //     }
    //
    // }

    this.drawMethod = function () {
        this.ctx.beginPath();
        this.ctx.fillText("HP: " + this.player.hp, 10, 10);
        this.ctx.fillText("Score:" + this.score, 20, 20);
        this.ctx.stroke();
    }
    this.draw = function () {
        this.player.draw();
        this.drawMethod();
        //ve ra man hinh choi
        //ve ra player va egg tren man hinh
    }

    this.checkCrash = function (obj1, obj2) {
        let x1 = obj1.x;
        let x2 = obj2.x;
        let y1 = obj1.y;
        let y2 = obj2.y;
        if (x1 < x2 - obj2.size / 2 || x1 > x2 + obj2.size / 2 || y1 < y2 - obj2.size / 2) {
            return false
        } else return true;

//check xem 2 object co va cham voi nhau hay ko
//return true hoac false
    }
    this.createEgg = function () {
        let a = Math.random() * 600
        let num = Math.random() * 1000;
        if (num < 100) {
            let egg = new Egg(this, a, 100, 100, 5, 10);
            this.eggs.push(egg);
            ;
        }

        for (let i = 0; i < this.eggs.length; i++) {
            this.eggs[i].move();
            this.eggs[i].draw();
        }

    }
    this.check = function () {
        for (let i = 0; i < this.eggs.length; i++) {
            if (this.checkCrash(this.eggs[i], this.player)) {
                this.eggs[i].status = false;
                this.eggs.splice(i, 1);
                i--;
                this.increaseScore();

            } else {
                if (this.eggs[i].y >= this.canvas.height) {
                    this.eggs[i].status = false;
                    this.eggs.splice(i, 1);
                    i--;
                    this.player.decreaseHP();
                    // this.gameOver();
                    if (this.player.hp==0) {
                        alert("game over");
                    }
                }
            }
        }
    }
    this.control = function (evt) {
        //di chuyen player
        switch (evt.keyCode) {
            case 37:
                this.player.moveLeft();
                break;
            case 39:
                this.player.moveRight();
                break;
        }
    }
}


function main() {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    // game.player.x += 10;
    game.draw();
    game.createEgg();
    game.check();
    requestAnimationFrame(main);
}

document.addEventListener("keydown", Control);

function Control(evt) {
    game.control(evt);
}