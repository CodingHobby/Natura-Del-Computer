// Funzione Paddle
// Il Parametro è la posizione x della racchetta
function Paddle(x) {
    // Variabili di classe
    this.x = x
    this.y = 40
    this.pt = 10
    this.ph = 100

    // Metodo Update
    this.update = function () {
        cc.fillStyle = 'white'
        cc.fillRect(this.x, this.y, this.pt, this.ph)
    }
}