function preload(){
    setSprites();
    MarioAnimation();
}

function setup(){
    canvas = createCanvas(1240,356);
    canvas.parent("canvas");

    instializeInSetup(mario);
    
}
function draw(){
    game();
}