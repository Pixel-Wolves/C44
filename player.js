class Player{
    constructor(){
        this.sprite = createSprite(windowWidth/2,windowHeight/2);
        this.facing = "right";
        this.speed = 10;
        this.xAxis = 0;
        this.yAxis = 0;
        this.sprite.scale = windowWidth/1600;
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
            this.facing = "up";
        }
        if(this.yAxis > 0){
            this.facing = "down";
        }
        if(this.xAxis < 0){
            this.facing = "left";
        }
        if(this.xAxis > 0){
            this.facing = "right";
        }

        // Shoot
        if(keyIsDown(32) && frameCount % 5 === 0){
            var bullet = new Bullet(this.sprite.x,this.sprite.y,this.facing);
        }
    }
}