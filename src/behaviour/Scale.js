import Behaviour from '../Behaviour'
import {setSpanValue} from '../util'

export default class Scale extends Behaviour {
	constructor(a, b, life, easing) {
		super(life, easing)
		this.reset(a, b)
	}

	/**
	 * @override
	 */
	reset(a = 1, b, life, easing) {
		this.same = (b == null || b == undefined)

		this.a = setSpanValue(a)
		this.b = setSpanValue(b)
		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	initialize(particle) {
		particle.transform.scaleA = this.a.getValue()
		particle.transform.oldRadius = particle.radius
		if (this.same)
			particle.transform.scaleB = particle.transform.scaleA
		else
			particle.transform.scaleB = this.b.getValue()
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		this._applyBehaviour(particle, time, index)

		particle.scale = particle.transform.scaleB + (particle.transform.scaleA - particle.transform.scaleB) * this.energy
		if (particle.scale < 0.0001)
			particle.scale = 0
		particle.radius = particle.transform.oldRadius * particle.scale
	}
}
