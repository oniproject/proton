import BaseRender from './BaseRender'

export default class EaselRender extends BaseRender {
	constructor(proton, element, stroke) {
		super(proton, element)
		this.stroke = stroke
	}

	/** @override */
	resize(width, height) {

	}
	/** @override */
	start() {
		EaselRender._super_.prototype.start.call(this);
	}

	/** @override */
	onProtonUpdate() {

	}

	/** @override */
	onParticleCreated(particle) {
		if (particle.target) {
			particle.target = particle.target.clone();
			if (!particle.target.parent) {
				if (!!particle.target['image']) {
					particle.target.regX = particle.target.image.width / 2;
					particle.target.regY = particle.target.image.height / 2;
				}
				this.element.addChild(particle.target);
			}
		} else {
			var graphics = new createjs.Graphics();
			if (this.stroke) {
				if (this.stroke == true) {
					graphics.beginStroke('#000000');
				} else if (this.stroke instanceof String) {
					graphics.beginStroke(this.stroke);
				}
			}

			graphics.beginFill(particle.color).drawCircle(0, 0, particle.radius);
			var shape = new createjs.Shape(graphics);
			particle.target = shape;
			this.element.addChild(particle.target);
		}
	}

	/** @override */
	onParticleUpdate(particle) {
		if (particle.target) {
			particle.target.x = particle.p.x;
			particle.target.y = particle.p.y;
			particle.target.alpha = particle.alpha;
			particle.target.scaleX = particle.target.scaleY = particle.scale;
			particle.target.rotation = particle.rotation;
		}
	}

	/** @override */
	onParticleDead(particle) {
		if (particle.target) {
			if (particle.target.parent)
				particle.target.parent.removeChild(particle.target);
		}
	}
}

