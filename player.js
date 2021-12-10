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

        this.sprite.addAnimation("Up", this.upAnim);
        this.sprite.addAnimation("Down", this.downAnim);
        this.sprite.addAnimation("Left", this.leftAnim);
        this.sprite.addAnimation("Right", this.rightAnim);
    }

    display(){
        // Axis Y
        if(keyIsDown(UP_ARROW)){
            this.yAxis = -1;
        }
        else if (keyIsDown(DOWN_ARROW)){
            this.yAxis = 1;
        }
        else{
            this.yAxis = 0;
        }

        // Axis X
        if(keyIsDown(LEFT_ARROW)){
            this.xAxis = -1;
        }
        else if (keyIsDown(RIGHT_ARROW)){
            this.xAxis = 1;
        }
        else{
            this.xAxis = 0;
        }
        
        // Movement
        this.sprite.velocityX = this.xAxis * this.speed;
        this.sprite.velocityY = this.yAxis * this.speed;

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

        // Shoot
        if(keyIsDown(32) && frameCount % 10 === 0){
            var bullet = new Bullet(this.sprite.x,this.sprite.y+canvas.width/35,this.facing);
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
            this.health = 0.5;
        }

        // Show Health Bar
        this.healthBar.width = round(this.health*canvas.width/200);

        // Define Animation Speed
        if(this.yAxis !== 0 || this.xAxis !== 0){
            this.sprite.frameDelay = 3;
        }
        else{
            this.sprite.frameDelay = 0;
        }

        // Animate
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
}