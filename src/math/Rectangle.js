export default class Rectangle {
	constructor(x, y, w, h) {
		this.x = x
		this.y = y
		this.width = w
		this.height = h
	}

	get top() { return this.y }
	get left() { return this.x }
	get bottom() { return this.y + this.height }
	get right() { return this.x + this.width }

	contains(x, y) {
		return x <= this.right && x >= this.x && y <= this.bottom && y >= this.y
	}
}
