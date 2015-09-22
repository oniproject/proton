import EventEmitter from 'eventemitter3'

import ParticlePool from './ParticlePool'

//the max particle number in pool
export var POOL_MAX = 1000
export var TIME_STEP = 60
//1:100
export var MEASURE = 100
export var EULER = 'euler'
export var RK2 = 'runge-kutta2'
export var RK4 = 'runge-kutta4'
export var VERLET = 'verlet'

export var PARTICLE_CREATED = 'partilcleCreated'
export var PARTICLE_UPDATE = 'partilcleUpdate'
export var PARTICLE_SLEEP = 'particleSleep'
export var PARTICLE_DEAD = 'partilcleDead'

export var PROTON_UPDATE = 'protonUpdate'
export var PROTON_UPDATE_AFTER = 'protonUpdateAfter'

export var EMITTER_ADDED = 'emitterAdded'
export var EMITTER_REMOVED = 'emitterRemoved'

export var amendChangeTabsBug = true
export var TextureBuffer = {}
export var TextureCanvasBuffer = {}

export var pool = null
export var integrator = null


//数值积分
class NumericalIntegration {
	constructor(type = Proton.EULER) {
		this.type = type
	}

	integrate(particles, time, damping) {
		this.eulerIntegrate(particles, time, damping)
	}

	eulerIntegrate(particle, time, damping) {
		if (!particle.sleep) {
			particle.old.p.copy(particle.p)
			particle.old.v.copy(particle.v)
			particle.a.multiplyScalar(1 / particle.mass)
			particle.v.add(particle.a.multiplyScalar(time))
			particle.p.add(particle.old.v.multiplyScalar(time))
			if (damping) {
				particle.v.multiplyScalar(damping)
			}
			particle.a.clear()
		}
	}
}


/**
 * Proton is a html5 particle engine
 */
export class Proton extends EventEmitter {
	constructor(proParticleCount = POOL_MAX, integrationType = EULER) {
		super()

		this.proParticleCount = proParticleCount
		this.integrationType = integrationType

		this.emitters = []
		this.renderers = []
		this.time = 0
		this.oldTime = 0

		pool = new ParticlePool(this.proParticleCount)
		integrator = new NumericalIntegration(this.integrationType)
	}

	/**
	 * add a type of Renderer
	 *
	 * @param {Renderer} render
	 */
	addRender(render) {
		render.proton = this
		this.renderers.push(render.proton)
	}

	/**
	 * add the Emitter
	 *
	 * @param {Emitter} emitter
	 */
	addEmitter(emitter) {
		this.emitters.push(emitter)
		emitter.parent = this

		this.emit(EMITTER_ADDED, emitter)
	}

	removeEmitter(emitter) {
		var index = this.emitters.indexOf(emitter)
		this.emitters.splice(index, 1)
		emitter.parent = null

		this.emit(EMITTER_REMOVED, emitter)
	}

	update() {
		this.emit(PROTON_UPDATE)

		if (!this.oldTime) {
			this.oldTime = new Date().getTime()
		}

		var time = new Date().getTime()
		this.elapsed = (time - this.oldTime) / 1000

		if (Proton.amendChangeTabsBug) {
			this.amendChangeTabsBug()
		}

		this.oldTime = time

		if (this.elapsed > 0) {
			var emitters = this.emitters
			for (var i = 0, l = emitters.length; i < l; i++) {
				emitters[i].update(this.elapsed)
			}
		}

		this.emit(PROTON_UPDATE_AFTER)
	}

	amendChangeTabsBug() {
		if (this.elapsed > .5) {
			this.oldTime = new Date().getTime()
			this.elapsed = 0
		}
	}

	getCount() {
		var total = 0
		var emitters = this.emitters
		for (var i = 0, l = emitters.length; i < l; i++) {
			total += emitters[i].particles.length
		}
		return total
	}

	destory() {
		var emitters = this.emitters
		for (var i = 0, l = emitters.length; i < l; i++) {
			emitters[i].destory()
			// XXX
			delete emitters[i]
		}

		this.emitters = []
		this.time = 0
		this.oldTime = 0

		pool.release()
	}
}
