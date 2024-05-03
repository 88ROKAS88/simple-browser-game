window.addEventListener("keydown", (e) => {
  // console.log(e.key);

  if (e.key == "ArrowUp") {
    // game.player.changeY = -game.player.speed;
    if (!game.inputs.down) game.inputs.up = true;
  }
  if (e.key == "ArrowDown") {
    // game.player.changeY = game.player.speed;
    if (!game.inputs.up) game.inputs.down = true;
  }
  if (e.key == "ArrowLeft") {
    // game.player.changeX = -game.player.speed;
    if (!game.inputs.right) game.inputs.left = true;
  }
  if (e.key == "ArrowRight") {
    // game.player.changeX = game.player.speed;
    if (!game.inputs.left) game.inputs.right = true;
  }
  if (e.key == "1") {
    game.player.attack(e.key);
  }
  if (e.key == "p") {
    game.pause(260, "PAUSE");
  }
  game.player.findOrientation();
});

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    // game.player.changeY += game.player.speed;
    game.inputs.up = false;
  }
  if (e.key == "ArrowDown") {
    // game.player.changeY -= game.player.speed;
    game.inputs.down = false;
  }
  if (e.key == "ArrowLeft") {
    // game.player.changeX += game.player.speed;
    game.inputs.left = false;
  }
  if (e.key == "ArrowRight") {
    // game.player.changeX -= game.player.speed;
    game.inputs.right = false;
  }
  game.player.findOrientation();
});
