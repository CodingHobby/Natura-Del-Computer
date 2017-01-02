// Funzione Player
function Player() {
    // Vettore per la Posizione
    this.pos = createVector(width / 2, height / 2)

    this.score = 0
        // Vettore per l'Acc.
    this.acc = createVector(0, 0)

    this.games=0
    // Funzione per aggiornre la posizione del giocatore
    this.update = function () {
        this.pos.add(this.acc)
    }

    // Funzione per mostrare la poizione del giocatore
    this.show = function () {
        ellipse(this.pos.x, this.pos.y, 25, 25)
    }

    // Funzione per controllare se il giocatore mangia il cibo
    this.eats = function (food) {
        var d = dist(this.pos.x, this.pos.y, food.x, food.y)
        if (d < 9) {
            this.score++
            return true
        } else {
            return false
        }
    }

    // Funzione per i casi in cui il giocatore tocca i margini
    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0
        }
        if (this.pos.x < 0) {
            this.pos.x = width
        }
        if (this.pos.y > height) {
            this.pos.y = 0
        }
        if (this.pos.y < 0) {
            this.pos.y = height
        }
    }

    // Funzione per controllare se il giocatore è stato ucciso
    this.killed = function (obj) {
        var killd = dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y)
        if (killd < 25) {
            this.score=0
            this.games++
            return true
        } else return false
    }
}