import Behaviour from '../Behaviour'

export default class GravityWell extends Behaviour {
	constructor(centerPoint, force = 1, life, easing) {
		super(life, easing)
		this.distanceVec = new Proton.Vector2D()
		this.centerPoint = centerPoint || new Proton.Vector2D
		this.force = this.normalizeValue(force)
	}

	/**
	 * @override
	 */
	reset(centerPoint, force, life, easing) {
		this.distanceVec = new Proton.Vector2D()
		this.centerPoint = centerPoint || new Proton.Vector2D
		this.force = this.normalizeValue(force)

		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	initialize(particle) {}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		this.distanceVec.set(this.centerPoint.x - particle.p.x, this.centerPoint.y - particle.p.y)
		var distanceSq = this.distanceVec.lengthSq()
		if (distanceSq != 0) {
			var distance = this.distanceVec.length()
			var factor = (this.force * time ) / (distanceSq * distance )
			particle.v.x += factor * this.distanceVec.x
			particle.v.y += factor * this.distanceVec.y
		}
	}
}
