function Snake() {

  // Variabili per la posizione del giocatore
  this.x = 0;
  this.y = 0;

  // Variabili per la velocità del giocatore
  this.xspeed = 1;
  this.yspeed = 0;

  // Dimensione del giocatore
  this.total = 0;

  // Coda del serpente
  this.tail = [];

  // Funzione per mangiare il cibo
  this.eat = function (pos) {
    // Distanza fra giocatore e cibo
    var d = dist(this.x, this.y, pos.x, pos.y);

    // Se il giocatore mangia il cibo:
    if (d < 1) {
      this.total++;
      return true;
      // Altrimenti:
    } else {
      return false;
    }
  }

  // Funzione per cambiare la direzione del giocatore
  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  // Controllare se il giocatore è morto
  this.death = function () {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        // Eliminare la coda del serpente
        this.total = 0;
        this.tail = [];
      }
    }
  }

  // Funzione per aggiornare la posizione del serpente
  this.update = function () {
    if (this.total === this.tail.length) {
      // Muoviamo tutti gli elementi della coda avanti di un "posto"
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    // Muoviamo il serpente
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    // Limitiamo il valore della x e y del giocatore
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  // Funzione per mostrare il giocatore
  this.show = function () {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}
