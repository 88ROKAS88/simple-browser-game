class Attack {
  constructor() {
    //   this.game = game;
    // #### SIZE ####
    this.size = 50;
    // this.sizeX = 50;
    // this.sizeY = 50;
    // #### POSITION AND MOVEMENT ####
    this.positionY = this.calculatePositionY();
    this.changeY = 0;
    this.positionX = this.calculatePositionX();
    this.changeX = 0;
    // this.orientation = 0;

    this.speed = 2;
    this.damage = 1;

    this.timer = 30;
  }
  collision() {
    if (game.enemies.length > 0) {
      game.enemies.forEach((element, index, object) => {
        if (
          this.positionX > element.positionX - this.size &&
          this.positionX < element.positionX + element.size &&
          this.positionY > element.positionY - this.size &&
          this.positionY < element.positionY + element.size
        ) {
          console.log("DAMAGE");
          element.health -= this.damage;
          if (element.health <= 0) {
            object.splice(index, 1);
          }
        }
      });
    }
  }

  execute() {
    this.timer -= 1;
    if (this.timer == 20) {
      this.collision();
    }
  }
  calculatePositionY() {
    let positionY = game.player.positionY;

    switch (game.player.orientation) {
      case 0:
        return positionY;
      case 50:
        return positionY;
      case 100:
        return positionY - 50;
      case 150:
        return positionY + 50;
      case 200:
        return positionY - 50;
      case 250:
        return positionY - 50;
      case 300:
        return positionY + 50;
      case 350:
        return positionY + 50;
    }
  }
  calculatePositionX() {
    let positionX = game.player.positionX;

    switch (game.player.orientation) {
      case 0:
        return positionX - 50;
      case 50:
        return positionX + 50;
      case 100:
        return positionX;
      case 150:
        return positionX;
      case 200:
        return positionX - 50;
      case 250:
        return positionX + 50;
      case 300:
        return positionX + 50;
      case 350:
        return positionX - 50;
    }
  }
  draw() {
    game.display.ctx.fillStyle = "red";
    game.display.ctx.fillRect(
      this.positionX,
      this.positionY,
      this.size,
      this.size
    );
  }
}
