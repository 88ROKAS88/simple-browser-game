class Enemy {
  constructor(game) {
    this.game = game;

    // #### POSITION ####
    this.positionY = 0;
    this.changeY = 0;
    this.positionX = 0;
    this.changeX = 0;

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
    this.displayHP();
  }
  ai() {
    if (game.player.positionY > this.positionY + 50 + 25) {
      this.positionY += this.speed;
    } else if (game.player.positionY < this.positionY - 50 - 25) {
      this.positionY -= this.speed;
    }

    if (game.player.positionX > this.positionX + 50 + 25) {
      this.positionX += this.speed;
    } else if (game.player.positionX < this.positionX - 50 - 25) {
      this.positionX -= this.speed;
    }
  }
}
