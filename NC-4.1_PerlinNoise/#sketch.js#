var xoff;
var yoff;
function setup() {
  createCanvas(640, 460);
  xoff=0;
  yoff=0;
}

function draw() {
  background(51);
  var x = noise(xoff) * width;
  var y = noise(yoff) * height;
  fill(255);
  ellipse(x, y, 48, 48);
  xoff+=0.01;
  yoff+=0.02;
}