import PixiRender from './PixiRender'
import DomRender from './DomRender'
import CanvasRender from './CanvasRender'
import WebGLRender from './WebGLRender'
import EaselRender from './EaselRender'
import PixelRender from './PixelRender'
import BaseRender from './BaseRender'

//the own renderer
export default class Renderer {
	constructor(type = 'canvas', proton, element) {
		///element dom/div canvas/canvas easeljs/cantainer(or stage)
		this.element = element
		this.type = type
		this.proton = proton
		this.renderer = this.createRenderer()
	}

	start() {
		this.addEventHandler()
		this.renderer.start()
	}
	stop() {
		this.renderer.stop()
	}

	resize(width, height) {
		this.renderer.resize(width, height)
	}

	setStroke(color, thinkness) {
		if (this.renderer.hasOwnProperty('stroke'))
			this.renderer.setStroke(color, thinkness)
		else
			alert('Sorry this renderer do not suppest stroke method!')
	}

	createImageData(data) {
		if (this.renderer instanceof PixelRender)
			this.renderer.createImageData(data)
	}

	setMaxRadius(radius) {
		if (this.renderer instanceof WebGLRender)
			this.renderer.setMaxRadius(radius)
	}
	blendEquation(A) {
		if (this.renderer instanceof WebGLRender)
			this.renderer.blendEquation(A)
	}
	blendFunc(A, B) {
		if (this.renderer instanceof WebGLRender)
			this.renderer.blendFunc(A, B)
	}

	setType(type) {
		this.type = type
		this.renderer = this.getRenderer()
	}

	createRenderer() {
		switch(this.type) {
		case 'pixi':
			return new PixiRender(this.proton, this.element)
		case 'dom':
			return new DomRender(this.proton, this.element)
		case 'canvas':
			return new CanvasRender(this.proton, this.element)
		case 'webgl':
			return new WebGLRender(this.proton, this.element)
		case 'easel':
			return new EaselRender(this.proton, this.element)
		case 'easeljs':
			return new EaselRender(this.proton, this.element)
		case 'pixel':
			return new PixelRender(this.proton, this.element)
		default:
			return new BaseRender(this.proton, this.element)
		}
	}

	render(callback) {
		this.renderer.render(callback)
	}

	addEventHandler() {
		if (this.onProtonUpdate)
			this.renderer.onProtonUpdate = this.onProtonUpdate

		if (this.onParticleCreated)
			this.renderer.onParticleCreated = this.onParticleCreated

		if (this.onParticleUpdate)
			this.renderer.onParticleUpdate = this.onParticleUpdate

		if (this.onParticleDead)
			this.renderer.onParticleDead = this.onParticleDead
	}
}
