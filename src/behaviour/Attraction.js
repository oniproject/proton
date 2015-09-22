import Behaviour from '../Behaviour'

export default class Attraction extends Behaviour {
	constructor(targetPosition, force = 1, radius = 1000, life, easing) {
		super(life, easing)

		this.targetPosition = targetPosition || new Proton.Vector2D
		this.force = this.normalizeValue(force)
		this.radius = radius

		this.radiusSq = this.radius * this.radius
		this.attractionForce = new Proton.Vector2D()
		this.lengthSq = 0
	}

	/**
	 * @override
	 */
	reset(targetPosition, force = 1, radius = 1000, life, easing) {
		this.targetPosition = targetPosition || new Proton.Vector2D
		this.force = this.normalizeValue(force)
		this.radius = radius

		this.radiusSq = this.radius * this.radius
		this.attractionForce = new Proton.Vector2D()
		this.lengthSq = 0
		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		this._applyBehaviour(particle, time, index)

		this.attractionForce.copy(this.targetPosition)
		this.attractionForce.sub(particle.p)

		this.lengthSq = this.attractionForce.lengthSq()
		if (this.lengthSq > 0.000004 && this.lengthSq < this.radiusSq) {
			this.attractionForce.normalize()
			this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq)
			this.attractionForce.multiplyScalar(this.force)
			particle.a.add(this.attractionForce)
		}
	}
}
