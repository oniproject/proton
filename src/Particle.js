import * as Ease from '../src/engine/tweener/Ease'
import Vector2D from './math/Vector2D'
import {getSpanValue} from './util'

/** @private */
export var PARTICLE_ID = 0

/**
 * the Particle class
 *
 * @param {Object} pObj the parameters object
 * for example {life:3,dead:false}
 */
export default class Particle {
	constructor(pOBJ) {
		/**
		 * The particle's id
		 * @property {String} id
		 */
		this.id = 'particle_' + PARTICLE_ID++
		this.reset(true)

		// setPrototypeByObject
		for (var key in pOBJ) {
			if (this.hasOwnProperty(key)) {
				this[singlePrototype] = getSpanValue(pOBJ[k])
			}
		}
	}

	getDirection() {
		return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI)
	}

	reset(init) {
		this.life = Infinity
		this.age = 0
		// 能量损失
		this.energy = 1
		this.dead = false
		this.sleep = false
		this.target = null
		this.sprite = null
		this.parent = null
		this.mass = 1
		this.radius = 10
		this.alpha = 1
		this.scale = 1
		this.rotation = 0
		this.color = null
		this.easing = Ease.Linear

		if (init) {
			this.transform = {}
			this.p = new Vector2D()
			this.v = new Vector2D()
			this.a = new Vector2D()
			this.old = {
				p: new Vector2D(),
				v: new Vector2D(),
				a: new Vector2D(),
			}
			this.behaviours = []
		} else {
			for (var k in this.transform) {
				delete this.transform[k]
			}

			this.p.set(0, 0)
			this.v.set(0, 0)
			this.a.set(0, 0)
			this.old.p.set(0, 0)
			this.old.v.set(0, 0)
			this.old.a.set(0, 0)
			this.removeAllBehaviours()
		}

		this.transform.rgb = {
			r : 255,
			g : 255,
			b : 255,
		}
		return this
	}

	update(time, index) {
		if (!this.sleep) {
			this.age += time
			var behaviours = this.behaviours
			for (var i = 0, l = behaviours.length; i < l; i++) {
				if (behaviours[i]) {
					behaviours[i].applyBehaviour(this, time, index)
				}
			}
		} else {
		}

		if (this.age >= this.life) {
			this.destory()
		} else {
			var scale = this.easing(this.age, this.life)
			this.energy = Math.max(1 - scale, 0)
		}
	}

	addBehaviour(behaviour) {
		this.behaviours.push(behaviour)
		if (behaviour.hasOwnProperty('parents')) {
			behaviour.parents.push(this)
		}
		behaviour.initialize(this)
	}
	addBehaviours(behaviours) {
		for (var i = 0, l = behaviours.length; i < l; i++) {
			this.addBehaviour(behaviours[i])
		}
	}
	removeBehaviour(behaviour) {
		var index = this.behaviours.indexOf(behaviour)
		if (index > -1) {
			var behaviour = this.behaviours.splice(index, 1)
			behaviour.parents = null
		}
	}
	removeAllBehaviours() {
		this.behaviours.length = 0
	}

	/**
	 * Destory this particle
	 */
	destory() {
		this.removeAllBehaviours()
		this.energy = 0
		this.dead = true
		this.parent = null
	}
}
