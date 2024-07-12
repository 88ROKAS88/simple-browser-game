class Display {
  constructor(game) {
    this.game = game;

    this.header = false;
    this.headerText = "";
    this.headerMargin = 300;

    this.sprite = document.createElement("img");
    this.enemySprite = document.createElement("img");
    this.skillSprite = document.createElement("img");
    this.interfaceImage = document.createElement("img");
    // #### CANVAS ####
    this.canvas = document.getElementById("canvas");
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    // ctx
    this.ctx = canvas.getContext("2d");
    {
      this.sprite.src = "./sprites/playerSprite.png";
      this.enemySprite.src = "./sprites/enemySprite.png";
      this.skillSprite.src = "./sprites/skillSprite.png";
      this.interfaceImage.src = "./sprites/UI.png";
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
    this.ctx.fillRect(50, 650, game.player.health, 50);
    this.ctx.fillStyle = "white";
    this.ctx.fillText(game.player.health, 54, 695);

    // display skill cooldown
    this.ctx.fillStyle = "white";
    // skill 1
    game.display.ctx.drawImage(
      game.display.skillSprite,
      0, // column
      0, //row
      50,
      50,
      250,
      650,
      50,
      50
    );
    this.ctx.fillRect(250, 650, 50, game.player.skill1CD);
    // skill 2
    game.display.ctx.drawImage(
      game.display.skillSprite,
      0, // column
      50, //row
      50,
      50,
      300,
      650,
      50,
      50
    );
    this.ctx.fillRect(300, 650, 50, game.player.skill2CD);
    // skill 3
    game.display.ctx.drawImage(
      game.display.skillSprite,
      0, // column
      50, //row
      50,
      50,
      350,
      650,
      50,
      50
    );
    this.ctx.fillRect(350, 650, 50, game.player.skill3CD);
    // draw UI image
    game.display.ctx.drawImage(
      game.display.interfaceImage,
      0, // column
      0, //row
      700,
      700,
      0,
      0,
      700,
      700
    );
  }
  drawHeader() {
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.headerText, this.headerMargin, 370);
  }

  // animate
  animate() {
    game.display.ctx.clearRect(0, 0, game.canvasWidth, game.canvasHeight);
    game.display.backgroundDraw();

    game.enemies.forEach((element) => {
      element.draw();
    });

    game.player.draw();

    if (game.attacks.length > 0) {
      game.attacks.forEach((element) => {
        element.draw();
      });
    }

    game.display.uiDraw();
    if (game.display.header) {
      game.display.drawHeader();
    }
    requestAnimationFrame(game.display.animate);
  }
}
