class Display {
  constructor(game) {
    this.game = game;

    this.sprite = document.createElement("img");
    // #### CANVAS ####
    this.canvas = document.getElementById("canvas");
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    // ctx
    this.ctx = canvas.getContext("2d");
    {
      this.sprite.src = "./sprite.png";
    }
  }

  backgroundDraw() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 500, 800);
  }

  // animate
  animate() {
    game.display.ctx.clearRect(0, 0, game.canvasWidth, game.canvasHeight);
    game.display.backgroundDraw();

    game.player.draw();

    requestAnimationFrame(game.display.animate);
  }
}
