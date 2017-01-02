var p
var f

function setup() {
  createCanvas(600, 400)
    // Oggetti per la Particella e per il Fluido
  p = new Particle()
  f = new Fluid()
}


function draw() {
  background(51)
    // Funzioni per Particella e Fluido
  p.update()
  p.edges()
  p.display()
  f.display()
    // Funzione per quando la particella colpisce il fluido
  f.hit(p)
}
