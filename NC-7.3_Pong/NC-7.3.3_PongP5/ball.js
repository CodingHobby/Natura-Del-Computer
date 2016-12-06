// Funzione Ball
function Ball() {
    // Variabili di Classe
    this.x = this.y = 50
    this.xv = this.yv = 5
    this.bd = 5

    // Funzione per aggiornare la posizione
    this.update = function () {
        // Variabili di Classe
        this.x += this.xv
        this.y += this.yv
        // Rimbalzare contro i bordi
        if (this.y < 0) {
            this.y = 0
            this.yv *= -1
        }

        if (this.y > height) {
            this.y = height
            this.yv *= -1
        }
    }

    // Funzione per Mostrare la palla
    this.show = function () {
        rect(this.x - this.bd / 2, this.y - this.bd / 2, this.bd, this.bd)
    }
}