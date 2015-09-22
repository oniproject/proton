import BaseRender from './BaseRender'

export default class DomRender extends BaseRender {
	constructor(proton, element) {
		super(proton, element)
		this.stroke = null
	}

	/** @override */
	start() {
		super.start()
	}

	setStroke(color = '#000000', thinkness = 1) {
		this.stroke = {
			color: color,
			thinkness: thinkness,
		}
	}

	/** @override */
	onProtonUpdate() {
	}

	/** @override */
	onParticleCreated(particle) {
		if (particle.target) {
			var self = this
			Proton.Util.getImage(particle.target, particle, false, function(particle) {
				self.setImgInDIV.call(self, particle)
			})
		} else {
			particle.transform.canvas = Proton.DomUtil.createCanvas(particle.id + '_canvas', particle.radius + 1, particle.radius + 1, 'absolute')
			particle.transform.bakOldRadius = particle.radius

			if (this.stroke) {
				particle.transform.canvas.width = 2 * particle.radius + this.stroke.thinkness * 2
				particle.transform.canvas.height = 2 * particle.radius + this.stroke.thinkness * 2
			} else {
				particle.transform.canvas.width = 2 * particle.radius + 1
				particle.transform.canvas.height = 2 * particle.radius + 1
			}

			particle.transform.context = particle.transform.canvas.getContext('2d')
			particle.transform.context.fillStyle = particle.color
			particle.transform.context.beginPath()
			particle.transform.context.arc(particle.radius, particle.radius, particle.radius, 0, Math.PI * 2, true)

			if (this.stroke) {
				particle.transform.context.strokeStyle = this.stroke.color
				particle.transform.context.lineWidth = this.stroke.thinkness
				particle.transform.context.stroke()
			}

			particle.transform.context.closePath()
			particle.transform.context.fill()
			this.element.appendChild(particle.transform.canvas)
		}

	}

	/** @override */
	onParticleUpdate(particle) {
		if (particle.target) {
			if (particle.target instanceof Image) {
				particle.transform.canvas.style.opacity = particle.alpha
				Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.target.width / 2, particle.p.y - particle.target.height / 2, particle.scale, particle.rotation)
			}
		} else {
			particle.transform.canvas.style.opacity = particle.alpha
			if (particle.transform['oldRadius'])
				Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.transform.oldRadius, particle.p.y - particle.transform.oldRadius, particle.scale, particle.rotation)
			else
				Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.transform.bakOldRadius, particle.p.y - particle.transform.bakOldRadius, particle.scale, particle.rotation)
		}
	}

	/** @override */
	onParticleDead(particle) {
		if (particle.transform.canvas)
			this.element.removeChild(particle.transform.canvas)
	}

	setImgInDIV(particle) {
		particle.transform.canvas = Proton.DomUtil.createCanvas(particle.id + '_canvas', particle.target.width + 1, particle.target.height + 1, 'absolute', particle.p.x - particle.radius, particle.p.y - particle.radius)
		particle.transform.context = particle.transform.canvas.getContext('2d')
		particle.transform.context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height)
		this.element.appendChild(particle.transform.canvas)
	}
}
