function Fluid(){
  this.pos=createVector(0, height/2)

  this.display=function(){
    fill(255, 255, 255, 90)
    rect(this.pos.x, this.pos.y, width, height)
  }

  this.hit=function(obj){
    if(obj.pos.y>this.pos.y){
      obj.vel.y*=0.5
      obj.acc.y+=0.07
    }
  }
}
