class Enemy{
    constructor(){
        this.sprite = createSprite(0,0);
        
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
        console.log("Hello");
    }
}