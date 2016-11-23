var po;

function setup() {
  createCanvas(600, 600);
  dir = 0;
  po = new PO();
}

function draw() {
  background(51);
  po.update();
  po.display();
}