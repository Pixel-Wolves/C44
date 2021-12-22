class Player{
    constructor(){
        this.sprite = createSprite(windowWidth/2,windowHeight/2);
        this.facing = "right";
        this.speed = canvas.width/100;
        this.xAxis = 0;
        this.yAxis = 0;
        this.sprite.scale = windowWidth/1600;
        this.health = 100;
        this.healthBar = createSprite(canvas.width/2,canvas.height/10,canvas.width/2,canvas.height/20);
        this.healthBar.shapeColor = "Green";
        this.healthBar.depth = 5;

        this.upAnim = loadAnimation("../sprites/player/Up1.png", "../sprites/player/Up2.png", "../sprites/player/Up3.png", "../sprites/player/Up4.png");
        this.downAnim = loadAnimation("../sprites/player/Down1.png", "../sprites/player/Down2.png", "../sprites/player/Down3.png", "../sprites/player/Down4.png");
        this.leftAnim = loadAnimation("../sprites/player/Left1.png", "../sprites/player/Left2.png", "../sprites/player/Left3.png", "../sprites/player/Left4.png");
        this.rightAnim = loadAnimation("../sprites/player/Right1.png", "../sprites/player/Right2.png", "../sprites/player/Right3.png", "../sprites/player/Right4.png");
        
        this.rollUp = loadAnimation("../sprites/player/RollUp1.png", "../sprites/player/RollUp2.png", "../sprites/player/RollUp3.png", "../sprites/player/RollUp4.png");
        this.rollDown = loadAnimation("../sprites/player/RollDown1.png", "../sprites/player/RollDown2.png", "../sprites/player/RollDown3.png", "../sprites/player/RollDown4.png");
        this.rollLeft = loadAnimation("../sprites/player/RollLeft1.png", "../sprites/player/RollLeft2.png", "../sprites/player/RollLeft3.png", "../sprites/player/RollLeft4.png");
        this.rollRight = loadAnimation("../sprites/player/RollRight1.png", "../sprites/player/RollRight2.png", "../sprites/player/RollRight3.png", "../sprites/player/RollRight4.png")

        this.dieAnim = loadAnimation("../sprites/player/Die1.png", "../sprites/player/Die2.png", "../sprites/player/Die3.png", "../sprites/player/Die4.png", "../sprites/player/Die5.png", "../sprites/player/Die6.png")
        this.dieAnim.looping = false;

        this.sprite.addAnimation("Up", this.upAnim);
        this.sprite.addAnimation("Down", this.downAnim);
        this.sprite.addAnimation("Left", this.leftAnim);
        this.sprite.addAnimation("Right", this.rightAnim);

        this.sprite.addAnimation("RollUp", this.rollUp);
        this.sprite.addAnimation("RollDown", this.rollDown);
        this.sprite.addAnimation("RollLeft", this.rollLeft);
        this.sprite.addAnimation("RollRight", this.rollRight);

        this.sprite.addAnimation("Die", this.dieAnim);

        this.roll = false;

        this.alive = true;
    }

    display(){
        // Axis Y
        if(keyIsDown(UP_ARROW) || keyIsDown(87)){
            this.yAxis = -1;
        }
        else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
            this.yAxis = 1;
        }
        else{
            this.yAxis = 0;
        }

        // Axis X
        if(keyIsDown(LEFT_ARROW) || keyIsDown(65)){
            this.xAxis = -1;
        }
        else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
            this.xAxis = 1;
        }
        else{
            this.xAxis = 0;
        }
        
        // Movement
        if(gameState === "play"){
            this.sprite.velocityX = this.xAxis * this.speed;
            this.sprite.velocityY = this.yAxis * this.speed;
        }
        else{
            this.sprite.velocityX = 0;
            this.sprite.velocityY = 0;
        }

        // Define Facing
        if(this.yAxis < 0){
            if (!keyIsDown(17)){
                this.facing = "up";
            }
        }
        else if(this.yAxis > 0){
            if(!keyIsDown(17)){
                this.facing = "down";
            }
        }
        else if(this.xAxis < 0){
            if(!keyIsDown(17)){
                this.facing = "left";
            }
        }
        else if(this.xAxis > 0){
            if(!keyIsDown(17)){
                this.facing = "right";
            }
        }

        // Roll
        if(keyIsDown(16) && this.yAxis !== 0 || keyIsDown(16) && this.xAxis !== 0){
            this.roll = true;
        }
        else{
            this.roll = false;
        }

        if(this.roll == true){
            this.speed = canvas.width/50;
        }
        else{
            this.speed = canvas.width/100;
        }

        // Shoot
        if(keyIsDown(32) && frameCount % 5 === 0 && this.roll == false && gameState === "play"){
            var bullet = new Bullet(this.sprite.x,this.sprite.y+canvas.width/35,this.facing);
            sfx.shoot.play();
        }

        // Get Hurt
        if(this.sprite.isTouching(enemyGroup)){
            this.health -= 0.5;
            this.healthBar.shapeColor = "Red";
        }
        else{
            this.healthBar.shapeColor = "Green";
        }

        if(this.health <= 0.5){
            sfx.dieP.play();
            this.health = 100;
            this.alive = false;
            gameState = "end";
        }

        // Show Health Bar
        this.healthBar.width = round(this.health*canvas.width/200);

        // Define Animation Speed
        if(gameState === "play"){
            if(this.yAxis !== 0 && this.roll == false || this.xAxis !== 0 && this.roll == false){
                this.sprite.frameDelay = 3;
            }
            else if (this.yAxis !== 0 && this.roll == true || this.xAxis !== 0 && this.roll == true){
                this.sprite.frameDelay = 1;
            }
            else{
                this.sprite.frameDelay = 0;
            }
        }
        else if (gameState === "start"){
            this.sprite.frameDelay = 0;
        }
        else{
            this.sprite.frameDelay = 3;
        }

        // Limit player to map
        if(this.sprite.x > canvas.width){
            this.sprite.x = canvas.width;
        }
        else if(this.sprite.x < 0){
            this.sprite.x = 0;
        }

        if(this.sprite.y > canvas.height){
            this.sprite.y = canvas.height;
        }
        else if(this.sprite.y < 0){
            this.sprite.y = 0;
        }

        // Animate
        if(gameState === "play"){
            if(this.roll == false){
                if(this.facing === "right"){
                    this.sprite.changeAnimation("Right");
                }
                else if(this.facing === "left"){
                    this.sprite.changeAnimation("Left");
                }
                else if(this.facing === "up"){
                    this.sprite.changeAnimation("Up");
                }
                else if(this.facing === "down"){
                    this.sprite.changeAnimation("Down");
                }
            }
            else{
                if(this.facing === "right"){
                    this.sprite.changeAnimation("RollRight");
                }
                else if(this.facing === "left"){
                    this.sprite.changeAnimation("RollLeft");
                }
                else if(this.facing === "up"){
                    this.sprite.changeAnimation("RollUp");
                }
                else if(this.facing === "down"){
                    this.sprite.changeAnimation("RollDown");
                }
            }
        }
        else{
            this.sprite.changeAnimation("Die");
        }
    }

    reset(){
        this.sprite.addAnimation("Die", this.dieAnim);
        this.sprite.x = canvas.width/2;
        this.sprite.y = canvas.height/2;
        this.alive = true;
        this.health = 100;
        score = 0;
        gameState = "play";
    }
}