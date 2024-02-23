class Game {
  constructor() {
    // #### PLAYER ####
    this.player = new Player(this);
    this.display = new Display(this);
    this.logic = new Logic();

    console.log(this);
  }

  start() {
    this.display.animate();
    this.logic.startTime(this);
  }
}
