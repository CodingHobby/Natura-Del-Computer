var p

function setup() {
  createCanvas(600, 600)
  dir = 0
    // Oggetto Walker
  p = new Particle()
}

function draw() {
  background(51)
  p.update()
  p.display()
}