var p

function setup() {
  createCanvas(600, 400)
    // Oggeto della Particella
  p = new Particle()
}

function draw() {
  background(51)
    // Funzioni della Particella
  p.update()
  p.edges()
  p.display()
}
