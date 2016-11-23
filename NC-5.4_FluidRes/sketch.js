var w
var f

function setup() {
  createCanvas(600, 400)
  dir = 0
  w = new Walker()
  f=new Fluid()
}

function draw() {
  background(51)
  w.update()
  w.edges()
  w.display()
  f.display()
  f.hit(w)
}

function mousePressed(){
  var wind=createVector(1, 0)
  w.apply(wind)
}
