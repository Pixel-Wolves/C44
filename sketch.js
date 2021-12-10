var player;
var canvas;
var enemyGroup;
var bulletGroup;
var enemy1, enemy2, enemy3, enemy4;
var font;

function preload(){
  font = loadFont("../fonts/Kenney Blocks.ttf")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  enemyGroup = new Group();
  bulletGroup = new Group();

  player = new Player();
  enemy1 = new Enemy();
  enemy2 = new Enemy();
  enemy3 = new Enemy();
  enemy4 = new Enemy();
}

function draw() {
  background(220);

  player.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();

  drawSprites();

  textFont(font);
  textSize(32);
  fill("black");
  text("SCORE:0", 200, 200);
}

function spawnEnemies(){
  if(frameCount % 120 === 0){
    var enemy = new Enemy();
  }
}