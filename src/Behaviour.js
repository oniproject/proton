import * as Ease from '../src/engine/tweener/Ease'
import {MEASURE} from './Proton'

/** @private */
var BEHAVIOUR_ID = 0

/**
 * The Behaviour class is the base for the other Behaviour
 */
export default class Behaviour {
	/**
	 * @param {Number} life the life time
	 * @param {String} easing the easing function
	 */
	constructor(life = Infinity, easing) {
		/**
		 * The behaviour's id
		 * @property {String} id
		 */
		this.id = 'Behaviour_' + BEHAVIOUR_ID++

		/**
		 * The behaviour's life
		 * @property {Number} life
		 */
		this.life = life

		/**
		 * The behaviour's decaying trend, for example Proton.easeOutQuart
		 * @property {Function} easing
		 * @default Proton.easeLinear
		 */
		this.easing = easing || Ease.Linear

		/** @private TODO doc */
		this.age = 0
		/** @private TODO doc */
		this.energy = 1

		/**
		 * The behaviour is Dead
		 * @property {Boolean} dead
		 */
		this.dead = false

		/**
		 * The behaviour's parents array
		 * @property {Array} parents
		 */
		this.parents = []

		// speed hack
		//this._applyBehaviour = this.applyBehaviour
		this._applyBehaviour = Behaviour.prototype.applyBehaviour
	}


	/**
	 * Reset this behaviour's parameters
	 * @param {Number} this behaviour's life
	 * @param {String} this behaviour's easing
	 */
	reset(life = Infinity, easing) {
		this.life = life
		this.easing = easing || Ease.Linear
	}

	/**
	 * Normalize a force by 1:100
	 * @param {Vector2D} force
	 * @return {Vector2D}
	 */
	normalizeForce(force) {
		return force.multiplyScalar(MEASURE)
	}

	/**
	 * Normalize a value by 1:100
	 * @param {Number} value
	 * @return {Number}
	 */
	normalizeValue(value) {
		return value * MEASURE
	}

	/**
	 * Initialize the behaviour's parameters for all particles
	 * @param {Particle} particle
	 * @abstract
	 */
	initialize(particle) {}
	
	/**
	 * Apply this behaviour for all particles every time
	 * @param {Particle} particle
	 * @param {Number} time the integrate time 1/ms
	 * @param {Number} index the particle index
	 */
	applyBehaviour(particle, time, index) {
		this.age += time
		if (this.age >= this.life || this.dead) {
			this.energy = 0
			this.dead = true
			this.destory()
		} else {
			var scale = this.easing(particle.age, particle.life)
			this.energy = Math.max(1 - scale, 0)
		}
	}
	
	/**
	 * Destory this behaviour
	 */
	destory() {
		for (var i = 0, l = this.parents.length; i < l; i++) {
			this.parents[i].removeBehaviour(this)
		}
		this.parents = []
	}
}

