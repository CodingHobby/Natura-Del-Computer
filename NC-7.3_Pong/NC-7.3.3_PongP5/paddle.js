function Paddle(x){
    this.x=x
    this.y=40
    this.pt=10
    this.ph=100

    this.show=function(){
        rect(this.x, this.y, this.pt, this.ph)
    }
}