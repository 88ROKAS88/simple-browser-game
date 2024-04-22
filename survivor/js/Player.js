class Player {
  constructor(game) {
    this.game = game;
    this.positionY = 350;
    this.changeY = 0;
    this.positionX = 350;
    this.changeX = 0;
    this.orientation = 0;

    this.speed = 2;
    this.health = 100;
  }
  draw() {
    game.display.ctx.fillStyle = "green";
    game.display.ctx.fillRect(this.positionX, this.positionY, 50, 50);

    game.display.ctx.drawImage(
      game.display.sprite,
      //game.frame,
      0,
      game.player.orientation,
      50,
      50,
      this.positionX,
      this.positionY,
      50,
      50
    );
  }

  findOrientation() {
    if (this.game.inputs.right && this.game.inputs.up) {
      this.orientation = 250;
    } else if (this.game.inputs.right && this.game.inputs.down) {
      this.orientation = 300;
    } else if (this.game.inputs.left && this.game.inputs.up) {
      this.orientation = 200;
    } else if (this.game.inputs.left && this.game.inputs.down) {
      this.orientation = 350;
    } else if (this.game.inputs.left) {
      console.log("left");
      this.orientation = 0;
    } else if (this.game.inputs.right) {
      this.orientation = 50;
    } else if (this.game.inputs.up) {
      this.orientation = 100;
    } else if (this.game.inputs.down) {
      this.orientation = 150;
    }
  }
}
