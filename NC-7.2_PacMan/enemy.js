function Enemy() {
    this.xoff = 0
    this.yoff = 0
    this.pos = createVector(random(width), random(height))
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)

    this.maxSpeed = random(5)
    this.maxForce = random(0.2)

    this.applyForce = function (force) {
        this.acc.add(force)
    }

    this.update = function () {
        // this.pos.x=noise(this.xoff)*width
        // this.pos.y=noise(this.yoff)*height
        // this.xoff+=0.01
        // this.yoff+=0.02
        this.vel.add(this.acc)
        this.vel.limit(this.maxSpeed)
        this.pos.add(this.vel)
        this.acc.set(0, 0)
    }

    this.show = function () {
        fill(255, 0, 0)
        ellipse(this.pos.x, this.pos.y, 50, 50)
    }

    this.chase = function (target) {
        var desired = p5.Vector.sub(target.pos, this.pos)

        var d = desired.mag()

        if (d < 100) {
            var m = map(d, 0, 100, 0, this.maxSpeed)
            desired.setMag(m)
        } else {
            desired.setMag(this.maxSpeed)
        }

        var steering = p5.Vector.sub(desired, this.vel)

        steering.limit(this.maxForce)

        this.applyForce(steering)
    }

}