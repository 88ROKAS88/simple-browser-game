class Game {
  constructor() {
    // #### PLAYER ####
    this.player = new Player(this);

    // #### ENEMIES ####
    this.enemies = []; //new Enemy(game, 0, 0)];

    // #### ATTACKS ####
    this.attacks = [];

    // #### SYSTEM ####
    this.inputs = { left: false, right: false, up: false, down: false };
    this.pauseVar = false;
    this.display = new Display(this);
    this.logic = new Logic();

    // #### SCORE ####
    this.score = 0;
    console.log(this);
  }

  start() {
    this.display.animate();
    this.logic.gameTime = this.logic.startTime(this);
  }
  pause(margin, text) {
    if (this.pauseVar) {
      this.pauseVar = false;
      this.logic.gameTime = this.logic.startTime(game);
      this.display.header = false;
    } else {
      this.pauseVar = true;
      this.logic.stopTime(game);
      this.display.headerText = text;
      this.display.headerMargin = margin;
      this.display.header = true;
    }
  }
}
