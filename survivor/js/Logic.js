class Logic {
  constructor(game) {
    this.game = game;
    this.gameTime;
    // this.gameTime = this.startTime(this.game);
  }
  // all game logic
  runGame(game) {
    // player movement
    game.player.positionY += game.player.changeY;
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
