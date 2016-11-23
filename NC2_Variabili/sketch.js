//Questo è il modo per dichiarare un Variabile Globale: Prima se ne dice il nome e poi si inizializza in Setup
var intero;
var floating;
var carattere;
var booleano;
var stringa;
function setup() {
  createCanvas(400, 400);
  //Variabile di Tipo Int
  intero=60;
  //Variabile di Tipo Floating Point
  floating=60.52;
  //Variabile di tipo Char
  carattere='C';
  //Variabile di tipo Boolean
  booleano=false;
  //Variabile di tipo String
  stringa="Ciao";
  //Stampiamo nella Console i Valori delle Variabili
  console.log(intero);
  console.log(floating);
  console.log(stringa);
  console.log(carattere);
  console.log(booleano);
}
function draw(){
  background(51);
}
