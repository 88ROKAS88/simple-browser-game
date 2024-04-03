class Enemy {
  constructor(game) {
    this.game = game;

    // #### POSITION ####
    this.positionY = 0;
    this.changeY = 0;
    this.positionX = 0;
    this.changeX = 0;

    // #### ORIENTATION ####
    this.orientation = 0;

    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;

    this.change = false;

    // #### STATS ####
    this.size = 50;
    this.speed = 1;
    this.health = 5;
  }
  displayHP() {
    game.display.ctx.fillStyle = "red";
    game.display.ctx.fillRect(this.positionX, this.positionY, this.health, 2);
  }
  draw() {
    game.display.ctx.fillStyle = "blue";
    game.display.ctx.fillRect(this.positionX, this.positionY, 50, 50);
    game.display.ctx.drawImage(
      game.display.sprite,
      //game.frame,
      0,
      this.orientation,
      50,
      50,
      this.positionX,
      this.positionY,
      50,
      50
    );
    this.displayHP();
  }
  findPlayer() {
    this.change = false;
    if (game.player.positionY > this.positionY + 50 + 25) {
      if (!this.down == true) {
        this.change = true;

        this.down = true;
        this.up = false;
      }
    } else if (!this.down == false) {
      this.change = true;

      this.down = false;
    }

    if (game.player.positionY < this.positionY - 50 - 25) {
      if (!this.up == true) {
        this.change = true;

        this.up = true;
        this.down = false;
      }
    } else if (!this.up == false) {
      this.change = true;

      this.up = false;
    }

    if (game.player.positionX > this.positionX + 50 + 25) {
      if (!this.right == true) {
        this.change = true;

        this.right = true;
        this.left = false;
      }
    } else if (!this.right == false) {
      this.change = true;

      this.right = false;
    }

    if (game.player.positionX < this.positionX - 50 - 25) {
      if (!this.left == true) {
        this.change = true;

        this.left = true;
        this.right = false;
      }
    } else if (!this.left == false) {
      this.change = true;

      this.left = false;
    }
  }
  move() {
    if (this.up) {
      this.positionY -= this.speed;
    }
    if (this.down) {
      this.positionY += this.speed;
    }
    if (this.left) {
      this.positionX -= this.speed;
    }
    if (this.right) {
      this.positionX += this.speed;
    }
  }

  ai() {
    this.findPlayer();
    this.move();
  }
}
