//Il Codice seguente è poco efficente. Come si può migliorare?
//Utilizzando un ciclo For:
//Creiamo un Array Vuoto
var array=[];
function setup() {
  createCanvas(400, 400);
  //Diamo un valore ai primi sei elementi dell'Array
  //Ecco un ciclo For: Il Primo parametro è un numero, che aumenta ogni volta che il ciclo si ripete
  //Il secondo parametro è la "condizione": il loop si ripeterà fintanto che i è minore della lunghezza del'array
  for(var i=0;i<6; i++) {
    array[i]=i;
  }
    //Stampiamo questi sei valori
  for(var i=0; i<array.length; i++){
    console.log(array[j]);
  }
}



function draw(){
  background(51);

}
