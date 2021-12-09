var player;
var canvas;
var enemyGroup;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  enemyGroup = new Group();

  player = new Player();
  var enemyStart = new Enemy();
}

function draw() {
  background(220);

  player.display();

  drawSprites();
}

function spawnEnemies(){
  if(frameCount % 120 === 0){
    var enemy = new Enemy();
  }
}