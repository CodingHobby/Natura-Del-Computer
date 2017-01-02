// Funzione Ball
function Ball() {
    // Variabili di Classe
    this.x = this.y = 50
    this.xv = this.yv = 5
    this.bd = 5

    // Funzione Update, come argomento ha il canvas 
    this.update = function (c) {
        // Movimento della palla
        this.x += this.xv
        this.y += this.yv

        // Rimbalzare ai bordi
        if (this.y < 0) {
            this.y=0
            this.yv = -this.yv
        }

        if (this.y > c.height) {
            this.y=c.height
            this.yv = -this.yv
        }
    }

    // Funzione per disegnare la pala
    this.show = function () {
        cc.fillRect(this.x - this.bd / 2, this.y - this.bd / 2, this.bd, this.bd)
    }

}