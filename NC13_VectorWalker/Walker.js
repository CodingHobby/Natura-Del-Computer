function Walker() {
  this.pos=createVector(width/2, height/2);
  this.vel=createVector(random(-5, 5), random(-5, 5));
  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
  this.step = function() {
    this.vel=createVector(random(-5, 5), random(-5, 5));
    this.pos=this.pos.add(this.vel);
  }
}