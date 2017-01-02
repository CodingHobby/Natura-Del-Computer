var w

function setup() {
  createCanvas(300, 300)
  // Creazione di un oggetto Walker
  w = new Walker()
}

function draw() {
  background(51)
  // Richiamo alle funzioni del walker
  w.step()
  w.show()
}
