var Initialize = require('./Initialize')

global.Proton = {
	Proton: require('./Proton').Proton,

	Span: require('./math/Span'),

	Initialize: Initialize,
	Vector2D: require('./math/Vector2D'),
	Rectangle: require('./math/Rectangle'),

	Behaviour: require('./Behaviour'),

	Alpha:       require('./behaviour/Alpha'),
	Attraction:  require('./behaviour/Attraction'),
	Collision:   require('./behaviour/Collision'),
	Color:       require('./behaviour/Color'),
	CrossZone:   require('./behaviour/CrossZone'),
	Force:       require('./behaviour/Force'),
	Gravity:     require('./behaviour/Gravity'),
	GravityWell: require('./behaviour/GravityWell'),
	RandomDrift: require('./behaviour/RandomDrift'),
	Repulsion:   require('./behaviour/Repulsion'),
	Rotate:      require('./behaviour/Rotate'),
	Scale:       require('./behaviour/Scale'),

	Zone: require('./Zone'),

	CircleZone: require('./zone/CircleZone'),
	ImageZone:  require('./zone/ImageZone'),
	LineZone:   require('./zone/LineZone'),
	PointZone:  require('./zone/PointZone'),
	RectZone:   require('./zone/RectZone'),

	Emitter: require('./Emitter'),
	FollowEmitter: require('./FollowEmitter'),
	BehaviourEmitter: require('./BehaviourEmitter'),

	BaseRender: require('./render/BaseRender'),
	CanvasRender: require('./render/CanvasRender'),
	DomRender: require('./render/DomRender'),
	EaselRender: require('./render/EaselRender'),
	PixelRender: require('./render/PixelRender'),
	PixiRender: require('./render/PixiRender'),
	WebGLRender: require('./render/WebGLRender'),

	Renderer: require('./render/Renderer'),

	V: Initialize.Velocity,
	P: Initialize.Position,
	G: require('./behaviour/Gravity'),

	PARTICLE_CREATED: 'partilcleCreated',
	PARTICLE_UPDATE: 'partilcleUpdate',
	PARTICLE_SLEEP: 'particleSleep',
	PARTICLE_DEAD: 'partilcleDead',

	PROTON_UPDATE: 'protonUpdate',
	PROTON_UPDATE_AFTER: 'protonUpdateAfter',
	EMITTER_ADDED: 'emitterAdded',
	EMITTER_REMOVED: 'emitterRemoved',
	MathUtils: {
		randomColor() {
					var c = Math.random() * 0x1000000 << 0
					return '#' + ('00000' + c.toString(16)).slice(-6)
		}
	}
}

for(var k in Initialize) {
	if(k !== 'default') {
		Proton[k] = Initialize[k]
	}
}

export default Proton
