import BaseRender from './BaseRender'
import {getImage, rgbToHex, degreeTransform} from '../util'

export default class CanvasRender extends BaseRender {
	constructor(proton, element) {
		super(proton, element)
		this.stroke = null
		this.context = this.element.getContext('2d')
		this.bufferCache = {}
	}

	/** @override */
	resize(width, height) {
		this.element.width = width
		this.element.height = height
	}
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
		this.context.clearRect(0, 0, this.element.width, this.element.height)
	}

	/** @override */
	onParticleCreated(particle) {
		if (particle.target)
			getImage(particle.target, particle, false)
		else
			particle.color = particle.color ? particle.color : '#ff0000'
	}

	/** @override */
	onParticleUpdate(particle) {
		if (particle.target) {
			if (particle.target instanceof Image) {
				var w = particle.target.width * particle.scale | 0
				var h = particle.target.height * particle.scale | 0
				var x = particle.p.x - w / 2
				var y = particle.p.y - h / 2

				if (!!particle.color) {
					if (!particle.transform['buffer'])
						particle.transform.buffer = this.getBuffer(particle.target)
					var bufferContext = particle.transform.buffer.getContext('2d')
					bufferContext.clearRect(0, 0, particle.transform.buffer.width, particle.transform.buffer.height)
					bufferContext.globalAlpha = particle.alpha
					bufferContext.drawImage(particle.target, 0, 0)
					bufferContext.globalCompositeOperation = 'source-atop'
					bufferContext.fillStyle = rgbToHex(particle.transform.rgb)
					bufferContext.fillRect(0, 0, particle.transform.buffer.width, particle.transform.buffer.height)
					bufferContext.globalCompositeOperation = 'source-over'
					bufferContext.globalAlpha = 1
					this.context.drawImage(particle.transform.buffer, 0, 0, particle.transform.buffer.width, particle.transform.buffer.height, x, y, w, h)
				} else {
					this.context.save()
					this.context.globalAlpha = particle.alpha
					this.context.translate(particle.p.x, particle.p.y)
					this.context.rotate(degreeTransform(particle.rotation))
					this.context.translate(-particle.p.x, -particle.p.y)
					this.context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height, x, y, w, h)
					this.context.globalAlpha = 1
					this.context.restore()
				}
			}
		} else {
			if (particle.transform['rgb'])
				this.context.fillStyle = 'rgba(' + particle.transform.rgb.r + ',' + particle.transform.rgb.g + ',' + particle.transform.rgb.b + ',' + particle.alpha + ')'
			else
				this.context.fillStyle = particle.color
			this.context.beginPath()
			this.context.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2, true)
			if (this.stroke) {
				this.context.strokeStyle = this.stroke.color
				this.context.lineWidth = this.stroke.thinkness
				this.context.stroke()
			}

			this.context.closePath()
			this.context.fill()
		}
	}

	/** @override */
	onParticleDead(particle) {}

	getBuffer(image) {
		if ( image instanceof Image) {
			var size = image.width + '_' + image.height
			var canvas = this.bufferCache[size]
			if (!canvas) {
				canvas = document.createElement('canvas')
				canvas.width = image.width
				canvas.height = image.height
				this.bufferCache[size] = canvas
			}
			return canvas
		}
	}
}
