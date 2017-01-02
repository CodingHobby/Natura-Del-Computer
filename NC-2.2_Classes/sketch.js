//Creazione di una Variabile di tipo Circle
var circle
function setup() {
    createCanvas(400, 400)
    //Inizializzazione della variabile
    circle=new Circle(60, 60, 60)
}

function draw() {
  background(51)
  //Richiamo alla funzione show()
  circle.show()
}
