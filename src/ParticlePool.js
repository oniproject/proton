import Particle from './Particle'

export default class ParticlePool {
	constructor(num = 0, releaseTime = -1) {
		this.proParticleCount = num
		this.releaseTime = releaseTime

		this.poolList = []
		this.timeoutID = 0
		for (var i = 0; i < num; i++) {
			this.add()
		}
		//////////////////////////////
		if (this.releaseTime > 0) {
			this.timeoutID = setTimeout(this.release, this.releaseTime / 1000)
		}
	}

	create(newTypeParticleClass) {
		if (newTypeParticleClass)
			return new newTypeParticle()
		else
			return new Particle()
	}
	getCount() {
		return this.poolList.length
	}
	add() {
		return this.poolList.push(this.create())
	}
	get() {
		if (this.poolList.length === 0) {
			return this.create()
		} else {
			return this.poolList.pop().reset()
		}
	}
	set(particle) {
		if (this.poolList.length < Proton.POOL_MAX)
			return this.poolList.push(particle)
	}
	release() {
		var poolList = this.poolList
		for (var i = 0, l = poolList.length; i < l; i++) {
			if (poolList[i]['destory'])
				poolList[i].destory()
			delete poolList[i]
		}
		this.poolList.length = 0
	}
}

