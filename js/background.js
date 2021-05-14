// background picture
const background = {
    srcX: 0,
    srcY: 0,
    srcWidth: 275,
    srcHeight: 226,
    X: 0,
    Y: canvas.height - 226,
    
    draw: function() {
        ctx.drawImage(flappySprite, this.srcX, this.srcY, this.srcWidth, this.srcHeight, this.X, this.Y, this.srcWidth, this.srcHeight);
        ctx.drawImage(flappySprite, this.srcX, this.srcY, this.srcWidth, this.srcHeight, this.X + this.srcWidth, this.Y, this.srcWidth, this.srcHeight);
    }
};

// foreground picture
const foreground = {
    srcX: 276,
    srcY: 0,
    srcWidth: 224,
    srcHeight: 112,
    X: 0,
    Y: canvas.height - 112,
    dX: 2,

    draw: function() {
        ctx.drawImage(flappySprite, this.srcX, this.srcY, this.srcWidth, this.srcHeight, this.X, this.Y, this.srcWidth, this.srcHeight);
        ctx.drawImage(flappySprite, this.srcX, this.srcY, this.srcWidth, this.srcHeight, this.X + this.srcWidth, this.Y, this.srcWidth, this.srcHeight);
    },

    update : function(){
        if(state.current == state.game){
            this.X = (this.X - this.dX) % (this.srcWidth / 2);
        }
    }
};

