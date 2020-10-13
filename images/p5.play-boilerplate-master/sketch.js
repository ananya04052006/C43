var hr, sc, mn;
var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");

  translate(200, 200);

  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  drawSprites();

  push();
  rotate(scAngle);
  stroke("white");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  stroke(255, 0, 255);
  point(0, 0);
  //fill("yellow");
  noFill();
  arc(0, 0, 300, 300, 0, scAngle);
  
}