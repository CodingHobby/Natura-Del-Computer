var w

function setup() {
  createCanvas(300, 300)
  w = new Walker()
}

function draw() {
  background(51)
  w.step()
  w.show()
}
