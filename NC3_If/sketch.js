//Creazione di due variabili, X e Y
var x;
var y;
function setup() {
  createCanvas(400, 400);
  x=5;
  y=3;
}

function draw() {
  background(51);
  //Se x è maggiore di y
  if(x>y) {
    //Fai QUesto
    console.log("X è maggiore di Y");
    //Altrimenti (else) se y è maggiore di x
  } else if (y>x){
    //Fai Questo
    console.log("Y è maggiore di X");
    //Altrimenti (Per tutti i restanti casi)
  } else {
    //Fai Questo
    console.log("X e Y Sono Uguali");
  }
}
