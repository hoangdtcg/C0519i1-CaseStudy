let Gameboard = function (id, width, height,) {
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.canvas.width = width;
  this.canvas.height = height;
  this.score = 0;
  this.beers = [];

  this.init = function () {
    //set các chỉ số player và enemy
    // set thông số mặc định
    this.player =
      new Player(this, this.canvas.width / 2, this.canvas.height - 50, 10, 10, 60)
  }
  this.drawMethod = function () {
    this.ctx.beginPath();
    this.ctx.fillText("HP :" + this.player.hp, 10, 10);
    this.ctx.fillText("Score : " + this.score, 10, 20);
    this.ctx.stroke();
  }
  this.draw = function () {
    //vẽ ra player và egg trên màn hình
    this.player.draw();
    this.drawMethod();
  }
  this.gameOver = function () {
    //check tất cả những va chạm trong game board
  }
  this.createBeer = function () {
    let num = Math.random() * 1000;
    if (num < 15) {
      let beer = new Beer(this, Math.floor(Math.random() * 900), 0, 5, 2, 10);
      this.beers.push(beer);
    }
    for (let i = 0; i < this.beers.length; i++) {
      this.beers[i].move();
      this.beers[i].draw();
    }
  }
  this.control = function (evt) {
    switch (evt.keyCode) {
      case 37:
        this.player.moveleft();
        break;
      case 39:
        this.player.moveright();
        break;
    }
    console.log(evt)
  }
  this.crash = function (obj1, obj2) {
    let x1 = obj1.x;
    let x2 = obj2.x;
    let y1 = obj1.y;
    let y2 = obj2.y;
    if (x1 < x2 - obj2.size / 2 || x1 > (x2 + obj2.size / 2) || y1 < y2 - obj2.size / 2) {
      return false;
    } else {
      return true;
    }
  }
  this.checkcrash = function () {
    for (i = 0; i < this.beers.length; i++) {
      if (this.crash(this.beers[i], this.player)) {
        this.beers.splice(i, 1);
        i--;
        this.score++;
        this.beers[i].status = false;
      } else {
        if (this.beers[i].y > this.canvas.height) ;
      }
    }
  }
}

function main() {
  game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
  game.draw();
  game.createBeer();
  game.checkcrash();
  requestAnimationFrame(main);
}

document.addEventListener("keydown", control);

function control(evt) {
  game.control(evt);
}


