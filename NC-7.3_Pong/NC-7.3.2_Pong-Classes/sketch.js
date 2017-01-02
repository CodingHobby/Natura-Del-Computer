// Punteggi
var score1 = score2 = 0
// Velocità dell'intelligenza Artificiale
var ais = 5
// Racchette
var p1
var p2
// Palla
var ball
// Canvas
var c
var cc

// Al Caricamento della pagina
window.onload = function () {
    // Canvas
    c = document.getElementById('gc')
    cc = c.getContext('2d')

    // Creazione degli oggetti Paddle e Ball
    p1 = new Paddle(0)
    p2 = new Paddle(c.width - 10)
    ball = new Ball()
    setInterval(update, 1000 / 30)

    // Event Listener
    c.addEventListener('mousemove', function (e) {
        p1.y = e.clientY - p1.ph / 2
    })
}

// Reset del Gioco
function reset() {
    ball.x = c.width / 2
    ball.y = c.height / 2
    ball.xv *= -1
    ball.yv = 5
}


// Funzione eseguita 30 volte al secondo
function update() {
    // Casi ai Bordi
    if (ball.x < 0) {
        // Se la racchetta colpisce la palla
        if (ball.y > p1.y && ball.y < p1.y + p1.ph) {
            ball.xv *= -1
            dy = ball.y - (p1.y + p1.ph / 2)
            ball.yv = dy
            // Altrimenti
        } else {
            score2++
            reset()
        }
    }

    if (ball.x > c.width) {
        if (ball.y > p2.y && ball.y < p2.y + p2.ph) {
            ball.xv *= -1
            dy = ball.y - (p2.y + p2.ph / 2)
            ball.yv = dy
        } else {
            score1++
            reset()
        }
    }



    // Controllo dell'avversario'
    if (p2.y + p2.ph / 2 > ball.y) {
        p2.y -= ais
    } else {
        p2.y += ais
    }

    // Disegniamo tutto e chimamo le funzioni della palla e delle palette
    cc.fillStyle = 'black'
    cc.fillRect(0, 0, c.width, c.height)
    p1.update()
    p2.update()
    ball.update(c)
    ball.show()
    cc.fillText(score1, 100, 100)
    cc.fillText(score2, c.width - 100, 100)
}