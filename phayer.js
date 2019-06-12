let player = function (gameboard, x, y, speed, hp, size,) {
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
        };

        this.moveLeft = function () {
            // di chuyen player
            this.x -= this.speed;
        };
        this.moveRight = function () {
            this.x += this.speed;
        };
        this.move = function (evt) {
            switch (evt.keyCode) {
                case 37:
                    this.moveLeft();
                    break;
                case 39:
                    this.moveRight();
                    break;
            }
        };

        this.decreseHp = function () {


        };
    }
;