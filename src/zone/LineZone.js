import Zone from '../Zone'

export default class LineZone extends Zone {
	constructor(x1, y1, x2, y2, direction = '>') {
		super()
		if (x2 - x1 >= 0) {
			this.x1 = x1
			this.y1 = y1
			this.x2 = x2
			this.y2 = y2
		} else {
			this.x1 = x2
			this.y1 = y2
			this.x2 = x1
			this.y2 = y1
		}
		this.dx = this.x2 - this.x1
		this.dy = this.y2 - this.y1
		this.minx = Math.min(this.x1, this.x2)
		this.miny = Math.min(this.y1, this.y2)
		this.maxx = Math.max(this.x1, this.x2)
		this.maxy = Math.max(this.y1, this.y2)
		this.dot = this.x2 * this.y1 - this.x1 * this.y2
		this.xxyy = this.dx * this.dx + this.dy * this.dy
		this.gradient = this.getGradient()
		this.length = this.getLength()

		this.direction = direction
	}

	/**
	 * @override
	 */
	getPosition() {
		this.random = Math.random()
		this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient)
		this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient)
		return this.vector
	}

	getDirection(x, y) {
		var A = this.dy
		var B = -this.dx
		var C = this.dot
		var D = B == 0 ? 1 : B
		if ((A * x + B * y + C) * D > 0)
			return true
		else
			return false
	}

	getDistance(x, y) {
		var A = this.dy
		var B = -this.dx
		var C = this.dot
		var D = (A * x + B * y + C)
		return D / Math.sqrt(this.xxyy)
	}

	getSymmetric(v) {
		var tha2 = v.getGradient()
		var tha1 = this.getGradient()
		var tha = 2 * (tha1 - tha2)
		var oldx = v.x
		var oldy = v.y
		v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha)
		v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha)
		return v
	}

	getGradient() {
		return Math.atan2(this.dy, this.dx)
	}

	getRange(particle, fun) {
		var angle = Math.abs(this.getGradient())
		if (angle <= Math.PI / 4) {
			if (particle.p.x < this.maxx && particle.p.x > this.minx) {
				fun()
			}
		} else {
			if (particle.p.y < this.maxy && particle.p.y > this.miny) {
				fun()
			}
		}
	}

	getLength() {
		return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
	}

	/**
	 * @override
	 */
	crossing(particle) {
		var self = this
		if (this.crossType == 'dead') {
			if (this.direction == '>' || this.direction == 'R' || this.direction == 'right' || this.direction == 'down') {
				this.getRange(particle, function() {
					if (self.getDirection(particle.p.x, particle.p.y))
						particle.dead = true
				})
			} else {
				this.getRange(particle, function() {
					if (!self.getDirection(particle.p.x, particle.p.y))
						particle.dead = true
				})
			}
		} else if (this.crossType == 'bound') {
			this.getRange(particle, function() {
				if (self.getDistance(particle.p.x, particle.p.y) <= particle.radius) {
					if (self.dx == 0) {
						particle.v.x *= -1
					} else if (self.dy == 0) {
						particle.v.y *= -1
					} else {
						self.getSymmetric(particle.v)
					}
				}
			})
		} else if (this.crossType == 'cross') {
			if (this.alert) {
				alert('Sorry lineZone does not support cross method')
				this.alert = false
			}
		}
	}
}
