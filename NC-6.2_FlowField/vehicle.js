// Funzione con quatro parametri: x, y, ms e mf
function Vehicle(x, y, ms, mf) {
  // Posizione del Veicolo
  this.pos = createVector(x, y)
  // Velocità del Veicolo
  this.vel = createVector(0, 0)
  // accelerazione del Veicolo
  this.acc = createVector(0, 0)
  // Variabile per la grandezza del veicolo
  this.r = 4

  // Velocità massima di movimento e di sterzo
  this.maxSpeed = ms || 4
  this.maxForce = mf || 0.2

  // Funzione per applicare la forza al veicolo
  this.applyForce = function(force) {
    this.acc.add(force)
  }

  // Funzione unica che contiene update, borders e display
  this.run = function() {
    this.update()
    this.borders()
    this.display()
  }

  // Funzione per seguire il flowfield, ha flow come argomento
  this.follow = function(flow) {
    // Percorso da seguire
    var desired = flow.lookup(this.pos)
    desired.mult(this.maxSpeed)

    // Il vettore necessario è la differenza fra due vettori:
    var steer = p5.Vector.sub(desired, this.vel)
    this.applyForce(steer)
  }

  // Funzione per agguirnare
  this.update = function() {
    // Sommiamo Velocità e accelerazione
    this.vel.add(this.acc)
    // Limitiamo la Velocità
    this.vel.limit(this.maxSpeed)
    // Sommiamo la posizione e la velocità
    this.pos.add(this.vel)
    // Resettiamo l'accelerazione
    this.acc.set(0, 0)
  }

  // Casi limite
  this.borders = function() {
    if (this.pos.x < -this.r)
      this.pos.x = width + this.r
    if (this.pos.y < -this.r)
      this.pos.y = height + this.r
    if (this.pos.x > width + this.r)
      this.pos.x = -this.r
    if (this.pos.y > height + this.r)
      this.pos.y = -this.r

  }

  // Funzione per mostrare il veicolo
  this.display = function() {
    var theta = this.vel.heading() + PI / 2
    fill(255, 150)
    stroke(177)
    strokeWeight(1)

    push()
    translate(this.pos.x, this.pos.y)
    rotate(theta)
    beginShape()
    vertex(0, -this.r * 2)
    vertex(-this.r, this.r * 2)
    vertex(this.r, this.r * 2)
    endShape(CLOSE)
    pop()
  }
}
