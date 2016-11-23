// Funzione FlowField, ha come argomento la risoluzione
function FlowField(r) {
  this.resolution = r

  // Numero di colonne e di righe della griglia
  this.cols = width / this.resolution
  this.rows = height / this.resolution

  // Funzione per creare un array bi-dimensionale, ha come argomento la grandezza dell'array
  this.make2DArray = function(n) {
    var array = []
    for (var i = 0; i < n; i++) {
      array[i] = []
    }
    return array
  }

  this.field = this.make2DArray(this.cols)

  // Inizializziamo la griglia
  this.init = function() {
    // Settiamo il Seed per noise(): https://p5js.org/reference/#/p5/noiseSeed
    noiseSeed(Math.floor(random(10000)))
    var xoff = 0
    // Ciclo for annidato per crere i vettori del FlowField
    for (var i = 0; i < this.cols; i++) {
      var yoff = 0
      for (var j = 0; j < this.rows; j++) {
        // Angolo del vettore creato casualmente
        var theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI)
        this.field[i][j] = createVector(cos(theta), sin(theta))
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }

  // Inizializziamo l'oggetto
  this.init()

  // Funzione per mostrare il FlowField
  this.display = function() {
    for (var i = 0; i < this.cols; i++) {
      for (var j = 0; j < this.rows; j++) {
        drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 2)
      }
    }
  }

  // Funzione lookup, prende un'argomento: il veicolo
  this.lookup = function(lookup) {
    var column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols - 1))
    var row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows - 1))

    return this.field[column][row].copy()
  }

  // Funzione drawVector, necessaria per disgnare un vettore
  var drawVector = function(v, x, y, scayl) {
    push()
    var arrowsize = 4

    translate(x, y)
    stroke(200, 100)
    rotate(v.heading())
    var len = v.mag() * scayl
    line(0, 0, len, 0)
    pop()
  }
}
