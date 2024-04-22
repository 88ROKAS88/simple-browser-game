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
    this.pause = false;
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
}
