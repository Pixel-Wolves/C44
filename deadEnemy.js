class DeadEnemy{
    constructor(x,y){
        this.sprite = createSprite(x,y);

        this.anim = loadAnimation("sprites/zombie/Die1.png", "sprites/zombie/Die2.png", "sprites/zombie/Die3.png", "sprites/zombie/Die4.png", "sprites/zombie/Die5.png", "sprites/zombie/Die6.png")
        this.anim.looping = false;
        this.sprite.addAnimation("Main", this.anim);

        this.sprite.scale = canvas.width/1600;
        this.sprite.depth = 0;
        this.sprite.lifetime = 60;
    }
}