function setup(){
  createCanvas(600, 400);
}

function draw() {
    background(51);
    lollipop(100, 100, 100);
    lollipop(300, 100, 100);

}

function lollipop(x, y, size) {
  fill(0, 200, 255);
  rect(x-10, y, 20, 150);

  fill(255, 0, 200);
  ellipse(x, y, size, size);
}
