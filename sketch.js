var track, trackImg;
var runner, running;
var invisbleWallLeft, invisbleWallRight

function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  
  running = loadAnimation("runner-1.png", "runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(trackImg);
  track.velocityY = 4;
  track.scale = 1.2;

  runner = createSprite(200,200,10,40);
  runner.addAnimation("running", running);
  runner.scale = 0.05;
}

function draw() {
  background(0);

  runner.x = mouseX;

runner.bounceOff(edge);
  if(track.y > 400){
    track.y = height/2;
  }

  createEdgeSprites();
  drawSprites();
}
