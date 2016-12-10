//Questo codice sarà eseguito una sola volta all'inizio del programma
function setup() {
  //Questo codice crea un Canvas nella pagina HTML di 400X400 pixel
  createCanvas(400, 400)
}
function draw(){
  //Impostiamo lo sfondo
  background(51)
  //Disegnamo un ellisse sullo schermo. I Primi due parametri sono la x e la y del centro, gli altri due i due raggi.
  ellipse(width/2, height/2, 60, 60)
}
