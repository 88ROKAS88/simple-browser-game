window.addEventListener("keydown", (e) => {
  console.log(e.key);

  if (e.key == "ArrowUp") {
    game.player.changeY = -game.player.speed;
  }
  if (e.key == "ArrowDown") {
    game.player.changeY = game.player.speed;
  }
  if (e.key == "ArrowLeft") {
    game.player.changeX = -game.player.speed;
  }
  if (e.key == "ArrowRight") {
    game.player.changeX = game.player.speed;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key == "ArrowUp") {
    game.player.changeY += game.player.speed;
  }
  if (e.key == "ArrowDown") {
    game.player.changeY -= game.player.speed;
  }
  if (e.key == "ArrowLeft") {
    game.player.changeX += game.player.speed;
  }
  if (e.key == "ArrowRight") {
    game.player.changeX -= game.player.speed;
  }
});
