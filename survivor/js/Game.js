class Game {
  constructor() {
    // #### PLAYER ####
    this.player = new Player(this);

    // #### ENEMIES ####
    this.enemies = [];

    // #### ATTACKS ####
    this.attacks = [];

    // #### SYSTEM ####
    this.overVar = false;
    this.pauseVar = false;
    this.inputs = { left: false, right: false, up: false, down: false };
    this.display = new Display(this);
    this.logic = new Logic();
    this.frame = 0;

    // #### SCORE ####
    this.score = 0;
    console.log(this);
  }

  start() {
    this.display.animate();
    this.logic.gameTime = this.logic.startTime(this);
  }
  pause(margin, text) {
    if (!this.overVar) {
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
  over() {
    this.pause(195, "GAME OVER");
    this.overVar = true;
  }
}
