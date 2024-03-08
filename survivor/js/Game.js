class Game {
  constructor() {
    // #### PLAYER ####
    this.player = new Player(this);

    // #### ENEMIES ####
    this.enemies = [new Enemy()];

    // #### SYSTEM ####
    this.inputs = { left: false, right: false, up: false, down: false };
    this.display = new Display(this);
    this.logic = new Logic();

    console.log(this);
  }

  start() {
    this.display.animate();
    this.logic.startTime(this);
  }
}
