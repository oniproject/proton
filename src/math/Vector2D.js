// @author mrdoob / http://mrdoob.com/

export default class Vector2D {
	constructor(x = 0, y = 0) {
		this.x = x
		this.y = y
	}

	set(x, y) {
		this.x = x
		this.y = y
		return this
	}
	setX(x) {
		this.x = x
		return this
	}
	setY(y) {
		this.y = y
		return this
	}

	setComponent(index, value) {
		switch (index) {
			case 0:
				return this.x = value
			case 1:
				return this.y = value
		}
		throw new Error('index is out of range: ' + index)
	}
	getGradient() {
		if (this.x != 0)
			return Math.atan2(this.y, this.x)
		else if (this.y > 0)
			return Math.PI / 2
		else if (this.y < 0)
			return -Math.PI / 2
	}
	getComponent(index) {
		switch (index) {
			case 0:
				return this.x
			case 1:
				return this.y
		}
		throw new Error('index is out of range: ' + index)
	}

	copy(v) {
		this.x = v.x
		this.y = v.y
		return this
	}

	add(v, w) {
		if (w !== undefined) {
			return this.addVectors(v, w)
		}
		this.x += v.x
		this.y += v.y
		return this
	}
	addXY(a, b) {
		this.x += a
		this.y += b
		return this
	}
	addVectors(a, b) {
		this.x = a.x + b.x
		this.y = a.y + b.y
		return this
	}
	addScalar(s) {
		this.x += s
		this.y += s
		return this
	}
	sub(v, w) {
		if (w !== undefined) {
			return this.subVectors(v, w)
		}
		this.x -= v.x
		this.y -= v.y
		return this
	}
	subVectors(a, b) {
		this.x = a.x - b.x
		this.y = a.y - b.y
		return this
	}
	multiplyScalar(s) {
		this.x *= s
		this.y *= s
		return this
	}
	divideScalar(s) {
		if (s !== 0) {
			this.x /= s
			this.y /= s
		} else {
			this.set(0, 0)
		}
		return this
	}

	min(v) {
		if (this.x > v.x) {
			this.x = v.x
		}
		if (this.y > v.y) {
			this.y = v.y
		}
		return this
	}
	max(v) {
		if (this.x < v.x) {
			this.x = v.x
		}
		if (this.y < v.y) {
			this.y = v.y
		}
		return this
	}

	clamp(min, max) {
		// This function assumes min < max, if this assumption isn't true it will not operate correctly
		if (this.x < min.x) {
			this.x = min.x
		} else if (this.x > max.x) {
			this.x = max.x
		}
		if (this.y < min.y) {
			this.y = min.y
		} else if (this.y > max.y) {
			this.y = max.y
		}
		return this
	}
	negate() {
		return this.multiplyScalar(-1)
	}
	dot(v) {
		return this.x * v.x + this.y * v.y
	}

	lengthSq() {
		return this.x * this.x + this.y * this.y
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y)
	}
	setLength(l) {
		var oldLength = this.length()
		if (oldLength !== 0 && l !== oldLength) {
			this.multiplyScalar(l / oldLength)
		}
	}

	normalize() {
		return this.divideScalar(this.length())
	}
	distanceTo(v) {
		return Math.sqrt(this.distanceToSquared(v))
	}
	rotate(tha) {
		var x = this.x
		var y = this.y
		this.x = x * Math.cos(tha) + y * Math.sin(tha)
		this.y = -x * Math.sin(tha) + y * Math.cos(tha)
		return this
	}
	distanceToSquared(v) {
		var dx = this.x - v.x, dy = this.y - v.y
		return dx * dx + dy * dy
	}
	lerp(v, alpha) {
		this.x += (v.x - this.x ) * alpha
		this.y += (v.y - this.y ) * alpha
		return this
	}

	equals(v) {
		return ((v.x === this.x ) && (v.y === this.y ) )
	}

	toArray() {
		return [this.x, this.y]
	}

	clear() {
		this.x = 0.0
		this.y = 0.0
		return this
	}

	clone() {
		return new Vector2D(this.x, this.y)
	}
}
