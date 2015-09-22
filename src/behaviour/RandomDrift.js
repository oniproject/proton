import Behaviour from '../Behaviour'
import {randomAToB} from '../util'

export default class RandomDrift extends Behaviour {
	constructor(driftX, driftY, delay, life, easing) {
		super(life, easing)
		this.reset(driftX, driftY, delay)
		this.time = 0
	}

	/**
	 * @override
	 */
	reset(driftX, driftY, delay, life, easing) {
		this.panFoce = new Proton.Vector2D(driftX, driftY)
		this.panFoce = this.normalizeForce(this.panFoce)
		this.delay = delay
		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		this._applyBehaviour(particle, time, index)
		this.time += time
		if (this.time >= this.delay) {
			var x = randomAToB(-this.panFoce.x, this.panFoce.x)
			var y = randomAToB(-this.panFoce.y, this.panFoce.y)
			particle.a.addXY(x, y)
			this.time = 0
		}
	}
}
