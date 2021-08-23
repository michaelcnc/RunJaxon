
var path;
var runner;
var leftWall,rightWall;
var pathImg;

function preload() {
  running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup() {
  createCanvas(400, 400);
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  leftWall= createSprite(10, 200, 20, 400);
  leftWall.visible = false;
  rightWall= createSprite(390, 200, 20, 400);
  rightWall.visible = false;

  runner = createSprite(200, 300, 100, 100);
  runner.addAnimation("running", running);
  runner.scale = 0.1;

  //adjust the depth
  path.depth = runner.depth;
  runner.depth = runner.depth + 1;

}

function draw() {
  background(0);
  if (path.y > 400) {
    path.y = 100;
  }
  // if(keyDown(LEFT_ARROW)) {
  //   runner.x = runner.x - 5;
  // }
  // if(keyDown(RIGHT_ARROW)) {
  //   runner.x = runner.x + 5;
  // }
  runner.x = mouseX;

  runner.collide(leftWall);
  runner.collide(rightWall);
  drawSprites();
}
