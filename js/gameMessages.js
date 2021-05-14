// get ready message
const getReady = {
    sX : 0,
    sY : 228,
    w : 173,
    h : 152,
    x : canvas.width/2 - 173/2,
    y : 80,
    
    draw: function(){
        if(state.current == state.getReady){
            ctx.drawImage(flappySprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
    
}

// game over message
const gameOver = {
    sX : 175,
    sY : 228,
    w : 225,
    h : 202,
    x : canvas.width/2 - 225/2,
    y : 90,
    
    draw: function(){
        if(state.current == state.over){
            ctx.drawImage(flappySprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);   
        }
    }
    
}

