class Enemy{
    constructor(){
        this.sprite = createSprite(0,0);
        this.health = 5;
        this.touchable = true;
        this.sprite.scale = canvas.width/1600;
        this.ableMove = true;
        this.sprite.depth = 0;
        this.speed = canvas.width/360;
        
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
            this.touchable = false;
        }
        else{
            this.touchable = true;
        }

        // Move
        if(this.ableMove == true){
            if(player.sprite.x > this.sprite.x){
                this.sprite.x += this.speed;
            }
            else{
                this.sprite.x -= this.speed;
            }
    
            if(player.sprite.y > this.sprite.y){
                this.sprite.y += this.speed;
            }
            else{
                this.sprite.y -= this.speed;
            }
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
            this.reset();
        }
    }

    reset(){
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

        this.health = 5;
    }
}