export default class ColorSpan {
	constructor(color) {
		this.colorArr = Array.isArray(color) ? color : [color]
	}

	getValue() {
		var idx = Math.floor(this.colorArr.length * Math.random())
		var color = this.colorArr[idx]

		if (color === 'random') {
			var c = Math.random() * 0x1000000 << 0
			return '#' + ('00000' + c.toString(16)).slice(-6)
		} else {
			return color
		}
	}
}
