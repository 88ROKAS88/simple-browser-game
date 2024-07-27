class Attack4 extends Attack {
  constructor(
    playerAtt,
    attackerPosY,
    attackerPosX,
    attackerOrientation,
    damage
  ) {
    super(playerAtt, attackerPosY, attackerPosX, attackerOrientation, damage);

    this.damage = damage;

    this.timer = 60;

    this.positionY2 = this.calculatePositionY2();
    this.positionX2 = this.calculatePositionX2();
  }

  calculatePositionY() {
    let positionY = this.attackerPosY;

    switch (this.attackerOrientation) {
      case 0:
        return positionY + 25;
      case 50:
        return positionY + 25;
      case 100:
        this.changeY = -1;
        return positionY;
      case 150:
        this.changeY = 1;
        return positionY + 50;
      case 200:
        this.changeY = -1;
        return positionY;
      case 250:
        this.changeY = -1;
        return positionY;
      case 300:
        this.changeY = 1;
        return positionY + 50;
      case 350:
        this.changeY = 1;
        return positionY + 50;
    }
  }
  calculatePositionX() {
    let positionX = this.attackerPosX;

    switch (this.attackerOrientation) {
      case 0:
        this.changeX = -1;
        return positionX;
      case 50:
        this.changeX = 1;
        return positionX + 50;
      case 100:
        return positionX + 25;
      case 150:
        return positionX + 25;
      case 200:
        this.changeX = -1;
        return positionX;
      case 250:
        this.changeX = 1;
        return positionX + 50;
      case 300:
        this.changeX = 1;
        return positionX + 50;
      case 350:
        this.changeX = -1;
        return positionX;
    }
  }

  calculatePositionY2() {
    let positionY = this.attackerPosY;

    switch (this.attackerOrientation) {
      case 0:
        return positionY + 25;
      case 50:
        return positionY + 25;
      case 100:
        return positionY - 150;
      case 150:
        return positionY + 200;
      case 200:
        return positionY - 100;
      case 250:
        return positionY - 100;
      case 300:
        return positionY + 150;
      case 350:
        return positionY + 150;
    }
  }
  calculatePositionX2() {
    let positionX = this.attackerPosX;

    switch (this.attackerOrientation) {
      case 0:
        return positionX - 150;
      case 50:
        return positionX + 200;
      case 100:
        return positionX + 25;
      case 150:
        return positionX + 25;
      case 200:
        return positionX - 100;
      case 250:
        return positionX + 150;
      case 300:
        return positionX + 150;
      case 350:
        return positionX - 100;
    }
  }
  execute() {
    this.timer -= 1;

    if (this.timer == 29) {
      this.collision();
    }
  }

  draw() {
    game.display.ctx.beginPath();
    game.display.ctx.strokeStyle = "white";
    game.display.ctx.moveTo(this.positionX, this.positionY);
    game.display.ctx.lineTo(this.positionX2, this.positionY2);
    game.display.ctx.stroke();
  }
}
