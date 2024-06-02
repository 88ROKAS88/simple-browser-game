class Attack {
  constructor(playerAtt, attackerPosY, attackerPosX, attackerOrientation) {
    // #### SIZE ####
    this.size = 50;

    // #### POSITION AND MOVEMENT ####
    this.attackerPosY = attackerPosY;
    this.attackerPosX = attackerPosX;
    this.attackerOrientation = attackerOrientation;
    this.positionY = this.calculatePositionY();
    this.changeY = 0;
    this.positionX = this.calculatePositionX();
    this.changeX = 0;
    // this.orientation = 0;

    this.speed = 2;
    this.damage = 5;

    this.timer = 30;
    this.playerAtt = playerAtt;
    this.frame = 0;
  }
  collision() {
    // #### ATTACK AGAINST ENEMIES ####
    if (this.playerAtt) {
      if (game.enemies.length > 0) {
        game.enemies.forEach((element, index, object) => {
          if (
            this.positionX > element.positionX - this.size &&
            this.positionX < element.positionX + element.size &&
            this.positionY > element.positionY - this.size &&
            this.positionY < element.positionY + element.size
          ) {
            element.health -= this.damage;
            if (element.health <= 0) {
              object.splice(index, 1);
              game.score += 1;
            }
          }
        });
      }
      // #### ATTACK AGAINST PLAYERS ####
    } else {
      if (
        this.positionX > game.player.positionX - this.size &&
        this.positionX < game.player.positionX + game.player.size &&
        this.positionY > game.player.positionY - this.size &&
        this.positionY < game.player.positionY + game.player.size
      ) {
        game.player.health -= this.damage;
        if (game.player.health <= 0) {
          game.over();
        }
      }
    }
  }

  execute() {
    this.timer -= 1;
    if (this.timer == 10) {
      this.frame = 100;
    }
    if (this.timer == 20) {
      this.frame = 50;
      this.collision();
    }
  }
  calculatePositionY() {
    let positionY = this.attackerPosY;

    switch (this.attackerOrientation) {
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
    let positionX = this.attackerPosX;

    switch (this.attackerOrientation) {
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
    game.display.ctx.drawImage(
      game.display.skillSprite,

      this.frame, // column
      0, //row
      50,
      50,
      this.positionX,
      this.positionY,
      this.size,
      this.size
    );
  }
}
