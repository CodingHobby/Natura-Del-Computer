function Player() {
    this.pos = createVector(width / 2, height / 2)
    this.acc = createVector(0, 0)

    this.update = function () {
        this.pos.add(this.acc)
    }

    this.show = function () {
        ellipse(this.pos.x, this.pos.y, 25, 25)
    }

    this.eats = function (food) {
        var d = dist(this.pos.x, this.pos.y, food.x, food.y)
        return (d < 5)
    }

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

    this.killed = function (obj) {
        var killd = dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y)
        return killd<25
    }
}