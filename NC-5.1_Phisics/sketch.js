var p

function setup() {
  createCanvas(600, 600)
  dir = 0
    // Oggetto Particle
  p = new Particle()
}

function draw() {
  background(51)
  // Richiamo alle funzioni di Particle
  p.update()
  p.display()
}