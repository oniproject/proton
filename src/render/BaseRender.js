import {
	PROTON_UPDATE, PROTON_UPDATE_AFTER,
	EMITTER_ADDED, EMITTER_REMOVED,
	PARTICLE_CREATED, PARTICLE_UPDATE, PARTICLE_DEAD
} from '../Proton'

export default class BaseRender {
	constructor(proton, element, stroke) {
		this.proton = proton
		this.element = element
		this.stroke = stroke
	}

	start() {
		this.proton.on(PROTON_UPDATE, () => {
			this.onProtonUpdate()
		})

		this.proton.on(PROTON_UPDATE_AFTER, () => {
			this.onProtonUpdateAfter()
		})

		this.proton.on(EMITTER_ADDED, (emitter) => {
			this.onEmitterAdded(emitter)
		})

		this.proton.on(EMITTER_REMOVED, (emitter) => {
			this.onEmitterRemoved(emitter)
		})

		var length = this.proton.emitters.length, i
		for ( i = 0; i < length; i++) {
			var emitter = this.proton.emitters[i]
			this.addEmitterListener(emitter)
		}
	}

	/** @abstract */
	resize(width, height) {}

	addEmitterListener(emitter) {
		emitter.addEventListener(PARTICLE_CREATED, (particle) => {
			this.onParticleCreated(particle)
		})
		emitter.addEventListener(PARTICLE_UPDATE, (particle) => {
			this.onParticleUpdate(particle)
		})
		emitter.addEventListener(PARTICLE_DEAD, (particle) => {
			this.onParticleDead(particle)
		})
	}

	stop() {
		var length = this.proton.emitters.length
		this.proton.removeAllEventListeners()
		for (var i = 0; i < length; i++) {
			var emitter = this.proton.emitters[i]
			emitter.removeAllEventListeners()
		}
	}

	/** @abstract */
	onEmitterAdded(emitter) {
		this.addEmitterListener(emitter)
	}

	/** @abstract */
	onEmitterRemoved(emitter) {
		emitter.removeAllEventListeners()
	}

	/** @abstract */
	onProtonUpdate() {}
	/** @abstract */
	onProtonUpdateAfter() {}
	/** @abstract */
	onParticleCreated(particle) {}
	/** @abstract */
	onParticleUpdate(particle) {}
	/** @abstract */
	onParticleDead(particle) {}
}
