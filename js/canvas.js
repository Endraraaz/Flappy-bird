const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.height = 550;
canvas.width = 320;
let frames = 0;
const DEGREE = Math.PI/180;

const flappySprite = new Image();
flappySprite.src = "images/flappy_sprite.png";

// audios
const SCORE_S = new Audio();
SCORE_S.src = "audio/sfx_point.wav";

const FLAP = new Audio();
FLAP.src = "audio/sfx_flap.wav";

const HIT = new Audio();
HIT.src = "audio/sfx_hit.wav";

const SWOOSHING = new Audio();
SWOOSHING.src = "audio/sfx_swooshing.wav";

const DIE = new Audio();
DIE.src = "audio/sfx_die.wav";


const state = {
    current : 0,
    getReady : 0,
    game : 1,
    over : 2
}

// start button coordinates
const startBtn = {
    x : 120,
    y : 263,
    w : 83,
    h : 29
}


canvas.addEventListener("click", function(evt){
    switch(state.current){
        case state.getReady:
            state.current = state.game;
            SWOOSHING.play();
            break;
        case state.game:
            if(bird.y - bird.radius <= 0) return;
            bird.flap();
            FLAP.play();
            break;
        case state.over:
            let rect = canvas.getBoundingClientRect();
            let clickX = evt.clientX - rect.left;
            let clickY = evt.clientY - rect.top;
            
            // checks button click
            if(clickX >= startBtn.x && clickX <= startBtn.x + startBtn.w && clickY >= startBtn.y && clickY <= startBtn.y + startBtn.h){
                pipes.reset();
                bird.speedReset();
                score.reset();
                state.current = state.getReady;
            }
            break;
    }
});
