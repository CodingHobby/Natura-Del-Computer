function setup() {
  createCanvas(600, 400)
}

function draw() {
  background(51)
    // Chiamiamo una funzione esistente
  lollipop(100, 100, 100)
  lollipop(300, 100, 100)

}

// Creaiamo una funzione Lollipop
function lollipop(x, y, size) {
  fill(0, 200, 255)

  // Disegnamo un rettangolo
  rect(x - 10, y, 20, 150)

  // Disegnamo un ellisse
  fill(255, 0, 200)
  ellipse(x, y, size, size)
}
