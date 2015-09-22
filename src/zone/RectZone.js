import Zone from '../Zone'

export default class RectZone extends Zone {
	constructor(x, y, width, height) {
		super()
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	/**
	 * @override
	 */
	getPosition() {
		this.vector.x = this.x + Math.random() * this.width
		this.vector.y = this.y + Math.random() * this.height
		return this.vector
	}

	/**
	 * @override
	 */
	crossing(particle) {
		var p = particle.p
		var v = particle.v
		var radius = particle.radius

		switch(this.crossType) {
		case 'dead':
			if (p.x + radius < this.x) {
				particle.dead = true
			} else if (p.x - radius > this.x + this.width) {
				particle.dead = true
			}

			if (p.y + radius < this.y) {
				particle.dead = true
			} else if (p.y - radius > this.y + this.height) {
				particle.dead = true
			}
			break
		case 'bound':
			if (p.x - radius < this.x) {
				p.x = this.x + radius
				v.x *= -1
			} else if (p.x + radius > this.x + this.width) {
				p.x = this.x + this.width - radius
				v.x *= -1
			}
			
			if (p.y - radius < this.y) {
				p.y = this.y + radius
				v.y *= -1
			} else if (p.y + radius > this.y + this.height) {
				p.y = this.y + this.height - radius
				v.y *= -1
			}
			break
		case 'cross':
			if (p.x + radius < this.x && v.x <= 0) {
				p.x = this.x + this.width + radius
			} else if (p.x - radius > this.x + this.width && v.x >= 0) {
				p.x = this.x - radius
			}

			if (p.y + radius < this.y && v.y <= 0) {
				p.y = this.y + this.height + radius
			} else if (p.y - radius > this.y + this.height && v.y >= 0) {
				p.y = this.y - radius
			}
			break
		}
	}
}
