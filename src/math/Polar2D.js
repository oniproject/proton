import Vector2D from './Vector2D'

export default class Polar2D {
	constructor(r = 0, tha = 0) {
		this.r = Math.abs(r)
		this.tha = tha
	}

	get x() { return this.r * Math.sin(this.tha) }
	get y() { return -this.r * Math.cos(this.tha) }

	getX() { return this.r * Math.sin(this.tha) }
	getY() { return -this.r * Math.cos(this.tha) }

	set(r, tha) {
		this.r = r
		this.tha = tha
		return this
	}
	setR(r) {
		this.r = r
		return this
	}
	setTha(tha) {
		this.tha = tha
		return this
	}

	copy(p) {
		this.r = p.r
		this.tha = p.tha
		return this
	}

	normalize() {
		this.r = 1
		return this
	}

	clear() {
		this.r = 0.0
		this.tha = 0.0
		return this
	}

	equals(v) {
		return (v.r === this.r) && (v.tha === this.tha)
	}

	clone() {
		return new Polar2D(this.r, this.tha)
	}

	toVector() { return new Vector2D(this.x, this.y) }
	toArray() { return [this.r, this.tha] }
}
