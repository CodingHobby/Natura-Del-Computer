// Creiamo una classe Walker
function Walker() {

  // Inizializziamo X e Y
  this.x = width / 2
  this.y = height / 2

  // Funzione per far "Camminare" il Walker
  this.step = function() {
    this.dir = floor(random(4))
    if (this.dir == 0) {
      this.x++
    } else if (this.dir == 1) {
      this.x--
    } else if (this.dir == 2) {
      this.y++
    } else if (this.dir == 3) {
      this.y--
    }
  }

  // Funzione per disegnare il Walker sullo schermo
  this.show = function() {
    fill(255)
    ellipse(this.x, this.y, 10, 10)
  }
}
