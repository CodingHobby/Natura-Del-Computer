// Creiamo variabili X e Y per la posizione del Walker
var x
var y

// Creiamo una variabile per contenere un numero casuale indicativo della direzione di movimento
var dir

function setup() {
  createCanvas(600, 400)
  background(250)

  // Iniziamo al centro dello Schermo
  x = width / 2
  y = height / 2

  // Inizialmente uguale a zero
  dir = 0
}

function draw() {

  // Estraiamo un numero casuale per la direzione
  dir = floor(random(4))

  // Movimento del Walker
  if (dir == 0) {
    x++
  } else if (dir == 1) {
    y++
  } else if (dir == 2) {
    x--
  } else if (dir == 3) {
    y--
  }

  // Disegnamo un'ellisse bianca alla posizione (x y)
  fill(0)
  ellipse(x, y, 5, 5)
}
