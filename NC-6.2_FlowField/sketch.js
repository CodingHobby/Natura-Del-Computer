// Una variabile chiamata Debug, che determina se disegneremo o meno il flowfield
var debug = true

var flowfield
var vehicles = []

function setup() {
  createCanvas(640, 360)
    // FlowField con risoluzione 20
  flowfield = new FlowField(20)

  // Creiamo 120 Vecoli in un array
  for (var i = 0; i < 120; i++) {
    vehicles.push(new Vehicle(random(width), random(height), random(2, 5), random(0.1, 0.5)))
  }
}

function draw() {
  background(51)

  if (debug) {
    flowfield.display()
  }

  // Funzioni dei veicoli
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].follow(flowfield)
    vehicles[i].run()
  }
}

// Attiviamo e disattiviamo il debug
function keyPressed() {
  if (key == ' ')
    debug = !debug
}

// Generiamo un nuovo FlowField
function mousePressed() {
  flowfield.init()
}
