// Creazione di un veicolo
var vehicle

function setup() {
  createCanvas(640, 360)
  // Il veicolo inizia al punto (0; 0)
  vehicle = new Vehicle(0, 0)
}

function draw() {
  background(51)

  // Il bersaglio del veicolo è il mouse
  var target = createVector(mouseX, mouseY)
  // Rappresentazione grafica del bersaglio
  ellipse(target.x, target.y, 23, 23)

  // Esecuzione delle funzioni del veicolo
  vehicle.arrive(target)
  vehicle.update()
  vehicle.display()
}
