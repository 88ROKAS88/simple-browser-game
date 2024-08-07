class Enemy {
  constructor(game, positionX, positionY) {
    this.game = game;

    // #### POSITION ####
    this.positionY = positionY;
    this.changeY = 0;
    this.positionX = positionX;
    this.changeX = 0;

    // #### ORIENTATION ####
    this.orientation = 0;

    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;

    this.change = false;

    // #### STATS ####
    this.damage = 5;
    this.size = 50;
    this.speed = 1;
    this.health = 20;

    // #### SYSTEM ####
    this.delay = 0;
  }
  displayHP() {
    game.display.ctx.fillStyle = "red";
    game.display.ctx.fillRect(this.positionX, this.positionY, this.health, 5);
  }
  draw() {
    game.display.ctx.fillStyle = "blue";
    // game.display.ctx.fillRect(this.positionX, this.positionY, 50, 50);
    game.display.ctx.drawImage(
      game.display.enemySprite,
      game.frame,
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
  findOrientation() {
    if (this.right && this.up) {
      this.orientation = 250;
    } else if (this.right && this.down) {
      this.orientation = 300;
    } else if (this.left && this.up) {
      this.orientation = 200;
    } else if (this.left && this.down) {
      this.orientation = 350;
    } else if (this.left) {
      this.orientation = 0;
    } else if (this.right) {
      this.orientation = 50;
    } else if (this.up) {
      this.orientation = 100;
    } else if (this.down) {
      this.orientation = 150;
    }
  }
  calcDelay() {
    this.delay++;
    if (this.delay > 30) {
      this.delay = 0;
    }
  }
  initiateAttack() {
    if (!this.left && !this.right && !this.up && !this.down) {
      // correct orientatioin for attack
      if (
        game.player.positionX > this.positionX + 50 &&
        game.player.positionY < this.positionY - 50
      ) {
        this.orientation = 250;
      } else if (
        game.player.positionX > this.positionX + 50 &&
        game.player.positionY > this.positionY + 50
      ) {
        this.orientation = 300;
      } else if (
        game.player.positionX < this.positionX - 50 &&
        game.player.positionY < this.positionY - 50
      ) {
        this.orientation = 200;
      } else if (
        game.player.positionX < this.positionX - 50 &&
        game.player.positionY > this.positionY + 50
      ) {
        this.orientation = 350;
      } else if (game.player.positionX < this.positionX - 50) {
        this.orientation = 0;
      } else if (game.player.positionX > this.positionX + 50) {
        this.orientation = 50;
      } else if (game.player.positionY < this.positionY - 50) {
        this.orientation = 100;
      } else if (game.player.positionY > this.positionY + 50) {
        this.orientation = 150;
      }
      // initiate attack
      game.attacks.push(
        new Attack(
          false,
          this.positionY,
          this.positionX,
          this.orientation,
          this.damage
        )
      );
    }
  }
  ai() {
    this.calcDelay();
    if (this.delay == 1) {
      this.findPlayer();
    }
    this.move();
    if (this.change) {
      this.findOrientation();
    }
    if (this.delay == 10) {
      this.initiateAttack();
    }
  }
}
