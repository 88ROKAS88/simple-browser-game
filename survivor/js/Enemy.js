class Enemy {
  constructor(game) {
    this.game = game;
    this.positionY = 0;
    this.changeY = 0;
    this.positionX = 0;
    this.changeX = 0;

    this.speed = 2;
  }
  draw() {
    game.display.ctx.fillStyle = "red";
    game.display.ctx.fillRect(this.positionX, this.positionY, 50, 50);
  }
}
