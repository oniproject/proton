import Behaviour from '../Behaviour'

export default class CrossZone extends Behaviour {
	constructor(zone, crossType, life, easing) {
		super(life, easing)
		this.reset(zone, crossType)
		///dead /bound /cross
	}

	/**
	 * @override
	 */
	reset(zone, crossType = 'dead', life, easing) {
		this.zone = zone
		this.zone.crossType = crossType

		if (life) {
			super.reset(life, easing)
		}
	}

	/**
	 * @override
	 */
	applyBehaviour(particle, time, index) {
		this._applyBehaviour(particle, time, index)
		this.zone.crossing(particle)
	}
}
