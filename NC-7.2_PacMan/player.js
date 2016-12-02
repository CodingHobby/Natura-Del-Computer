function Player(){
    this.pos=createVector(width/2, height/2)
    this.speed=createVector(0, 0)

    this.update=function(){
        this.pos.add(this.speed)
    }

    this.show=function(){
        ellips(this.pos.x, this.pos.y, 25, 25)
    }
}