// Creiamo un array vuoto ed un indice
var ind;
var randomC = [];
// Variabile per controllare la rappresentazione grafica dell'array
var len;

function setup() {
  createCanvas(600, 300);

  // Popoliamo l'array con venti elementi uguali a zero
  for (var i = 0; i < 20; i++) {
    randomC[i] = 0;
  }
  len = width / randomC.length;
}

function draw() {
  background(250);
  stroke(255)
  fill(51);

  // Sorteggiamo un numero intero casuale
  ind = floor(random(randomC.length));
  //Aumentiamo di uno il valore dell'elemento dell'array corrispondente all'indice
  randomC[ind]++;
  for (var i = 0; i < randomC.length; i++) {
    // Disegnamo un rettangolo per rappresentare graficamente tutti i numeri estratti
    rect(i * len, height - randomC[i], len - 1, randomC[i]);
  }
}
