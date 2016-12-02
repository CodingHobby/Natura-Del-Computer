var player
var food
var enemies = []
var score = 0

function setup() {
	createCanvas(600, 600);
	player = new Player()
	food = createVector(floor(random(width)), floor(random(height)))
	for (var i = 0; i < 10; i++) {
		enemies[i] = new Enemy()
	}
}

function draw() {
	background(51)
	fill(255)
	noStroke()
	player.edges()
	player.update()
	player.show()
	if (player.eats(food)) {
		console.log('eat')
		food = createVector(floor(random(width)), floor(random(height)))
		score += 10
	}
	ellipse(food.x, food.y, 10, 10)

	for (var i = 0; i < enemies.length; i++) {
		enemies[i].chase(player)
		enemies[i].update()
		enemies[i].show()
	}
	for (var i = 0; i < enemies.length; i++) {
		if (player.killed(enemies[i])) {
			console.log('killed')
			score = 0
			player.pos = createVector(width / 2, height / 2)
			for (var j = 0; j < enemies.length; j++) {
				enemies[j] = new Enemy()
				player.acc = createVector(0, 0)
			}
		}
	}
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		player.acc = createVector(0, 0)
		player.acc.y -= 3
	} else if (keyCode == DOWN_ARROW) {
		player.acc = createVector(0, 0)
		player.acc.y += 3
	} else if (keyCode == RIGHT_ARROW) {
		player.acc = createVector(0, 0)
		player.acc.x += 3
	} else if (keyCode == LEFT_ARROW) {
		player.acc = createVector(0, 0)
		player.acc.x -= 3
	}
}