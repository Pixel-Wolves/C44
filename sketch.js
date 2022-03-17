var player;
var canvas;
var enemyGroup, bulletGroup;
var enemies = [];
var font;
var score = 0;
var gameState = "start";
var bgImg;
var sfx;

function preload(){
  font = loadFont("fonts/Kenney Blocks.ttf");
  bgImg = loadImage("sprites/Bg.png");

  sfx ={
    shoot : loadSound("sfx/Shoot.wav"),
    dieZ : loadSound("sfx/Die_Zombie.wav"),
    dieP : loadSound("sfx/Die_Player.wav")
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  enemyGroup = new Group();
  bulletGroup = new Group();

  player = new Player();
}

function draw() {
  background(bgImg);

  player.display();

  drawSprites();

  fill("white");
  textFont(font);
  textSize(canvas.width/20);

  if(gameState === "start"){
    text("ZOMBIE INVASION!", canvas.width/10*2.2, canvas.height/4);
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
  else if(gameState==="play"){
    if(frameCount%60==0){
      enemies.push(new Enemy());
    }
  }
  else if (gameState === "end"){
    text("GAME OVER! PRESS START TO TRY AGAIN", canvas.width/10*2, canvas.height/2*1.5);

    if(keyIsDown(13)){
      for(var j = 0; j < enemies.length; j=j+1){
        enemies[j].reset();
      }
      player.reset();
    }
  }

  for(var i = 0; i < enemies.length; i=i+1){
    enemies[i].display();
  }
}