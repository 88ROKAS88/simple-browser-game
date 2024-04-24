class Display {
  constructor(game) {
    this.game = game;

    this.header = false;
    this.headerText = "";
    this.headerMargin = 300;

    this.sprite = document.createElement("img");
    // #### CANVAS ####
    this.canvas = document.getElementById("canvas");
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    // ctx
    this.ctx = canvas.getContext("2d");
    {
      this.sprite.src = "./sprites/playerSprite.png";
    }
  }

  backgroundDraw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 700, 700);
  }
  uiDraw() {
    // display score
    this.ctx.fillStyle = "white";
    this.ctx.font = "48px serif";
    this.ctx.fillText(game.score, 600, 50);

    // display players health
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 650, game.player.health, 50);
  }
  drawHeader() {
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.headerText, this.headerMargin, 370);
  }

  // animate
  animate() {
    game.display.ctx.clearRect(0, 0, game.canvasWidth, game.canvasHeight);
    game.display.backgroundDraw();

    game.player.draw();

    if (game.attacks.length > 0) {
      game.attacks.forEach((element) => {
        element.draw();
      });
    }

    game.enemies.forEach((element) => {
      element.draw();
    });

    game.display.uiDraw();
    if (game.display.header) {
      game.display.drawHeader();
    }
    requestAnimationFrame(game.display.animate);
  }
}
