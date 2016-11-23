function PO() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);
  this.acc=p5.Vector.fromAngle(random(TWO_PI));
  this.acc.setMag(0.2);

  this.display = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
  this.update = function() {
    this.acc.rotate(0.1);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
}