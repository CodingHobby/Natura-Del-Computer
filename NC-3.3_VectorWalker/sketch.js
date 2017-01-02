var w

function setup() {
  createCanvas(600, 600)
    // Creiamo un oggetto Walker
  w = new Walker()
}

function draw() {
  // Funzione del Walker
  background(51)
  w.step()
  w.display()
}