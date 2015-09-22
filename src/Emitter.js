import EventEmitter from 'eventemitter3'

import {
	integrator, pool,
	PARTICLE_CREATED, PARTICLE_UPDATE, PARTICLE_DEAD
} from './Proton'
import Particle from './Particle'
import {Initialize, Rate} from './Initialize'
import {degreeTransform} from './util'


//setPrototypeByObject
//setVector2DByObject

/** @private */
var EMITTER_ID = 0

/**
 * You can use this emit particles.
 *
 * It will dispatch follow events:
 * PARTICLE_CREATED
 * PARTICLE_UPDATA
 * PARTICLE_DEAD
 *
 * @extends {Particle}
 * @extends {EventEmitter}
 */
export default class Emitter extends Particle {
	 /**
	 * @param {Object} pObj the parameters object
	 * for example {damping:0.01,bindEmitter:false}
	 */
	constructor(pObj) {
		super(pObj)

		// TODO EventEmitter
		this._events = undefined
		this.addEventListener = EventEmitter.prototype.on
		this.removeEventListener = EventEmitter.prototype.off
		this.removeAllEventListeners = EventEmitter.prototype.removeAllListeners
		//this.hasEventListener = EventEmitter.hasEventListener
		this.dispatchEvent = EventEmitter.prototype.emit

		this.initializes = []
		this.particles = []
		this.behaviours = []
		this.emitTime = 0
		this.emitTotalTimes = -1

		/**
		 * The friction coefficient for all particle emit by This
		 * @property {Number} damping
		 * @default 0.006
		 */
		this.damping = .006

		/**
		 * If bindEmitter the particles can bind this emitter's property
		 * @property {Boolean} bindEmitter
		 * @default true
		 */
		this.bindEmitter = true

		/**
		 * The number of particles per second emit (a [particle]/b [s])
		 * @property {Rate} rate
		 * @default Rate(1, .1)
		 */
		this.rate = new Rate(1, .1)

		/**
		 * The emitter's id
		 * @property id
		 * @type {String} id
		 */
		this.id = 'emitter_' + EMITTER_ID++
	}

	/**
	 * start emit particle
	 * @param {Number} emitTime begin emit time
	 * @param {String} life the life of this emitter
	 */
	emit(emitTime = Infinity, life) {
		this.emitTime = 0
		this.emitTotalTimes = emitTime

		if (life == true || life == 'life' || life == 'destroy') {
			if (emitTime == 'once')
				this.life = 1
			else
				this.life = this.emitTotalTimes

		} else if (!isNaN(life)) {
			this.life = life
		}

		this.rate.init()
	}

	/**
	 * stop emiting
	 */
	stopEmit() {
		this.emitTotalTimes = -1
		this.emitTime = 0
	}

	/**
	 * remove current all particles
	 */
	removeAllParticles() {
		var particles = this.particles
		for (var i = 0, l = particles.length; i < l; i++) {
			particles[i].dead = true
		}
	}
	/**
	 * create single particle
	 * 
	 * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
	 */
	createParticle(initialize, behaviour) {
		var particle = pool.get()
		this.setupParticle(particle, initialize, behaviour)
		this.dispatchEvent(PARTICLE_CREATED, particle)
		return particle
	}
	/**
	 * add initialize to this emitter
	 */
	addSelfInitialize(pObj) {
		if (pObj['init']) {
			pObj.init(this)
		} else {
			this.initAll()
		}
	}
	/**
	 * add the Initialize to particles
	 * 
	 * you can use initializes array:for example emitter.addInitialize(initialize1,initialize2,initialize3)
	 * @param {Initialize} initialize like this new Radius(1, 12)
	 */
	addInitialize() {
		for (var i = 0, l = arguments.length; i < l; i++) {
			this.initializes.push(arguments[i])
		}
	}
	/**
	 * remove the Initialize
	 * @param {Initialize} initialize a initialize
	 */
	removeInitialize(initializer) {
		var index = this.initializes.indexOf(initializer)
		if (index > -1) {
			this.initializes.splice(index, 1)
		}
	}

	/**
	 * remove all Initializes
	 */
	removeInitializers() {
		this.initializes.length = 0
	}
	/**
	 * add the Behaviour to particles
	 * 
	 * you can use Behaviours array:emitter.addBehaviour(Behaviour1,Behaviour2,Behaviour3)
	 * @param {Behaviour} behaviour like this new Color('random')
	 */
	addBehaviour() {
		for (var i = 0, l = arguments.length; i < l; i++) {
			this.behaviours.push(arguments[i])
			if (arguments[i].hasOwnProperty("parents"))
				arguments[i].parents.push(this)
		}
	}
	/**
	 * remove the Behaviour
	 * @param {Behaviour} behaviour a behaviour
	 */
	removeBehaviour(behaviour) {
		var index = this.behaviours.indexOf(behaviour)
		if (index > -1)
			this.behaviours.splice(index, 1)
	}
	/**
	 * remove all behaviours
	 */
	removeAllBehaviours() {
		this.behaviours.length = 0
	}

	integrate(time) {
		var damping = 1 - this.damping
		integrator.integrate(this, time, damping)
		var particles = this.particles
		for (var i = 0, l = particles.length; i < l; i++) {
			var particle = particles[i]
			particle.update(time, i)
			integrator.integrate(particle, time, damping)

			this.dispatchEvent(PARTICLE_UPDATE, particle)
		}
	}

	emitting(time) {
		if (this.emitTotalTimes == 'once') {
			var count = this.rate.getValue(99999)
			for (var i = count - 1; i >= 0; i--) {
				this.createParticle()
			}

			this.emitTotalTimes = 'none'
		} else if (!isNaN(this.emitTotalTimes)) {
			this.emitTime += time
			if (this.emitTime < this.emitTotalTimes) {
				var count = this.rate.getValue(time)
				for (var i = count - 1; i >= 0; i--) {
					this.createParticle()
				}
			}
		}
	}

	update(time) {
		this.age += time
		if ((this.age >= this.life) || this.dead) {
			this.destroy()
			return
		}

		this.emitting(time)
		this.integrate(time)

		var particles = this.particles
		for (var k = particles.length - 1; k >= 0; k--) {
			var particle = this.particles[k]
			if (particle.dead) {
				pool.set(particle)
				particles.splice(k, 1)
				this.dispatchEvent(PARTICLE_DEAD, particle)
			}
		}
	}

	setupParticle(particle, initialize, behaviour) {
		var initializes = this.initializes
		var behaviours = this.behaviours

		if (initialize) {
			if ( initialize instanceof Array)
				initializes = initialize
			else
				initializes = [initialize]
		}

		if (behaviour) {
			if ( behaviour instanceof Array)
				behaviours = behaviour
			else
				behaviours = [behaviour]
		}

		this._initialize(particle, initializes)

		particle.addBehaviours(behaviours)
		particle.parent = this
		this.particles.push(particle)
	}

	_initialize(particle, initializes) {
		for (var i = 0, l = initializes.length; i < l; i++) {
			if (initializes[i] instanceof Initialize) {
				initializes[i].init(this, particle)
			} else {
				console.error('fuck this shit')
				setPrototypeByObject(particle, initialize)
				setVector2DByObject(particle, initialize)
			}
		}

		if (this.bindEmitter) {
			particle.p.add(this.p)
			particle.v.add(this.v)
			particle.a.add(this.a)
			particle.v.rotate(degreeTransform(this.rotation))
		}
	}

	/**
	 * Destory this Emitter
	 */
	destroy() {
		this.dead = true
		this.emitTotalTimes = -1
		if (this.particles.length == 0) {
			this.removeInitializers()
			this.removeAllBehaviours()

			if (this.parent)
				this.parent.removeEmitter(this)
		}
	}
}

