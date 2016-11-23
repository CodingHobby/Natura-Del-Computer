// Funzione con due parametri, x e y
function Vehicle(x, y) {

  // Posizione del veicolo
  this.pos = createVector(x, y)
  // Velocità del Veicolo
  this.vel = createVector(0, 0)
  // Accelerazione del veicolo
  this.acc = createVector(0, 0)

  // Variabile che utilizzeremo più tardi per determinare la dimensione del veicolo
  this.r = 5

  // Variabili per la massima velocità di movimento e di sterzo
  this.maxSpeed = 10
  this.maxForce = 0.2

  // Funzione per applicare una forza al veicolo
  this.applyForce = function(force) {
    this.acc.add(force)
  }

  // Funzione di Aggiornamento
  this.update = function() {
    // Sommiamo la velocità e l'accelerazione
    this.vel.add(this.acc)
    // Poniamo un limite alla velocità
    this.vel.limit(this.maxSpeed)
    // Sommiamo la posizione e la velocità
    this.pos.add(this.vel)
    // Resettiamo l'accelerazione
    this.acc.set(0, 0)
  }

  // Funzione per mostrare il veicolo
  this.display = function() {
    // Ruotazione del veicolo
    var theta = this.vel.heading() + PI / 2
    fill(255, 150)
    stroke(177)
    strokeWeight(1)

    // Push e Pop: Vedere: https://p5js.org/reference/#/p5/push, https://p5js.org/reference/#/p5/pop
    push()
    // Ci muoviamo alla posizione in cui dobbiamo disegnare il veicolo
    translate(this.pos.x, this.pos.y)
    // Ruotiamo dell'angolo del veicolo
    rotate(theta)

    // Iniziamo a disegnare il veicolo
    beginShape()
    // Diesegnamo il veicolo e chiudamo la forma
    vertex(0, -this.r * 2)
    vertex(-this.r, this.r * 2)
    vertex(this.r, this.r * 2)
    endShape(CLOSE)
    pop()
  }

  // Funzione per raggiungere il bersaglio
  this.arrive = function(target) {
    // Il vettore che connette il veicolo e il bersaglio
    var desired = p5.Vector.sub(target, this.pos)
    // Il modulo del vettore
    var d = desired.mag()

    // Utilizziamo due casi per gestire l'evento:

    // Uno per quando si è in prossimità del bersaglio
    if (d < 100) {
      // La velocità di movimento è proporzionale alla vicinanza
      var m = map(d, 0, 100, 0, this.maxSpeed)
      desired.setMag(m)
      // L'altro per quando si è distanti dal bersaglio
    } else {
      // Utilizziamo la velocità massima
      desired.setMag(this.maxSpeed)
    }
    // La variabile che ci serve è la differenza fra due vettori:
    var steering = p5.Vector.sub(desired, this.vel)
    // Imponiamo un limite
    steering.limit(this.maxForce)

    // Applichiamo la forza
    this.applyForce(steering)
  }
}
