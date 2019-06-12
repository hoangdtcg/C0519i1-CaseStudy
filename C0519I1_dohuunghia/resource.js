let gameImage = function (name) {
    this.img = null;
    this.name = name;
    this.loaded = false;

    let self = this;

    this.load = function () {
        this.img = new Image();
        this.img.onload = function () {
            self.loaded = true;
        };
        this.img.src = 'images/' + name + '.png';
    }
};

let resource = function (game) {
    this.game = game;
    this.perched = new gameImage('perched');
    this.basket = new gameImage('basket');
    this.chicken = new gameImage('chicken');
    this.egg1 = new gameImage('egg1');
    this.egg2 = new gameImage('egg2');
    this.egg_popped = new gameImage('egg_popped');



    let self = this;

    this.load = function () {
        this.perched.load();
        this.basket.load();
        this.chicken.load();
        this.egg1.load();
        this.egg2.load();
        this.egg_popped.load();


        setInterval(function () {
            self.checkAllImageLoaded(); //kiểm tra xem tất cả ảnh đã load xong chưa
        }, 500)
    };

    this.checkAllImageLoaded = function () {
        if (
            (this.perched.loaded) &&
            (this.basket.loaded) &&
            (this.chicken.loaded) &&
            (this.egg1.loaded) &&
            (this.egg2.loaded) &&
            (this.egg_popped.loaded)
        ) {
            this.game.resourceLoaded = true;
        }
    }
};
