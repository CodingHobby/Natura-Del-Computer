// Classe Particle Object
function PO() {
  // Posizione della Particella
  this.pos = createVector(width / 2, height / 2)
    // Velocità della Particella
  this.vel = createVector(0, 0)
    // Accelerazione del Vettore
  this.acc = p5.Vector.fromAngle(random(TWO_PI))
    // Modifica del modulo del vettore
  this.acc.setMag(0.2)

  // Mostrare la Particella
  this.display = function () {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 48, 48)
  }

  // Aggiornare la posizione della Particella
  this.update = function () {
    this.acc.rotate(0.1)
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }
}