var player;
var canvas;
var enemyGroup, bulletGroup;
var enemy1, enemy2, enemy3, enemy4;
var font;
var score = 0;
var gameState = "start";
var bgImg;
var sfx;

function preload(){
  font = loadFont("../fonts/Kenney Blocks.ttf");
  bgImg = loadImage("../sprites/Bg.png");

  sfx ={
    shoot : loadSound("../sfx/Shoot.wav"),
    dieZ : loadSound("../sfx/Die_Zombie.wav"),
    dieP : loadSound("../sfx/Die_Player.wav")
  }
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
  background(bgImg);

  player.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();

  drawSprites();

  fill("white");
  textFont(font);
  textSize(canvas.width/20);

  if(gameState === "start"){
    text("ZOMBIE ATTACK!", canvas.width/10*2.75, canvas.height/4);
  }

  textSize(canvas.width/40);
  text("SCORE: " + score, canvas.width/50, canvas.height/10);

  if(gameState === "start"){
    text("PRESS ENTER TO START", canvas.width/10*3.5, canvas.height/2*1.5);
    text("by Pixel Wolves", canvas.width-canvas.width/50*15, canvas.height-canvas.height/10);

    if(keyIsDown(13)){
      gameState = "play";
    }
  }
  else if (gameState === "end"){
    text("GAME OVER! PRESS START TO TRY AGAIN", canvas.width/10*2, canvas.height/2*1.5);

    if(keyIsDown(13)){
      player.reset();
    }
  }
}

function spawnEnemies(){
  if(frameCount % 120 === 0){
    var enemy = new Enemy();
  }
}