class Bullet{
    constructor(x,y,facing){
        this.x = x;
        this.y = y;
        this.facing = facing;
        this.launchV = 17;
        this.sprite = createSprite(this.x,this.y,25,25);
        this.sprite.scale = windowWidth/1600;

        // Bullet Direction
        if(this.facing === "up"){
            this.sprite.velocityY = this.launchV * -1;
        }
        else if (this.facing === "down"){
            this.sprite.velocityY = this.launchV;
        }
        if(this.facing === "left"){
            this.sprite.velocityX = this.launchV * -1;
        }
        else if (this.facing === "right"){
            this.sprite.velocityX = this.launchV;
        }

        this.sprite.lifetime = 300;
    }
}