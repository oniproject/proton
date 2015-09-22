import {setSpanValue} from './util'
import ColorSpan from './math/ColorSpan'
import PointZone from './zone/PointZone'
import {MEASURE} from './Proton'
import Polar2D from './math/Polar2D'

export class Initialize {
	constructor() {}

	initialize(target) {}
	reset() {}

	init(emitter, particle) {
		if (particle) {
			this.initialize(particle)
		} else {
			this.initialize(emitter)
		}
	}
}

export class ImageTarget extends Initialize {
	constructor(image, w = 20, h = w) {
		super()
		this.image = this.setSpanValue(image)
		this.w = w
		this.h = h
	}

	initialize(particle) {
		var imagetarget = this.image.getValue()
		if (typeof (imagetarget) === 'string') {
			particle.target = {
				width: this.w,
				height: this.h,
				src: imagetarget
			}
		} else {
			particle.target = imagetarget
		}
	}

	setSpanValue(color) {
		if ( color instanceof ColorSpan) {
			return color
		} else {
			return new ColorSpan(color)
		}
	}
}

export class Life extends Initialize {
	constructor(a, b, c) {
		super()
		this.lifePan = setSpanValue(a, b, c)
	}

	initialize(target) {
		if (this.lifePan.a === Infinity)
			target.life = Infinity
		else
			target.life = this.lifePan.getValue()
	}
}

export class Mass extends Initialize {
	constructor(a, b, c) {
		super()
		this.massPan = setSpanValue(a, b, c)
	}

	initialize(target) {
		target.mass = this.massPan.getValue()
	}
}

export class Position extends Initialize {
	constructor(zone) {
		super()
		this.zone = zone || new PointZone()
	}

	reset(zone) {
		this.zone = zone || new PointZone()
	}

	initialize(target) {
		this.zone.getPosition()
		target.p.x = this.zone.vector.x
		target.p.y = this.zone.vector.y
	}
}

export class Radius extends Initialize {
	constructor(a, b, c) {
		super()
		this.radius = setSpanValue(a, b, c)
	}

	reset(a, b, c) {
		this.radius = setSpanValue(a, b, c)
	}

	initialize(particle) {
		particle.radius = this.radius.getValue()
		particle.transform.oldRadius = particle.radius
	}
}

/**
 * The number of particles per second emission (a [particle]/b [s])
 * @param {Array or Number or Span} numpan the number of each emission
 * @param {Array or Number or Span} timepan the time of each emission
 * for example: new Rate(new Span(10, 20), new Span(.1, .25))
 */
export class Rate extends Initialize {
	constructor(numpan = 1, timepan = 1) {
		super()
		this.numPan = numpan
		this.timePan = timepan

		this.numPan = setSpanValue(this.numPan)
		this.timePan = setSpanValue(this.timePan)
		this.startTime = 0
		this.nextTime = 0
		this.init()
	}

	init() {
		this.startTime = 0
		this.nextTime = this.timePan.getValue()
	}

	getValue(time) {
		this.startTime += time
		if (this.startTime >= this.nextTime) {
			this.startTime = 0
			this.nextTime = this.timePan.getValue()
			if (this.numPan.b == 1) {
				if (this.numPan.getValue(false) > 0.5)
					return 1
				else
					return 0
			} else {
				return this.numPan.getValue(true)
			}
		}
		return 0
	}
}

export class Velocity extends Initialize {
	//radius and tha
	constructor(rpan, thapan, type = 'vector') {
		super()
		this.rPan = setSpanValue(rpan)
		this.thaPan = setSpanValue(thapan)
		this.type = type
	}

	reset(rpan, thapan, type = 'vector') {
		this.rPan = setSpanValue(rpan)
		this.thaPan = setSpanValue(thapan)
		this.type = type
	}

	normalizeVelocity(vr) {
		return vr * MEASURE
	}

	initialize(target) {
		if (this.type == 'p' || this.type == 'P' || this.type == 'polar') {
			var r = this.normalizeVelocity(this.rPan.getValue())
			var tha = this.thaPan.getValue() * Math.PI / 180
			var polar2d = new Polar2D(r, tha)
			target.v.x = polar2d.getX()
			target.v.y = polar2d.getY()
		} else {
			target.v.x = this.normalizeVelocity(this.rPan.getValue())
			target.v.y = this.normalizeVelocity(this.thaPan.getValue())
		}
	}
}
