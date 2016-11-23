var w;

function setup() {
  createCanvas(600, 600);
  dir = 0;
  w = new Walker();
}

function draw() {
  background(51);
  w.update();
  w.display();
}