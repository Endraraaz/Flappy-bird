
draw = () => {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.draw();
    pipes.draw();
    foreground.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
    score.draw();
};

update = () => {
    foreground.update();
    bird.update();
    pipes.update();
};

loop = () => {
    update();
    draw();
    frames++;
    requestAnimationFrame(loop);
};
loop();