class Bullet{
    constructor(x,y,facing){
        this.x = x;
        this.y = y;
        this.facing = facing;
        this.launchV = canvas.width/60;
        this.sprite = createSprite(this.x,this.y,25,25);
        this.sprite.scale = canvas.width/1600;

        // Bullet Direction
        if(this.facing === "up"){
            this.sprite.velocityY = this.launchV * -1;
            this.sprite.depth = 0;
        }
        else if (this.facing === "down"){
            this.sprite.velocityY = this.launchV;
            this.sprite.depth = 10;
        }
        if(this.facing === "left"){
            this.sprite.velocityX = this.launchV * -1;
            this.sprite.depth = 0;
        }
        else if (this.facing === "right"){
            this.sprite.velocityX = this.launchV;
            this.sprite.depth = 0;
        }

        bulletGroup.add(this.sprite);
        this.sprite.lifetime = 300;
    }
}