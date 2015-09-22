import Behaviour from '../Behaviour'
import {setSpanValue} from '../util'

export default class Alpha extends Behaviour {
	constructor(a, b, life, easing) {
		super(life, easing)
		this.reset(a, b)
	}

	/**
	 * @override
	 */
	reset(a = 1, b, life, easing) {
		this.same = (b === null || b === undefined)

		this.a = setSpanValue(a)
		this.b = setSpanValue(b)

		if(life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	initialize(particle) {
		particle.transform.alphaA = this.a.getValue()
		if (this.same) {
			particle.transform.alphaB = particle.transform.alphaA
		} else {
			particle.transform.alphaB = this.b.getValue()
		}
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		this._applyBehaviour(particle, time, index)
		var transform = particle.transform
		particle.alpha = transform.alphaB + (transform.alphaA - transform.alphaB) * this.energy
		if (particle.alpha < 0.001) {
			particle.alpha = 0
		}
	}
}
