// Classe Particle
function Particle() {
  // Vettore per la posizione
  this.pos = createVector(width / 2, 0)
  // Vettore per la velocità
  this.vel = createVector(0, 0)
  // Vettore per l'accellerazione
  this.acc = createVector(0, 0.7)

  // Funzione per mostrare la Particella
  this.display = function () {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 48, 48)
  }

  // Funzioni per i casi in cui la Particella si trova ai bordi dello schermo
  this.edges = function () {
    if (this.pos.y > height) {
      this.pos.y = height
      this.vel.y *= -0.9
    }
    if (this.pos.x > width) {
      this.pos.x = width
      this.vel.x *= -0.9
    }
    if (this.pos.x < 0) {
      this.pos.x = 0
      this.vel.x *= -0.9
    }
  }

  // Funzione per aggiornare la posizione della Particella
  this.update = function () {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }

  // Funzione per applicare una funzione all'oggetto
  this.apply = function (force) {
    this.acc.add(force)
  }
}
