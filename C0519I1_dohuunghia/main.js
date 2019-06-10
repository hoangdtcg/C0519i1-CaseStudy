let game = function () {
    this.canvas = null;
    this.context = null;
    this.resource = null;
    this.chickens = [];
    this.eggs = [];
    this.perched = null;
    this.basket = null;
    this.resourceLoaded = false; //kiểm tra tất cả ảnh đã tải xong chưa
    this.score = 0;

    let self = this;

    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 1350; //
        this.canvas.height = 750; //
        this.context = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        // tạo tất cả các object
        this.resource = new resource(this);
        this.perched = new perched(this);
        this.resource.load();
        this.chickens = [
            new chicken(this, 50, 25),
            new chicken(this, 200, 25),
            new chicken(this, 350, 25),
            new chicken(this, 500, 25),
            new chicken(this, 650, 25),
            new chicken(this, 800, 25),
            new chicken(this, 950, 25),
            new chicken(this, 1100, 25),
            new chicken(this, 1250, 25),
        ];

        this.basket = new basket(this);
        this.basket.init();

        setInterval(self.createNewEgg, 1000);

    };

    this.start = function () {
        this.loop();
    };

    this.loop = function () {
        self.update();
        self.draw();
        setTimeout(self.loop, 20); // 50 hình trên giây
    };

    this.update = function () {
        for (let i = 0; i < this.eggs.length; i++) {
            this.eggs[i].update();
        }
    };

    this.draw = function () {
        self.context.fillStyle = "#3e738e";
        self.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (self.resourceLoaded === false) {
            self.drawLoading();
        } else {
            self.drawAll();
        }
    };

    // tạo egg mới
    this.createNewEgg = function () {
        if (self.resourceLoaded) {
            let newEgg = new egg(self);
            newEgg.init();
            self.eggs.push(newEgg); // cho vào mảng các quả trứng
        }
    };

    this.drawAll = function () {
        self.drawHP();
        self.drawScore();
        self.perched.draw();
        self.basket.draw();
        self.drawAllEggs();
        self.drawAllChickens();
    };

    this.drawAllEggs = function () {
        // lặp qua từng egg rồi vẽ nó
        for (let i = 0; i < this.eggs.length; i++) {
            this.eggs[i].draw();
        }
    };

    // vẽ gà
    this.drawAllChickens = function () {
        for (let i = 0; i < this.chickens.length; i++) {
            this.chickens[i].draw();
        }
    };

    // vẽ loading
    this.drawLoading = function () {
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('Loading...', 100, 100);
    };

    // vẽ score
    this.drawScore = function () {
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('Score: ' + this.score, 150, 200);
    };

    // vẽ HP
    this.drawHP = function () {
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('HP: ' + this.basket.hp, 1200, 200);
    };

    // this.gameOver = function () {
    //     if()
    // }
};
