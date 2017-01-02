//Creiamo un Array Vuoto
var array = []

function setup() {
  createCanvas(400, 400)
  //Diamo un valore ai primi sei elementi dell'Array
  for (var i = 0; i < 5; i++) {
    array[i] = i
    //Stampiamo questi sei valori
    console.log(array[i])
  }
}
