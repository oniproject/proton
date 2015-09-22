import Emitter from './Emitter'

/**
 * The BehaviourEmitter class inherits from Proton.Emitter
 *
 * use the BehaviourEmitter you can add behaviours to self
 */
export default class BehaviourEmitter extends Emitter {
	/**
	 * @param {Object} pObj the parameters object
	 */
	constructor(pObj) {
		super(pObj)
		this.selfBehaviours = []
	}

	/**
	 * add the Behaviour to emitter
	 *
	 * you can use Behaviours array:emitter.addSelfBehaviour(Behaviour1,Behaviour2,Behaviour3)
	 * @param {Behaviour} behaviour like this new Proton.Color('random')
	 */
	addSelfBehaviour() {
		for (var i = 0, l = arguments.length; i < l; i++) {
			this.selfBehaviours.push(arguments[i])
		}
	}

	/**
	 * remove the Behaviour for self
	 * @param {Behaviour} behaviour a behaviour
	 */
	removeSelfBehaviour(behaviour) {
		var index = this.selfBehaviours.indexOf(behaviour)
		if (index > -1)
			this.selfBehaviours.splice(index, 1)
	}

	/** @override */
	update(time) {
		super.update(time)
		if (!this.sleep) {
			var selfBehaviours = this.selfBehaviours
			for (var i = 0, l = selfBehaviours.length; i < l; i++) {
				selfBehaviours[i].applyBehaviour(this, time, i)
			}
		}
	}
}
