var s
var scl = 20
var score = 0
var food

function setup() {
  // Creiamo un serpente
  createCanvas(600, 600)
  s = new Snake()
  frameRate(15)
  // Selezioniamoio un punto sulla griglia per il cibo
  pickLocation()

}

// Funzione per selezionare la posizione del cibo
function pickLocation() {

  // Creiamo una griglia
  var cols = floor(width / scl)
  var rows = floor(height / scl)
  // Creiamo un pezzo di cibo con posizione casuale
  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(scl)
}

function draw() {
  background(51)

  // Se il giocatore mangia il cibo selezioniamo una nuove posizione per il cibo
  if (s.eat(food)) {
    pickLocation()
    score += 100
  }

  if (s.total == 0) {
    score = 0
  }
  s.death()
  s.update()
  s.show()
  fill(255, 0, 100)
  rect(food.x, food.y, scl, scl)
  fill(255)
  text(score, 10, 20)
}

// Controlli del giocatore
function keyPressed() {
  if ((keyCode === UP_ARROW) && (s.yspeed != 1)) {
    s.dir(0, -1)
  } else if ((keyCode === DOWN_ARROW) && (s.yspeed != -1)) {
    s.dir(0, 1)
  } else if ((keyCode === RIGHT_ARROW) && (s.xspeed != -1)) {
    s.dir(1, 0)
  } else if ((keyCode === LEFT_ARROW) && (s.xspeed != 1)) {
    s.dir(-1, 0)
  }
}
