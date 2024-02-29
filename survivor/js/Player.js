class Player {
  constructor(game) {
    this.game = game;
    this.positionY = 350;
    this.changeY = 0;
    this.positionX = 350;
    this.changeX = 0;

    this.speed = 2;
  }
  draw() {
    game.display.ctx.fillStyle = "green";
    game.display.ctx.fillRect(this.positionX, this.positionY, 50, 50);
  }
}
