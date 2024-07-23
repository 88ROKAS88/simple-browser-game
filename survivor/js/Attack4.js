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
  }

  execute() {
    this.timer -= 1;

    if (this.timer == 1) {
      game.attacks.push(
        new Attack(
          true,
          this.positionY,
          this.positionX + 50,
          0,
          this.damage * 2
        )
      );
    }
    if (this.timer == 15 || this.timer == 45) {
      this.frame = 50;
      this.collision();
    }
    if (this.timer == 30) {
      this.frame = 0;
      this.collision();
    }
  }

  draw() {
    game.display.ctx.drawImage(
      game.display.skillSprite,

      this.frame, // column
      50, //row
      50,
      50,
      this.positionX,
      this.positionY,
      this.size,
      this.size
    );
  }
}
