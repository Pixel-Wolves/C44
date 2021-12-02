var player;

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = new Player();
}

function draw() {
  background(220);

  player.display();

  drawSprites();
}