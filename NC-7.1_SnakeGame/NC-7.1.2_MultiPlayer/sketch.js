var s1
var s2
var scl = 20
var score1 = 0
var food

function setup() {
  // Creiamo un serpente
  createCanvas(600, 600)
  s1 = new Snake()
  s2 = new Snake()
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
  fill(255)

  // Se il giocatore mangia il cibo selezioniamo una nuove posizione per il cibo
  if (s1.eat(food)) {
    pickLocation()
  }
  if (s2.eat(food)) {
    pickLocation()
  }

  score1 = s1.total * 100
  s1.death()
  s1.update()
  s1.show()

  fill(0, 255, 0)
  score2 = s2.total * 100
  s2.death()
  s2.update()
  s2.show()
  fill(0, 255, 0)
  fill(255, 0, 100)
  rect(food.x, food.y, scl, scl)
  fill(255)
  text(score2, width-10, 20)
  text(score1, 10, 20)
}

// Controlli del giocatore
function keyPressed() {
  if ((keyCode === UP_ARROW) && (s1.yspeed != 1)) s1.dir(0, -01)
  else if ((keyCode === DOWN_ARROW) && (s1.yspeed != -1)) s1.dir(0, 1)
  else if ((keyCode === RIGHT_ARROW) && (s1.xspeed != -1)) s1.dir(1, 0)
  else if ((keyCode === LEFT_ARROW) && (s1.xspeed != 1)) s1.dir(-1, 0)

  if ((key === 'W') && (s2.yspeed != 1)) s2.dir(0, -0.1)
  else if ((key === 'S') && (s2.yspeed != -1)) s2.dir(0, 0.1)
  else if ((key === 'D') && (s2.xspeed != -1)) s2.dir(0.1, 0)
  else if ((key === 'A') && (s2.xspeed != 1)) s2.dir(-0.1, 0)
}
