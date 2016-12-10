function Particle() {
  // Pos, Vel, Acc della particella
  this.pos = createVector(width / 2, 0)
  this.vel = createVector(0, 0)
  this.acc = createVector(0, 0.1)

  // Funzione per mostrare la particella
  this.display = function () {
    fill(255)
    ellipse(this.pos.x, this.pos.y, 48, 48)
  }

  // Funzione per aggioranre la posizione della particella
  this.update = function () {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }
}