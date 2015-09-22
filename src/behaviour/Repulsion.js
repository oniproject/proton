import Attraction from './Attraction'

export default class Repulsion extends Attraction {
	constructor(targetPosition, force, radius, life, easing) {
		super(targetPosition, force, radius, life, easing)
		this.force *= -1
	}

	/**
	 * @override
	 */
	reset(targetPosition, force, radius, life, easing) {
		super.reset(targetPosition, force, radius, life, easing)
		this.force *= -1
	}
}
