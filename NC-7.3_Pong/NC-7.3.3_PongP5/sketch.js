// Punteggi
var score1 = score2 = 0
// Velocità AI
var ais = 5

// Racchette e Palla
var p1
var p2
var ball

function setup() {
	createCanvas(800, 600);
	// Creazione di Racchette e Palla
	p1 = new Paddle(0)
	p2 = new Paddle(width - 10)
	ball = new Ball()
}

function draw() {
	background(51)
	fill(255)
	// Casi Limite
	if (ball.x < 0) {
		if (ball.y > p1.y && ball.y < p1.y + p1.ph) {
			ball.xv *= -1
			dy = ball.y - (p1.y + p1.ph / 2)
			ball.vy = dy
		} else {
			score2++
			reset()
		}
	}

	if (ball.x > width) {
		if (ball.y > p2.y && ball.y < p2.y + p2.ph) {
			ball.xv *= -1
			dy = ball.y - (p2.y + p2.ph / 2)
			ball.yv = dy
		} else {
			score1++
			reset()
		}
	}

	// Controllo dell'AI
	if (p2.y + p2.ph / 2 > ball.y) {
		p2.y -= ais
	} else {
		p2.y += ais
	}


	// Movimento del Giocatore
	p1.y = mouseY - p1.ph / 2
	// Funzioni di Racchette e palla
	p1.show()
	p2.show()
	ball.update()
	ball.show()
	// Mostrare i punteggi
	text(score1, 100, 100)
	text(score2, width - 100, 100)
}

// Reset
function reset() {
	ball.x = width / 2
	ball.y = height / 2
	ball.xv *= -1
	ball.yv = 5
}
