class Attack2 extends Attack {
  constructor(playerAtt, attackerPosY, attackerPosX, attackerOrientation) {
    super(playerAtt, attackerPosY, attackerPosX, attackerOrientation);
    this.timer = 60;
  }

  execute() {
    this.timer -= 1;
    // if (this.timer == 20) {
    //   this.collision();
    // }
    if (this.timer == 1) {
      game.attacks.push(
        new Attack(true, this.positionY, this.positionX + 50, 0)
      );
    }
  }

  draw() {
    game.display.ctx.fillStyle = "orange";
    game.display.ctx.fillRect(
      this.positionX,
      this.positionY,
      this.size,
      this.size
    );
  }
}
