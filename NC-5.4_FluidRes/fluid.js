// Funzione Fluid
function Fluid() {
  // Vettore per la posizione
  this.pos = createVector(0, height / 2)

  // Funzione per mostrare il fluido
  this.display = function () {
    fill(255, 255, 255, 90)
    rect(this.pos.x, this.pos.y, width, height)
  }

  // Funzione per quando il liquido è colpito da un oggetto
  this.hit = function (obj) {
    if (obj.pos.y > this.pos.y) {
      obj.vel.y *= 0.5
      obj.acc.y += 0.07
    }
  }
}
