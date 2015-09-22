import Behaviour from '../Behaviour'

export default class Collision extends Behaviour {
	//can use Collision(emitter,true,function(){}) or Collision()
	constructor(emitter, mass, callback, life, easing) {
		super(life, easing)
		this.reset(emitter, mass, callback)
	}

	/**
	 * @override
	 */
	reset(emitter = null, mass = true, callback = null, life, easing) {
		this.emitter = emitter
		this.mass = mass
		this.callback = callback

		this.collisionPool = []
		this.delta = new Proton.Vector2D()
		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		var newPool = this.emitter
			? this.emitter.particles.slice(index)
			: this.pool.slice(index)

		var otherParticle
		var averageMass1, averageMass2

		for (var i = 0, l = newPool.length; i < l; i++) {
			otherParticle = newPool[i]
			if (otherParticle !== particle) {
				this.delta.copy(otherParticle.p)
				this.delta.sub(particle.p)
				var lengthSq = this.delta.lengthSq()
				var distance = particle.radius + otherParticle.radius

				if (lengthSq <= distance * distance) {
					var overlap = distance - Math.sqrt(lengthSq)
					overlap += 0.5
					var totalMass = particle.mass + otherParticle.mass
					averageMass1 = this.mass
						? otherParticle.mass / totalMass
						: 0.5
					averageMass2 = this.mass
						? particle.mass / totalMass
						: 0.5
					particle.p.add(this.delta.clone().normalize().multiplyScalar(overlap * -averageMass1))
					otherParticle.p.add(this.delta.normalize().multiplyScalar(overlap * averageMass2))

					if (this.callback) {
						this.callback(particle, otherParticle)
					}
				}
			}
		}
	}
}
