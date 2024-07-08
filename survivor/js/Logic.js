class Logic {
  constructor(game) {
    this.game = game;
    this.gameTime;

    this.count = 0;
    this.frameCount = 0;
  }

  // all game logic
  runGame(game) {
    // enemy spawn count
    game.logic.count++;
    if (game.logic.count >= 90) {
      game.logic.count = 0;
      if (game.enemies.length < 10) {
        game.logic.addEnemy();
      }
    }
    // frame count
    game.logic.frameCount++;
    if (game.logic.frameCount >= 5) {
      game.logic.frameCount = 0;
      if (game.frame == 0) {
        game.frame = 50;
      } else {
        game.frame = 0;
      }
    }

    // player cool down
    if (game.player.skill1CD > 0) {
      game.player.skill1CD -= 2;
    }
    if (game.player.skill2CD > 0) {
      game.player.skill2CD -= 0.5;
    }
    if (game.player.skill3CD > 0) {
      game.player.skill3CD -= 0.5;
    }
    // player movement

    if (game.inputs.down) game.player.positionY += game.player.speed;
    if (game.inputs.up) game.player.positionY -= game.player.speed;
    if (game.inputs.right) game.player.positionX += game.player.speed;
    if (game.inputs.left) game.player.positionX -= game.player.speed;
    // enemy movement
    game.enemies.forEach((element, index, object) => {
      if (element.health <= 0) {
        object.splice(index, 1);
      } else {
        element.ai();
      }
    });
    // attacks
    if (game.attacks.length > 0) {
      game.attacks.forEach((element, index, object) => {
        element.execute();
        if (element.timer < 1) {
          object.splice(index, 1);
        }
      });
    }
  }

  // stop game time
  stopTime(game) {
    clearInterval(game.logic.gameTime);
  }

  // start game time
  startTime(game) {
    return setInterval(this.runGame, 1000 / 30, game);
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
  }

  addEnemy() {
    let position = this.getRandomInt(1, 2800);

    if (position <= 700) {
      game.enemies.push(new Enemy(game, position, 0));
    } else if (position <= 1400) {
      game.enemies.push(new Enemy(game, position - 700, 650));
    } else if (position <= 2100) {
      game.enemies.push(new Enemy(game, 0, position - 1400));
    } else if (position <= 2800) {
      game.enemies.push(new Enemy(game, 650, position - 2100));
    }
  }
}
