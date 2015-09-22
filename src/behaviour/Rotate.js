import Behaviour from '../Behaviour'
import {setSpanValue} from '../util'

export default class Rotate extends Behaviour {
	constructor(a, b, style, life, easing) {
		super(life, easing)
		this.reset(a, b, style)
	}

	/**
	 * @override
	 */
	reset(a = 'Velocity', b, style = 'to', life, easing) {
		this.same = (b == null || b == undefined)

		this.a = setSpanValue(a)
		this.b = setSpanValue(b || 0)
		this.style = style

		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	initialize(particle) {
		particle.rotation = this.a.getValue()
		particle.transform.rotationA = this.a.getValue()
		if (!this.same) {
			particle.transform.rotationB = this.b.getValue()
		}
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		this._applyBehaviour(particle, time, index)

		if (!this.same) {
			if (this.style == 'to' || this.style == 'TO' || this.style == '_') {
				var a = particle.transform.rotationA
				var b = particle.transform.rotationB
				particle.rotation += b + (a - b) * this.energy
			} else {
				particle.rotation += particle.transform.rotationB
			}
		} else if (this.a.a == "V" || this.a.a == "Velocity" || this.a.a == "v") {
			//beta...
			particle.rotation = particle.getDirection()
		}
	}
}
