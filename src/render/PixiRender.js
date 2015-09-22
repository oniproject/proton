import BaseRender from './BaseRender'

var PI_180 = Math.PI / 180

var Sprite = global.PIXI && PIXI.Sprite
var Graphics = global.PIXI && PIXI.Graphics

export default class PixiRender extends BaseRender {
	constructor(proton, element, stroke) {
		super(proton, element)
		this.stroke = stroke
	}

	/** @override */
	resize (width, height) {
	}

	/** @override */
	start () {
		super.start()
	}

	/** @override */
	onProtonUpdate () {
	}

	/**
	 * @override
	 * @param particle
	 */
	onParticleCreated (particle) {
		if (particle.target) {
			particle.target = new Sprite(particle.target)
			particle.target.anchor.x = 0.5
			particle.target.anchor.y = 0.5
			this.element.addChild(particle.target)
		} else {
			var graphics = new Graphics()
			if (this.stroke) {
				if (this.stroke === true) {
					graphics.beginStroke('#000000')
				} else if (this.stroke instanceof String) {
					graphics.beginStroke(this.stroke)
				}
			}
			graphics.beginFill(particle.color)
			graphics.drawCircle(0, 0, particle.radius)
			particle.target = graphics
			this.element.addChild(particle.target)
		}
	}

	/**
	 * @override
	 * @param particle
	 */
	onParticleUpdate (particle) {
		if (particle.target) {
			particle.target.position.x = particle.p.x
			particle.target.position.y = particle.p.y
			particle.target.alpha = particle.alpha
			particle.target.scale.x = particle.scale
			particle.target.scale.y = particle.scale
			// using cached version of Math.PI / 180 for slight performance increase.
			particle.target.rotation = particle.rotation * PI_180
		}
	}

	/**
	 * @override
	 * @param particle
	 */
	onParticleDead (particle) {
		if (particle.target) {
			this.element.removeChild(particle.target)
		}
	}
}
