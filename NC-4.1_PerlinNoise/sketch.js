// Variabili Xoff e Yoff
var xoff
var yoff

function setup() {
  createCanvas(640, 460)
  xoff = 0
  yoff = 0
}

function draw() {
  background(51)

  // Utilizzo del Perlin Noise
  var x = noise(xoff) * width
  var y = noise(yoff) * height
  fill(255)
  ellipse(x, y, 48, 48)
    // Modificazione dell'oggetto della funzione Noise
  xoff += 0.01
  yoff += 0.02
}