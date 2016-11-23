//Costruttore con, come argomenti l'x, la y ed il raggio del cerchio
function Circle(x, y, r) {
  //Variabili di classe
  this.x=x;
  this.y=y;
  this.r=r;
  //Metodo di classe
  this.show=function() {
    ellipse(this.x, this.y, this.r, this.r);
  }
}
