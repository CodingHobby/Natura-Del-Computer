// Funzione Particle
function Particle() {
  // Vettore per la Posizione
  this.pos = createVector(width / 2, 0)
    // Vettore per la Velocità
  this.vel = createVector(0, 0)
    // Vettore per l'Acc.
  this.acc = createVector(0, 0.7)

  // Funzione per mostrare la Particella
  this.display = function () {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 48, 48)
  }

  // Funzione per i casi in cui la particella tocca i bordi
  this.edges = function () {
    if (this.pos.y > height) {
      this.pos.y = height
      this.vel.y *= -0.9
    }
    if (this.pos.x > width) {
      this.pos.x = width
      this.vel.x *= -0.9
    }
  }

  // Funzione per aggiornare la posizione della particella
  this.update = function () {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }
}
