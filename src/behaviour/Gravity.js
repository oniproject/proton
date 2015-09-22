import Force from './Force'

export default class Gravity extends Force {
	constructor(g, life, easing) {
		super(0, g, life, easing)
	}

	/**
	 * @override
	 */
	reset(g, life, easing) {
		super.reset(0, g, life, easing)
	}
}
