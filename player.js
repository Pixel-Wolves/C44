class Player{
    constructor(){
        this.sprite = createSprite(windowWidth/2,windowHeight/2);
        this.facing = "right";
        this.speed = 10;
        this.xAxis = 0;
        this.yAxis = 0;
        this.sprite.scale = windowWidth/1600;

        this.upAnim = loadAnimation("../sprites/player/Up1.png", "../sprites/player/Up2.png", "../sprites/player/Up3.png", "../sprites/player/Up4.png");
        this.downAnim = loadAnimation("../sprites/player/Down1.png", "../sprites/player/Down2.png", "../sprites/player/Down3.png", "../sprites/player/Down4.png");
        this.leftAnim = loadAnimation("../sprites/player/Left1.png", "../sprites/player/Left2.png", "../sprites/player/Left3.png", "../sprites/player/Left4.png");
        this.rightAnim = loadAnimation("../sprites/player/Right1.png", "../sprites/player/Right2.png", "../sprites/player/Right3.png", "../sprites/player/Right4.png");

        this.display();
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
            if(keyIsDown(18)){

            }
            else{
                this.facing = "up";
            }
        }
        if(this.yAxis > 0){
            if(keyIsDown(18)){

            }
            else{
                this.facing = "down";
            }
        }
        if(this.xAxis < 0){
            if(keyIsDown(18)){

            }
            else{
                this.facing = "left";
            }
        }
        if(this.xAxis > 0){
            if(keyIsDown(18)){

            }
            else{
                this.facing = "right";
            }
        }

        // Shoot
        if(keyIsDown(32) && frameCount % 5 === 0){
            var bullet = new Bullet(this.sprite.x,this.sprite.y,this.facing);
        }
    }
}