let egg = function (game) {
    this.game = game;
    this.x = 0;
    this.y = 80;
    this.img = null;
    this.type = 1;
    this.popped = false;
    this.visible = true;
    this.addedScore = false; // kiểm tra egg này đã được tính điểm chưa
    this.finish = false;
    // let self = this;
    // khởi tạo egg
    this.init = function () {
        this.type = this.getRandomInt(1, 2);
        if (this.type === 1) {
            this.img = this.game.resource.egg1.img;
        } else {
            this.img = this.game.resource.egg2.img;
        }

        let positions = [78, 228, 378, 528, 678, 828, 978, 1128, 1378, 1478];
        this.x = positions[this.getRandomInt(0, 8)];
    };

    this.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // tạo xong thì mỗi lần lặp update
    this.update = function () {
            if(!this.finish){
                this.popped = false;
                if (this.y <= 730) {
                    this.y += 2;
                    this.checkInBasket();
                } else {
                    this.popped = true;
                    this.game.basket.dreaseHP(this.popped);
                    this.visible = false;
                    this.finish = false;

                }
            }
    };

    this.checkInBasket = function () {
        if (
            (this.x > this.game.basket.x) &&
            (this.x < (this.game.basket.x + this.game.resource.basket.img.width)) &&
            (this.y >= 700)
        ) {
            // biến mất egg
            this.visible = false;
            // tăng score
            if (this.addedScore === false) {
                this.game.score += this.type;
                this.addedScore = true;
            }
        }
    };

    // vẽ eggs
    this.draw = function () {
        if (this.visible) {
            this.game.context.drawImage(
                this.img,
                this.x - (this.img.width / 2),
                this.y
            )
        }
    };
};