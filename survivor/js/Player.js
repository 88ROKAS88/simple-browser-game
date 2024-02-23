class Player {
  constructor(game) {
    this.game = game;
    this.positionY = 0;
    this.changeY = 0;
  }
  draw() {
    game.display.ctx.fillStyle = "red";
    game.display.ctx.fillRect(0, 0, 50, 50);
  }
}
