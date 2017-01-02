//Il Codice seguente è poco efficente. Come si può migliorare?
//Utilizzando un ciclo While:
//Creiamo un Array Vuoto
var array=[]
var i
var j
function setup() {
  createCanvas(400, 400)
  i=0
  j=0
  //Diamo un valore ai primi sei elementi dell'Array
  //Ecco un ciclo While: Ha un solo parametro, che è la condizione che deve essere vera affinchè questo si ripeta.
  while(i<6){
    array[i]=i
    i++
  }
    //Stampiamo questi sei valori
    while(j<array.length) {
      console.log(array[j])
      j++
    }
}
function draw(){
  background(51)
}
