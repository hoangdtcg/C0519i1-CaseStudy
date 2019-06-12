let game = function () {
    this.canvas = null;
    this.context = null;
    this.resource = null;
    this.chickens = [];
    this.eggs = [];
    this.perched = null;
    this.basket = null;
    this.resourceLoaded = false;
    this.score = 0;

    let self = this;

    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 1350; //
        this.canvas.height = 750; //
        this.context = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

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
        self.checkCrash();
        setTimeout(self.loop, 20);
    };


    this.checkCrash = function () {
        for (let i = 0; i < this.eggs.length; i++){
            if(this.eggs[i].checkInBasket()){
                this.eggs[i].visible = false;
                this.eggs.splice(i,1);
                i--;
            }

            if(this.eggs[i].y >= this.canvas.height) {
                if(this.eggs[i].visible){
                    this.basket.decreaseHP();
                    this.eggs[i].visible = false;
                    this.eggs.splice(i,1);
                    i--;
                }

            }
        }
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
        self.gameOver();
    };

    this.drawAllEggs = function () {
        for (let i = 0; i < this.eggs.length; i++) {
            if(this.eggs[i].visible)
                this.eggs[i].draw();
        }
    };

    this.drawAllChickens = function () {
        for (let i = 0; i < this.chickens.length; i++) {
            this.chickens[i].draw();
        }
    };

    this.drawLoading = function () {
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('Loading...', 100, 100);
    };

    this.drawScore = function () {
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('Score: ' + this.score, 150, 200);
    };

    this.drawHP = function () {
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('HP: ' + this.basket.hp, 1200, 200);
    };

    this.drawGameOver = function () {
        self.context.fillStyle = '#ffffff';
        self.context.font = '30px Arial';
        self.context.fillText('GameOver', 600, 300);
    };
   this.gameOver = function () {
        if(this.basket.hp === 0){
            this.basket.status = false;
            self.drawGameOver();
            self.gameRestart();
         }
    };
    this.gameRestart = function () {
        location.href = location.href + "?id=" + 1000 * Math.random();
    }
};
