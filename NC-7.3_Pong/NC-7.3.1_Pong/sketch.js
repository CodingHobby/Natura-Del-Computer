// Coordinate y dei giocatori
var p1y = p2y = 40
    // Spessore della racchetta
var pt = 10
    // Altezza della racchetta
var ph = 100

// Coordinate della Palla
var bx = by = 50
    // Velocità della Palla
var xv = yv = 5
    // Dimensione della Palla
var bd = 5
    // Punti dei Giocatori
var score1 = score2 = 0
    // Velocità dell'Intelligneza Artificiale
var ais = 5
    // Canvas
var c
var cc

// Una volta che i file sono pronti
window.onload = function () {
    // Canvas
    c = document.getElementById('gc')
    cc = c.getContext('2d')
    setInterval(update, 1000 / 30)

    // Evento in cui si muove il Mouse
    c.addEventListener('mousemove', function (e) {
        p1y = e.clientY - ph / 2
    })
}

// Funzione per quando qualcuno fa punto
function reset() {
    bx = c.width / 2
    by = c.height / 2
    xv *= -1
    yv = 5
}

// Funzione che si ripete 30 volte al secondo
function update() {
    // Aggiornamento della posizione della Palla
    bx += xv
    by += yv

    // Nel caso in cui tocchi i bordi dello Schermo
    if (by < 0 && yv < 0) {
        yv *= -1
    }

    if (by > c.height && yv > 0) {
        yv *= -1
    }

    // Se la palla è oltre la racchetta
    if (bx < 0) {
        // Se ha colpito la racchetta
        if (by > p1y && by < p1y + ph) {
            xv *= -1
            dy = by - (p1y + ph / 2)
            yv = dy
                // Altrimenti
        } else {
            score2++
            reset()
        }
    }

    if (bx > c.width) {
        if (by > p2y && by < p2y + ph) {
            xv *= -1
            dy = by - (p2y + ph / 2)
            yv = dy
        } else {
            score1++
            reset()
        }
    }


    // Moviment dell'avversario
    if (p2y + ph / 2 > by) {
        p2y -= ais
    } else {
        p2y += ais
    }

    // Disegniamo tutto
    cc.fillStyle = 'black'
    cc.fillRect(0, 0, c.width, c.height)
    cc.fillStyle = 'white'
    cc.fillRect(0, p1y, pt, ph)
    cc.fillRect(c.width - pt, p2y, pt, ph)
    cc.fillRect(bx - bd / 2, by - bd / 2, bd, bd)
    cc.fillText(score1, 100, 100)
    cc.fillText(score2, c.width - 100, 100)
}