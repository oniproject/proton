import Behaviour from '../Behaviour'
import ColorSpan from '../math/ColorSpan'
import {hexToRGB} from '../util'

export default class Color extends Behaviour {
	constructor(color1, color2, life, easing) {
		super(life, easing)
		this.reset(color1, color2)
	}

	/**
	 * @override
	 */
	reset(color1, color2, life, easing) {
		this.color1 = this.setSpanValue(color1)
		this.color2 = this.setSpanValue(color2)
		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	initialize(particle) {
		particle.color = this.color1.getValue()
		particle.transform.beginRGB = hexToRGB(particle.color)

		if (this.color2)
			particle.transform.endRGB = hexToRGB(this.color2.getValue())
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		if (this.color2) {
			this._applyBehaviour(particle, time, index)
			particle.transform.rgb.r = particle.transform.endRGB.r + (particle.transform.beginRGB.r - particle.transform.endRGB.r) * this.energy
			particle.transform.rgb.g = particle.transform.endRGB.g + (particle.transform.beginRGB.g - particle.transform.endRGB.g) * this.energy
			particle.transform.rgb.b = particle.transform.endRGB.b + (particle.transform.beginRGB.b - particle.transform.endRGB.b) * this.energy
			particle.transform.rgb.r = parseInt(particle.transform.rgb.r, 10)
			particle.transform.rgb.g = parseInt(particle.transform.rgb.g, 10)
			particle.transform.rgb.b = parseInt(particle.transform.rgb.b, 10)
		} else {
			particle.transform.rgb.r = particle.transform.beginRGB.r
			particle.transform.rgb.g = particle.transform.beginRGB.g
			particle.transform.rgb.b = particle.transform.beginRGB.b
		}
	}

	setSpanValue(color) {
		if (color) {
			if ( color instanceof ColorSpan) {
				return color
			} else {
				return new ColorSpan(color)
			}
		} else {
			return null
		}
	}
}
