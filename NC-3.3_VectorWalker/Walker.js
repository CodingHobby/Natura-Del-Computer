// Definizione della classe Walker
function Walker() {
  // Vettore per la posizione del walker
  this.pos = createVector(width / 2, height / 2)
    // Vettore per la velocità del Walker
  this.vel = createVector(random(-5, 5), random(-5, 5))

  // Mostrare i Walker
  this.display = function () {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 48, 48)
  }

  // Far 'Camminare' il Walker
  this.step = function () {
    // Creaiamo un vettore casuale
    this.vel = createVector(random(-5, 5), random(-5, 5))
      // Aggiungiamo la velocità alla posizione
    this.pos = this.pos.add(this.vel)
  }
}