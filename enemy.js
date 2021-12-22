class Enemy{
    constructor(){
        this.sprite = createSprite(0,0);
        this.health = 1000;
        this.touchable = true;
        this.sprite.scale = canvas.width/1600;
        this.ableMove = true;
        this.sprite.depth = 0;
        this.speed = canvas.width/360;
        this.range = canvas.width/400;

        this.leftAnim = loadAnimation("sprites/zombie/Left1.png", "sprites/zombie/Left2.png", "sprites/zombie/Left3.png", "sprites/zombie/Left4.png")
        this.rightAnim = loadAnimation("sprites/zombie/Right1.png", "sprites/zombie/Right2.png", "sprites/zombie/Right3.png", "sprites/zombie/Right4.png")
        
        this.sprite.addAnimation("Right", this.rightAnim);
        this.sprite.addAnimation("Left", this.leftAnim);

        var rand = round(random(1,4));

        switch(rand){
            case 1: this.sprite.x = -50; this.sprite.y = round(random(0,canvas.height));
                break;
            case 2: this.sprite.x = canvas.width + 50; this.sprite.y = round(random(0,canvas.height));
                break;
            case 3: this.sprite.y = -50; this.sprite.x = round(random(0,canvas.width));
                break;
            case 4: this.sprite.y = canvas.height + 50; this.sprite.x = round(random(0,canvas.width));
        }

        enemyGroup.add(this.sprite);
    }

    display(){
        // Harm
        if(this.sprite.isTouching(bulletGroup) && this.touchable == true){
            this.health -= 1;
            score += 1;
            this.touchable = false;
        }
        else{
            this.touchable = true;
        }

        // Move
        if(gameState === "play"){
            this.sprite.visible = true;
            if(this.ableMove == true){
                if(player.sprite.x > this.sprite.x + this.range){
                    this.sprite.x += this.speed;
                    this.sprite.changeAnimation("Right");
                }
                else if(player.sprite.x < this.sprite.x - this.range){
                    this.sprite.x -= this.speed;
                    this.sprite.changeAnimation("Left");
                }
        
                if(player.sprite.y > this.sprite.y + this.range){
                    this.sprite.y += this.speed;
                }
                else if(player.sprite.y < this.sprite.y - this.range){
                    this.sprite.y -= this.speed;
                }
            }
        }
        else{
            this.reset();
            this.sprite.visible = false;
        }

        // Stop
        if(this.sprite.isTouching(player.sprite)){
            this.ableMove = false;
        }
        else{
            this.ableMove = true;
        }

        // Die
        if(this.health <= 0){
            var body = new DeadEnemy(this.sprite.x, this.sprite.y);
            score += 100;
            sfx.dieZ.play();
            this.reset();
        }
    }

    reset(){
        var rand = round(random(1,4));
        
        switch(rand){
            case 1: this.sprite.x = -canvas.width/5; this.sprite.y = round(random(0,canvas.height));
                break;
            case 2: this.sprite.x = canvas.width + canvas.width/5; this.sprite.y = round(random(0,canvas.height));
                break;
            case 3: this.sprite.y = -canvas.height/5; this.sprite.x = round(random(0,canvas.width));
                break;
            case 4: this.sprite.y = canvas.height + canvas.height/5; this.sprite.x = round(random(0,canvas.width));
        }

        this.health = 10;
    }
}