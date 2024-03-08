class Logic {
  constructor(game) {
    this.game = game;
    this.gameTime;
    // this.gameTime = this.startTime(this.game);
  }
  // all game logic
  runGame(game) {
    // player movement
    // game.player.positionY += game.player.changeY;
    // game.player.positionX += game.player.changeX;
    if (game.inputs.down) game.player.positionY += game.player.speed;
    if (game.inputs.up) game.player.positionY -= game.player.speed;
    if (game.inputs.right) game.player.positionX += game.player.speed;
    if (game.inputs.left) game.player.positionX -= game.player.speed;
    // enemy movement
    game.enemies.forEach((element) => {
      element.ai();
    });
  }

  // stop game time
  stopTime(game) {
    clearInterval(game.gameTime);
  }

  // start game time
  startTime(game) {
    return setInterval(this.runGame, 1000 / 30, game);
  }
}
