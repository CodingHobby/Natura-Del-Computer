function Walker() {
  this.pos=createVector(width/2, 0);
  this.vel=createVector(0, 0);
  this.acc=createVector(0, 0.7);
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }

  this.edges=function(){
    if(this.pos.y>height){
      this.pos.y=height
      this.vel.mult(-0.9);
    }
  }
  this.update=function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
}
