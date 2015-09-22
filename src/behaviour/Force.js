import Behaviour from '../Behaviour'

export default class Force extends Behaviour {
	constructor(fx, fy, life, easing) {
		super(life, easing)
		this.force = this.normalizeForce(new Proton.Vector2D(fx, fy))
	}

	/**
	 * @override
	 */
	reset(fx, fy, life, easing) {
		this.force = this.normalizeForce(new Proton.Vector2D(fx, fy))
		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		this._applyBehaviour(particle, time, index)
		particle.a.add(this.force)
	}
}
