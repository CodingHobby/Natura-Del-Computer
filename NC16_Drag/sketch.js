var w

function setup() {
  createCanvas(600, 400)
  dir = 0
  w = new Walker()
}

function draw() {
  background(51)
  w.update()
  w.edges()
  w.display()
}
