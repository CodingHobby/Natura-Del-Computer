var po

function setup() {
  createCanvas(600, 600)
    // Creazione del Particle Object
  po = new PO()
}

function draw() {
  background(51)
    // Funzioni del Particle Object
  po.update()
  po.display()
}