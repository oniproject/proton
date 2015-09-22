import {randomAToB} from '../util'

export default class Span {
	constructor(a = 1, b = a, center = false) {
		this.isArray = false

		if (Array.isArray(a)) {
			this.isArray = true
			this.a = a
		} else {
			this.a = a
			this.b = b
			this.center = center
		}
	}

	getValue(INT) {
		if (this.isArray) {
			return this.a[Math.floor(this.a.length * Math.random())]
		} else {
			if (!this.center) {
				return randomAToB(this.a, this.b, INT)
			} else {
				return randomAToB(this.a - this.b, this.a + this.b, INT)
			}
		}
	}
}
