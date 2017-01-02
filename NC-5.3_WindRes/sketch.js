var p
var wind = false

function setup() {
  createCanvas(600, 400)
  dir = 0
  p = new Particle()
}

function draw() {
  background(51)
  p.update()
  p.edges()
  p.display()
}

// Applichiamo la forza del vento
function mousePressed() {
  var windF = createVector(1, 0)

  if (wind == true) {
    p.acc.x = 0
    wind = false
  } else {
    p.apply(windF)
    wind = true
  }
}
