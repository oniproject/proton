/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var Initialize = __webpack_require__(1);

	global.Proton = {
		Proton: __webpack_require__(8).Proton,

		Span: __webpack_require__(3),

		Initialize: Initialize,
		Vector2D: __webpack_require__(7),
		Rectangle: __webpack_require__(14),

		Behaviour: __webpack_require__(15),

		Alpha: __webpack_require__(16),
		Attraction: __webpack_require__(17),
		Collision: __webpack_require__(18),
		Color: __webpack_require__(19),
		CrossZone: __webpack_require__(20),
		Force: __webpack_require__(21),
		Gravity: __webpack_require__(22),
		GravityWell: __webpack_require__(23),
		RandomDrift: __webpack_require__(24),
		Repulsion: __webpack_require__(25),
		Rotate: __webpack_require__(26),
		Scale: __webpack_require__(27),

		Zone: __webpack_require__(6),

		CircleZone: __webpack_require__(28),
		ImageZone: __webpack_require__(29),
		LineZone: __webpack_require__(30),
		PointZone: __webpack_require__(5),
		RectZone: __webpack_require__(31),

		Emitter: __webpack_require__(32),
		FollowEmitter: __webpack_require__(33),
		BehaviourEmitter: __webpack_require__(34),

		BaseRender: __webpack_require__(35),
		CanvasRender: __webpack_require__(36),
		DomRender: __webpack_require__(37),
		EaselRender: __webpack_require__(38),
		PixelRender: __webpack_require__(39),
		PixiRender: __webpack_require__(40),
		WebGLRender: __webpack_require__(41),

		Renderer: __webpack_require__(43),

		V: Initialize.Velocity,
		P: Initialize.Position,
		G: __webpack_require__(22),

		PARTICLE_CREATED: 'partilcleCreated',
		PARTICLE_UPDATE: 'partilcleUpdate',
		PARTICLE_SLEEP: 'particleSleep',
		PARTICLE_DEAD: 'partilcleDead',

		PROTON_UPDATE: 'protonUpdate',
		PROTON_UPDATE_AFTER: 'protonUpdateAfter',
		EMITTER_ADDED: 'emitterAdded',
		EMITTER_REMOVED: 'emitterRemoved',
		MathUtils: {
			randomColor: function randomColor() {
				var c = Math.random() * 0x1000000 << 0;
				return '#' + ('00000' + c.toString(16)).slice(-6);
			}
		}
	};

	for (var k in Initialize) {
		if (k !== 'default') {
			Proton[k] = Initialize[k];
		}
	}

	exports['default'] = Proton;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _get = function get(_x7, _x8, _x9) { var _again = true; _function: while (_again) { var object = _x7, property = _x8, receiver = _x9; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x7 = parent; _x8 = property; _x9 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _util = __webpack_require__(2);

	var _mathColorSpan = __webpack_require__(4);

	var _mathColorSpan2 = _interopRequireDefault(_mathColorSpan);

	var _zonePointZone = __webpack_require__(5);

	var _zonePointZone2 = _interopRequireDefault(_zonePointZone);

	var _Proton = __webpack_require__(8);

	var _mathPolar2D = __webpack_require__(13);

	var _mathPolar2D2 = _interopRequireDefault(_mathPolar2D);

	var Initialize = (function () {
		function Initialize() {
			_classCallCheck(this, Initialize);
		}

		_createClass(Initialize, [{
			key: 'initialize',
			value: function initialize(target) {}
		}, {
			key: 'reset',
			value: function reset() {}
		}, {
			key: 'init',
			value: function init(emitter, particle) {
				if (particle) {
					this.initialize(particle);
				} else {
					this.initialize(emitter);
				}
			}
		}]);

		return Initialize;
	})();

	exports.Initialize = Initialize;

	var ImageTarget = (function (_Initialize) {
		_inherits(ImageTarget, _Initialize);

		function ImageTarget(image) {
			var w = arguments.length <= 1 || arguments[1] === undefined ? 20 : arguments[1];
			var h = arguments.length <= 2 || arguments[2] === undefined ? w : arguments[2];
			return (function () {
				_classCallCheck(this, ImageTarget);

				_get(Object.getPrototypeOf(ImageTarget.prototype), 'constructor', this).call(this);
				this.image = this.setSpanValue(image);
				this.w = w;
				this.h = h;
			}).apply(this, arguments);
		}

		_createClass(ImageTarget, [{
			key: 'initialize',
			value: function initialize(particle) {
				var imagetarget = this.image.getValue();
				if (typeof imagetarget === 'string') {
					particle.target = {
						width: this.w,
						height: this.h,
						src: imagetarget
					};
				} else {
					particle.target = imagetarget;
				}
			}
		}, {
			key: 'setSpanValue',
			value: function setSpanValue(color) {
				if (color instanceof _mathColorSpan2['default']) {
					return color;
				} else {
					return new _mathColorSpan2['default'](color);
				}
			}
		}]);

		return ImageTarget;
	})(Initialize);

	exports.ImageTarget = ImageTarget;

	var Life = (function (_Initialize2) {
		_inherits(Life, _Initialize2);

		function Life(a, b, c) {
			_classCallCheck(this, Life);

			_get(Object.getPrototypeOf(Life.prototype), 'constructor', this).call(this);
			this.lifePan = (0, _util.setSpanValue)(a, b, c);
		}

		_createClass(Life, [{
			key: 'initialize',
			value: function initialize(target) {
				if (this.lifePan.a === Infinity) target.life = Infinity;else target.life = this.lifePan.getValue();
			}
		}]);

		return Life;
	})(Initialize);

	exports.Life = Life;

	var Mass = (function (_Initialize3) {
		_inherits(Mass, _Initialize3);

		function Mass(a, b, c) {
			_classCallCheck(this, Mass);

			_get(Object.getPrototypeOf(Mass.prototype), 'constructor', this).call(this);
			this.massPan = (0, _util.setSpanValue)(a, b, c);
		}

		_createClass(Mass, [{
			key: 'initialize',
			value: function initialize(target) {
				target.mass = this.massPan.getValue();
			}
		}]);

		return Mass;
	})(Initialize);

	exports.Mass = Mass;

	var Position = (function (_Initialize4) {
		_inherits(Position, _Initialize4);

		function Position(zone) {
			_classCallCheck(this, Position);

			_get(Object.getPrototypeOf(Position.prototype), 'constructor', this).call(this);
			this.zone = zone || new _zonePointZone2['default']();
		}

		_createClass(Position, [{
			key: 'reset',
			value: function reset(zone) {
				this.zone = zone || new _zonePointZone2['default']();
			}
		}, {
			key: 'initialize',
			value: function initialize(target) {
				this.zone.getPosition();
				target.p.x = this.zone.vector.x;
				target.p.y = this.zone.vector.y;
			}
		}]);

		return Position;
	})(Initialize);

	exports.Position = Position;

	var Radius = (function (_Initialize5) {
		_inherits(Radius, _Initialize5);

		function Radius(a, b, c) {
			_classCallCheck(this, Radius);

			_get(Object.getPrototypeOf(Radius.prototype), 'constructor', this).call(this);
			this.radius = (0, _util.setSpanValue)(a, b, c);
		}

		/**
	  * The number of particles per second emission (a [particle]/b [s])
	  * @param {Array or Number or Span} numpan the number of each emission
	  * @param {Array or Number or Span} timepan the time of each emission
	  * for example: new Rate(new Span(10, 20), new Span(.1, .25))
	  */

		_createClass(Radius, [{
			key: 'reset',
			value: function reset(a, b, c) {
				this.radius = (0, _util.setSpanValue)(a, b, c);
			}
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.radius = this.radius.getValue();
				particle.transform.oldRadius = particle.radius;
			}
		}]);

		return Radius;
	})(Initialize);

	exports.Radius = Radius;

	var Rate = (function (_Initialize6) {
		_inherits(Rate, _Initialize6);

		function Rate() {
			var numpan = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
			var timepan = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

			_classCallCheck(this, Rate);

			_get(Object.getPrototypeOf(Rate.prototype), 'constructor', this).call(this);
			this.numPan = numpan;
			this.timePan = timepan;

			this.numPan = (0, _util.setSpanValue)(this.numPan);
			this.timePan = (0, _util.setSpanValue)(this.timePan);
			this.startTime = 0;
			this.nextTime = 0;
			this.init();
		}

		_createClass(Rate, [{
			key: 'init',
			value: function init() {
				this.startTime = 0;
				this.nextTime = this.timePan.getValue();
			}
		}, {
			key: 'getValue',
			value: function getValue(time) {
				this.startTime += time;
				if (this.startTime >= this.nextTime) {
					this.startTime = 0;
					this.nextTime = this.timePan.getValue();
					if (this.numPan.b == 1) {
						if (this.numPan.getValue(false) > 0.5) return 1;else return 0;
					} else {
						return this.numPan.getValue(true);
					}
				}
				return 0;
			}
		}]);

		return Rate;
	})(Initialize);

	exports.Rate = Rate;

	var Velocity = (function (_Initialize7) {
		_inherits(Velocity, _Initialize7);

		//radius and tha

		function Velocity(rpan, thapan) {
			var type = arguments.length <= 2 || arguments[2] === undefined ? 'vector' : arguments[2];

			_classCallCheck(this, Velocity);

			_get(Object.getPrototypeOf(Velocity.prototype), 'constructor', this).call(this);
			this.rPan = (0, _util.setSpanValue)(rpan);
			this.thaPan = (0, _util.setSpanValue)(thapan);
			this.type = type;
		}

		_createClass(Velocity, [{
			key: 'reset',
			value: function reset(rpan, thapan) {
				var type = arguments.length <= 2 || arguments[2] === undefined ? 'vector' : arguments[2];

				this.rPan = (0, _util.setSpanValue)(rpan);
				this.thaPan = (0, _util.setSpanValue)(thapan);
				this.type = type;
			}
		}, {
			key: 'normalizeVelocity',
			value: function normalizeVelocity(vr) {
				return vr * _Proton.MEASURE;
			}
		}, {
			key: 'initialize',
			value: function initialize(target) {
				if (this.type == 'p' || this.type == 'P' || this.type == 'polar') {
					var r = this.normalizeVelocity(this.rPan.getValue());
					var tha = this.thaPan.getValue() * Math.PI / 180;
					var polar2d = new _mathPolar2D2['default'](r, tha);
					target.v.x = polar2d.getX();
					target.v.y = polar2d.getY();
				} else {
					target.v.x = this.normalizeVelocity(this.rPan.getValue());
					target.v.y = this.normalizeVelocity(this.thaPan.getValue());
				}
			}
		}]);

		return Velocity;
	})(Initialize);

	exports.Velocity = Velocity;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.setSpanValue = setSpanValue;
	exports.getSpanValue = getSpanValue;
	exports.randomAToB = randomAToB;
	exports.degreeTransform = degreeTransform;
	exports.hexToRGB = hexToRGB;
	exports.rgbToHex = rgbToHex;
	exports.getImage = getImage;
	exports.loadedImage = loadedImage;
	exports.loadAndSetImage = loadAndSetImage;
	exports.ipot = ipot;
	exports.nhpot = nhpot;
	exports.createCanvas = createCanvas;
	exports.transformDom = transformDom;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mathSpan = __webpack_require__(3);

	var _mathSpan2 = _interopRequireDefault(_mathSpan);

	function setSpanValue(a, b, c) {
		if (a instanceof _mathSpan2['default']) {
			return a;
		} else {
			if (!b) {
				return new _mathSpan2['default'](a);
			} else {
				if (!c) return new _mathSpan2['default'](a, b);else return new _mathSpan2['default'](a, b, c);
			}
		}
	}

	function getSpanValue(pan) {
		if (pan instanceof _mathSpan2['default']) return pan.getValue();else return pan;
	}

	function randomAToB(a, b, INT) {
		if (!INT) return a + Math.random() * (b - a);else return Math.floor(Math.random() * (b - a)) + a;
	}

	var PI_180 = Math.PI / 180;

	function degreeTransform(a) {
		return a * PI_180;
	}

	function hexToRGB(h) {
		var hex16 = h.charAt(0) == "#" ? h.substring(1, 7) : h;
		var r = parseInt(hex16.substring(0, 2), 16);
		var g = parseInt(hex16.substring(2, 4), 16);
		var b = parseInt(hex16.substring(4, 6), 16);

		return { r: r, g: g, b: b };
	}

	function rgbToHex(rbg) {
		return 'rgb(' + rbg.r + ', ' + rbg.g + ', ' + rbg.b + ')';
	}

	function getImage(img, particle, drawCanvas, fun) {
		if (typeof img == 'string') {
			loadAndSetImage(img, particle, drawCanvas, fun);
		} else if (typeof img == 'object') {
			loadAndSetImage(img.src, particle, drawCanvas, fun);
		} else if (img instanceof Image) {
			loadedImage(img.src, particle, drawCanvas, fun, img);
		}
	}

	var TextureBuffer = {};
	exports.TextureBuffer = TextureBuffer;
	var TextureCanvasBuffer = {};

	exports.TextureCanvasBuffer = TextureCanvasBuffer;

	function loadedImage(src, particle, drawCanvas, fun, target) {
		particle.target = target;
		particle.transform.src = src;
		if (!TextureBuffer[src]) TextureBuffer[src] = particle.target;
		if (drawCanvas) {
			if (TextureCanvasBuffer[src]) {
				particle.transform.canvas = TextureCanvasBuffer[src];
			} else {
				var _width = nhpot(particle.target.width);
				var _height = nhpot(particle.target.height);
				particle.transform.canvas = createCanvas('canvas' + src, _width, _height);
				var context = particle.transform.canvas.getContext('2d');
				context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height);
				TextureCanvasBuffer[src] = particle.transform.canvas;
			}
		}
		if (fun) fun(particle);
	}

	function loadAndSetImage(src, particle, drawCanvas, fun) {
		if (TextureBuffer[src]) {
			loadedImage(src, particle, drawCanvas, fun, TextureBuffer[src]);
		} else {
			var myImage = new Image();
			myImage.onload = function (e) {
				loadedImage(src, particle, drawCanvas, fun, e.target);
			};
			myImage.src = src;
		}
	}

	function ipot(length) {
		return (length & length - 1) == 0;
	}

	function nhpot(length) {
		--length;
		for (var i = 1; i < 32; i <<= 1) {
			length = length | length >> i;
		}
		return length + 1;
	}

	function createCanvas($id, $width, $height, $position) {
		var element = document.createElement('canvas');
		var position = $position ? $position : 'absolute';
		element.id = $id;
		element.width = $width;
		element.height = $height;
		element.style.position = position;
		element.style.opacity = 0;
		transformDom(element, -500, -500, 0, 0);
		return element;
	}

	function transformDom($div, $x, $y, $scale, $rotate) {
		var translate = 'translate(' + $x + 'px, ' + $y + 'px) ';
		var scale = 'scale(' + $scale + ') ';
		var rotate = 'rotate(' + $rotate + 'deg)';
		$div.style.WebkitTransform = translate + scale + rotate;
		$div.style.MozTransform = translate + scale + rotate;
		$div.style.OTransform = translate + scale + rotate;
		$div.style.msTransform = translate + scale + rotate;
		$div.style.transform = translate + scale + rotate;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _util = __webpack_require__(2);

	var Span = (function () {
		function Span() {
			var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
			var b = arguments.length <= 1 || arguments[1] === undefined ? a : arguments[1];
			var center = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
			return (function () {
				_classCallCheck(this, Span);

				this.isArray = false;

				if (Array.isArray(a)) {
					this.isArray = true;
					this.a = a;
				} else {
					this.a = a;
					this.b = b;
					this.center = center;
				}
			}).apply(this, arguments);
		}

		_createClass(Span, [{
			key: 'getValue',
			value: function getValue(INT) {
				if (this.isArray) {
					return this.a[Math.floor(this.a.length * Math.random())];
				} else {
					if (!this.center) {
						return (0, _util.randomAToB)(this.a, this.b, INT);
					} else {
						return (0, _util.randomAToB)(this.a - this.b, this.a + this.b, INT);
					}
				}
			}
		}]);

		return Span;
	})();

	exports['default'] = Span;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var ColorSpan = (function () {
		function ColorSpan(color) {
			_classCallCheck(this, ColorSpan);

			this.colorArr = Array.isArray(color) ? color : [color];
		}

		_createClass(ColorSpan, [{
			key: 'getValue',
			value: function getValue() {
				var idx = Math.floor(this.colorArr.length * Math.random());
				var color = this.colorArr[idx];

				if (color === 'random') {
					var c = Math.random() * 0x1000000 << 0;
					return '#' + ('00000' + c.toString(16)).slice(-6);
				} else {
					return color;
				}
			}
		}]);

		return ColorSpan;
	})();

	exports['default'] = ColorSpan;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Zone2 = __webpack_require__(6);

	var _Zone3 = _interopRequireDefault(_Zone2);

	var PointZone = (function (_Zone) {
		_inherits(PointZone, _Zone);

		function PointZone(x, y) {
			_classCallCheck(this, PointZone);

			_get(Object.getPrototypeOf(PointZone.prototype), 'constructor', this).call(this);
			this.x = x;
			this.y = y;
		}

		/**
	  * @override
	  */

		_createClass(PointZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.vector.x = this.x;
				this.vector.y = this.y;
				return this.vector;
			}

			/**
	   * @override
	   */
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				if (this.alert) {
					alert('Sorry PointZone does not support crossing method');
					this.alert = false;
				}
			}
		}]);

		return PointZone;
	})(_Zone3['default']);

	exports['default'] = PointZone;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _mathVector2D = __webpack_require__(7);

	var _mathVector2D2 = _interopRequireDefault(_mathVector2D);

	var Zone = (function () {
		function Zone() {
			_classCallCheck(this, Zone);

			this.vector = new _mathVector2D2['default'](0, 0);
			this.random = 0;
			this.crossType = 'dead';
			this.alert = true;
		}

		/**
	  * @abstract
	  */

		_createClass(Zone, [{
			key: 'getPosition',
			value: function getPosition() {}

			/**
	   * @abstract
	   */
		}, {
			key: 'crossing',
			value: function crossing() {}
		}]);

		return Zone;
	})();

	exports['default'] = Zone;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	// @author mrdoob / http://mrdoob.com/

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Vector2D = (function () {
		function Vector2D() {
			var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

			_classCallCheck(this, Vector2D);

			this.x = x;
			this.y = y;
		}

		_createClass(Vector2D, [{
			key: 'set',
			value: function set(x, y) {
				this.x = x;
				this.y = y;
				return this;
			}
		}, {
			key: 'setX',
			value: function setX(x) {
				this.x = x;
				return this;
			}
		}, {
			key: 'setY',
			value: function setY(y) {
				this.y = y;
				return this;
			}
		}, {
			key: 'setComponent',
			value: function setComponent(index, value) {
				switch (index) {
					case 0:
						return this.x = value;
					case 1:
						return this.y = value;
				}
				throw new Error('index is out of range: ' + index);
			}
		}, {
			key: 'getGradient',
			value: function getGradient() {
				if (this.x != 0) return Math.atan2(this.y, this.x);else if (this.y > 0) return Math.PI / 2;else if (this.y < 0) return -Math.PI / 2;
			}
		}, {
			key: 'getComponent',
			value: function getComponent(index) {
				switch (index) {
					case 0:
						return this.x;
					case 1:
						return this.y;
				}
				throw new Error('index is out of range: ' + index);
			}
		}, {
			key: 'copy',
			value: function copy(v) {
				this.x = v.x;
				this.y = v.y;
				return this;
			}
		}, {
			key: 'add',
			value: function add(v, w) {
				if (w !== undefined) {
					return this.addVectors(v, w);
				}
				this.x += v.x;
				this.y += v.y;
				return this;
			}
		}, {
			key: 'addXY',
			value: function addXY(a, b) {
				this.x += a;
				this.y += b;
				return this;
			}
		}, {
			key: 'addVectors',
			value: function addVectors(a, b) {
				this.x = a.x + b.x;
				this.y = a.y + b.y;
				return this;
			}
		}, {
			key: 'addScalar',
			value: function addScalar(s) {
				this.x += s;
				this.y += s;
				return this;
			}
		}, {
			key: 'sub',
			value: function sub(v, w) {
				if (w !== undefined) {
					return this.subVectors(v, w);
				}
				this.x -= v.x;
				this.y -= v.y;
				return this;
			}
		}, {
			key: 'subVectors',
			value: function subVectors(a, b) {
				this.x = a.x - b.x;
				this.y = a.y - b.y;
				return this;
			}
		}, {
			key: 'multiplyScalar',
			value: function multiplyScalar(s) {
				this.x *= s;
				this.y *= s;
				return this;
			}
		}, {
			key: 'divideScalar',
			value: function divideScalar(s) {
				if (s !== 0) {
					this.x /= s;
					this.y /= s;
				} else {
					this.set(0, 0);
				}
				return this;
			}
		}, {
			key: 'min',
			value: function min(v) {
				if (this.x > v.x) {
					this.x = v.x;
				}
				if (this.y > v.y) {
					this.y = v.y;
				}
				return this;
			}
		}, {
			key: 'max',
			value: function max(v) {
				if (this.x < v.x) {
					this.x = v.x;
				}
				if (this.y < v.y) {
					this.y = v.y;
				}
				return this;
			}
		}, {
			key: 'clamp',
			value: function clamp(min, max) {
				// This function assumes min < max, if this assumption isn't true it will not operate correctly
				if (this.x < min.x) {
					this.x = min.x;
				} else if (this.x > max.x) {
					this.x = max.x;
				}
				if (this.y < min.y) {
					this.y = min.y;
				} else if (this.y > max.y) {
					this.y = max.y;
				}
				return this;
			}
		}, {
			key: 'negate',
			value: function negate() {
				return this.multiplyScalar(-1);
			}
		}, {
			key: 'dot',
			value: function dot(v) {
				return this.x * v.x + this.y * v.y;
			}
		}, {
			key: 'lengthSq',
			value: function lengthSq() {
				return this.x * this.x + this.y * this.y;
			}
		}, {
			key: 'length',
			value: function length() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
		}, {
			key: 'setLength',
			value: function setLength(l) {
				var oldLength = this.length();
				if (oldLength !== 0 && l !== oldLength) {
					this.multiplyScalar(l / oldLength);
				}
			}
		}, {
			key: 'normalize',
			value: function normalize() {
				return this.divideScalar(this.length());
			}
		}, {
			key: 'distanceTo',
			value: function distanceTo(v) {
				return Math.sqrt(this.distanceToSquared(v));
			}
		}, {
			key: 'rotate',
			value: function rotate(tha) {
				var x = this.x;
				var y = this.y;
				this.x = x * Math.cos(tha) + y * Math.sin(tha);
				this.y = -x * Math.sin(tha) + y * Math.cos(tha);
				return this;
			}
		}, {
			key: 'distanceToSquared',
			value: function distanceToSquared(v) {
				var dx = this.x - v.x,
				    dy = this.y - v.y;
				return dx * dx + dy * dy;
			}
		}, {
			key: 'lerp',
			value: function lerp(v, alpha) {
				this.x += (v.x - this.x) * alpha;
				this.y += (v.y - this.y) * alpha;
				return this;
			}
		}, {
			key: 'equals',
			value: function equals(v) {
				return v.x === this.x && v.y === this.y;
			}
		}, {
			key: 'toArray',
			value: function toArray() {
				return [this.x, this.y];
			}
		}, {
			key: 'clear',
			value: function clear() {
				this.x = 0.0;
				this.y = 0.0;
				return this;
			}
		}, {
			key: 'clone',
			value: function clone() {
				return new Vector2D(this.x, this.y);
			}
		}]);

		return Vector2D;
	})();

	exports['default'] = Vector2D;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _eventemitter3 = __webpack_require__(9);

	var _eventemitter32 = _interopRequireDefault(_eventemitter3);

	var _ParticlePool = __webpack_require__(10);

	var _ParticlePool2 = _interopRequireDefault(_ParticlePool);

	//the max particle number in pool
	var POOL_MAX = 1000;
	exports.POOL_MAX = POOL_MAX;
	var TIME_STEP = 60;
	exports.TIME_STEP = TIME_STEP;
	//1:100
	var MEASURE = 100;
	exports.MEASURE = MEASURE;
	var EULER = 'euler';
	exports.EULER = EULER;
	var RK2 = 'runge-kutta2';
	exports.RK2 = RK2;
	var RK4 = 'runge-kutta4';
	exports.RK4 = RK4;
	var VERLET = 'verlet';

	exports.VERLET = VERLET;
	var PARTICLE_CREATED = 'partilcleCreated';
	exports.PARTICLE_CREATED = PARTICLE_CREATED;
	var PARTICLE_UPDATE = 'partilcleUpdate';
	exports.PARTICLE_UPDATE = PARTICLE_UPDATE;
	var PARTICLE_SLEEP = 'particleSleep';
	exports.PARTICLE_SLEEP = PARTICLE_SLEEP;
	var PARTICLE_DEAD = 'partilcleDead';

	exports.PARTICLE_DEAD = PARTICLE_DEAD;
	var PROTON_UPDATE = 'protonUpdate';
	exports.PROTON_UPDATE = PROTON_UPDATE;
	var PROTON_UPDATE_AFTER = 'protonUpdateAfter';

	exports.PROTON_UPDATE_AFTER = PROTON_UPDATE_AFTER;
	var EMITTER_ADDED = 'emitterAdded';
	exports.EMITTER_ADDED = EMITTER_ADDED;
	var EMITTER_REMOVED = 'emitterRemoved';

	exports.EMITTER_REMOVED = EMITTER_REMOVED;
	var amendChangeTabsBug = true;
	exports.amendChangeTabsBug = amendChangeTabsBug;
	var TextureBuffer = {};
	exports.TextureBuffer = TextureBuffer;
	var TextureCanvasBuffer = {};

	exports.TextureCanvasBuffer = TextureCanvasBuffer;
	var pool = null;
	exports.pool = pool;
	var integrator = null;

	exports.integrator = integrator;
	//数值积分

	var NumericalIntegration = (function () {
		function NumericalIntegration() {
			var type = arguments.length <= 0 || arguments[0] === undefined ? Proton.EULER : arguments[0];

			_classCallCheck(this, NumericalIntegration);

			this.type = type;
		}

		/**
	  * Proton is a html5 particle engine
	  */

		_createClass(NumericalIntegration, [{
			key: 'integrate',
			value: function integrate(particles, time, damping) {
				this.eulerIntegrate(particles, time, damping);
			}
		}, {
			key: 'eulerIntegrate',
			value: function eulerIntegrate(particle, time, damping) {
				if (!particle.sleep) {
					particle.old.p.copy(particle.p);
					particle.old.v.copy(particle.v);
					particle.a.multiplyScalar(1 / particle.mass);
					particle.v.add(particle.a.multiplyScalar(time));
					particle.p.add(particle.old.v.multiplyScalar(time));
					if (damping) {
						particle.v.multiplyScalar(damping);
					}
					particle.a.clear();
				}
			}
		}]);

		return NumericalIntegration;
	})();

	var Proton = (function (_EventEmitter) {
		_inherits(Proton, _EventEmitter);

		function Proton() {
			var proParticleCount = arguments.length <= 0 || arguments[0] === undefined ? POOL_MAX : arguments[0];
			var integrationType = arguments.length <= 1 || arguments[1] === undefined ? EULER : arguments[1];

			_classCallCheck(this, Proton);

			_get(Object.getPrototypeOf(Proton.prototype), 'constructor', this).call(this);

			this.proParticleCount = proParticleCount;
			this.integrationType = integrationType;

			this.emitters = [];
			this.renderers = [];
			this.time = 0;
			this.oldTime = 0;

			exports.pool = pool = new _ParticlePool2['default'](this.proParticleCount);
			exports.integrator = integrator = new NumericalIntegration(this.integrationType);
		}

		/**
	  * add a type of Renderer
	  *
	  * @param {Renderer} render
	  */

		_createClass(Proton, [{
			key: 'addRender',
			value: function addRender(render) {
				render.proton = this;
				this.renderers.push(render.proton);
			}

			/**
	   * add the Emitter
	   *
	   * @param {Emitter} emitter
	   */
		}, {
			key: 'addEmitter',
			value: function addEmitter(emitter) {
				this.emitters.push(emitter);
				emitter.parent = this;

				this.emit(EMITTER_ADDED, emitter);
			}
		}, {
			key: 'removeEmitter',
			value: function removeEmitter(emitter) {
				var index = this.emitters.indexOf(emitter);
				this.emitters.splice(index, 1);
				emitter.parent = null;

				this.emit(EMITTER_REMOVED, emitter);
			}
		}, {
			key: 'update',
			value: function update() {
				this.emit(PROTON_UPDATE);

				if (!this.oldTime) {
					this.oldTime = new Date().getTime();
				}

				var time = new Date().getTime();
				this.elapsed = (time - this.oldTime) / 1000;

				if (Proton.amendChangeTabsBug) {
					this.amendChangeTabsBug();
				}

				this.oldTime = time;

				if (this.elapsed > 0) {
					var emitters = this.emitters;
					for (var i = 0, l = emitters.length; i < l; i++) {
						emitters[i].update(this.elapsed);
					}
				}

				this.emit(PROTON_UPDATE_AFTER);
			}
		}, {
			key: 'amendChangeTabsBug',
			value: function amendChangeTabsBug() {
				if (this.elapsed > .5) {
					this.oldTime = new Date().getTime();
					this.elapsed = 0;
				}
			}
		}, {
			key: 'getCount',
			value: function getCount() {
				var total = 0;
				var emitters = this.emitters;
				for (var i = 0, l = emitters.length; i < l; i++) {
					total += emitters[i].particles.length;
				}
				return total;
			}
		}, {
			key: 'destory',
			value: function destory() {
				var emitters = this.emitters;
				for (var i = 0, l = emitters.length; i < l; i++) {
					emitters[i].destory();
					// XXX
					delete emitters[i];
				}

				this.emitters = [];
				this.time = 0;
				this.oldTime = 0;

				pool.release();
			}
		}]);

		return Proton;
	})(_eventemitter32['default']);

	exports.Proton = Proton;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {} /* Nothing to set */

	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event,
	      available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt],
	      len = arguments.length,
	      args,
	      i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1:
	        return (listeners.fn.call(listeners.context), true);
	      case 2:
	        return (listeners.fn.call(listeners.context, a1), true);
	      case 3:
	        return (listeners.fn.call(listeners.context, a1, a2), true);
	      case 4:
	        return (listeners.fn.call(listeners.context, a1, a2, a3), true);
	      case 5:
	        return (listeners.fn.call(listeners.context, a1, a2, a3, a4), true);
	      case 6:
	        return (listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true);
	    }

	    for (i = 1, args = new Array(len - 1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length,
	        j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1:
	          listeners[i].fn.call(listeners[i].context);break;
	        case 2:
	          listeners[i].fn.call(listeners[i].context, a1);break;
	        case 3:
	          listeners[i].fn.call(listeners[i].context, a1, a2);break;
	        default:
	          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt],
	      events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Particle = __webpack_require__(11);

	var _Particle2 = _interopRequireDefault(_Particle);

	var ParticlePool = (function () {
		function ParticlePool() {
			var num = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			var releaseTime = arguments.length <= 1 || arguments[1] === undefined ? -1 : arguments[1];

			_classCallCheck(this, ParticlePool);

			this.proParticleCount = num;
			this.releaseTime = releaseTime;

			this.poolList = [];
			this.timeoutID = 0;
			for (var i = 0; i < num; i++) {
				this.add();
			}
			//////////////////////////////
			if (this.releaseTime > 0) {
				this.timeoutID = setTimeout(this.release, this.releaseTime / 1000);
			}
		}

		_createClass(ParticlePool, [{
			key: 'create',
			value: function create(newTypeParticleClass) {
				if (newTypeParticleClass) return new newTypeParticle();else return new _Particle2['default']();
			}
		}, {
			key: 'getCount',
			value: function getCount() {
				return this.poolList.length;
			}
		}, {
			key: 'add',
			value: function add() {
				return this.poolList.push(this.create());
			}
		}, {
			key: 'get',
			value: function get() {
				if (this.poolList.length === 0) {
					return this.create();
				} else {
					return this.poolList.pop().reset();
				}
			}
		}, {
			key: 'set',
			value: function set(particle) {
				if (this.poolList.length < Proton.POOL_MAX) return this.poolList.push(particle);
			}
		}, {
			key: 'release',
			value: function release() {
				var poolList = this.poolList;
				for (var i = 0, l = poolList.length; i < l; i++) {
					if (poolList[i]['destory']) poolList[i].destory();
					delete poolList[i];
				}
				this.poolList.length = 0;
			}
		}]);

		return ParticlePool;
	})();

	exports['default'] = ParticlePool;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _ease = __webpack_require__(12);

	var ease = _interopRequireWildcard(_ease);

	var _mathVector2D = __webpack_require__(7);

	var _mathVector2D2 = _interopRequireDefault(_mathVector2D);

	var _util = __webpack_require__(2);

	/** @private */
	var PARTICLE_ID = 0;

	exports.PARTICLE_ID = PARTICLE_ID;
	/**
	 * the Particle class
	 *
	 * @param {Object} pObj the parameters object
	 * for example {life:3,dead:false}
	 */

	var Particle = (function () {
		function Particle(pOBJ) {
			_classCallCheck(this, Particle);

			/**
	   * The particle's id
	   * @property {String} id
	   */
			this.id = 'particle_' + (exports.PARTICLE_ID = PARTICLE_ID += 1, PARTICLE_ID - 1);
			this.reset(true);

			// setPrototypeByObject
			for (var key in pOBJ) {
				if (this.hasOwnProperty(key)) {
					this[singlePrototype] = (0, _util.getSpanValue)(pOBJ[k]);
				}
			}
		}

		_createClass(Particle, [{
			key: 'getDirection',
			value: function getDirection() {
				return Math.atan2(this.v.x, -this.v.y) * (180 / Math.PI);
			}
		}, {
			key: 'reset',
			value: function reset(init) {
				this.life = Infinity;
				this.age = 0;
				// 能量损失
				this.energy = 1;
				this.dead = false;
				this.sleep = false;
				this.target = null;
				this.sprite = null;
				this.parent = null;
				this.mass = 1;
				this.radius = 10;
				this.alpha = 1;
				this.scale = 1;
				this.rotation = 0;
				this.color = null;
				this.easing = ease.Linear;

				if (init) {
					this.transform = {};
					this.p = new _mathVector2D2['default']();
					this.v = new _mathVector2D2['default']();
					this.a = new _mathVector2D2['default']();
					this.old = {
						p: new _mathVector2D2['default'](),
						v: new _mathVector2D2['default'](),
						a: new _mathVector2D2['default']()
					};
					this.behaviours = [];
				} else {
					for (var k in this.transform) {
						delete this.transform[k];
					}

					this.p.set(0, 0);
					this.v.set(0, 0);
					this.a.set(0, 0);
					this.old.p.set(0, 0);
					this.old.v.set(0, 0);
					this.old.a.set(0, 0);
					this.removeAllBehaviours();
				}

				this.transform.rgb = {
					r: 255,
					g: 255,
					b: 255
				};
				return this;
			}
		}, {
			key: 'update',
			value: function update(time, index) {
				if (!this.sleep) {
					this.age += time;
					var behaviours = this.behaviours;
					for (var i = 0, l = behaviours.length; i < l; i++) {
						if (behaviours[i]) {
							behaviours[i].applyBehaviour(this, time, index);
						}
					}
				} else {}

				if (this.age >= this.life) {
					this.destory();
				} else {
					var scale = this.easing(this.age, this.life);
					this.energy = Math.max(1 - scale, 0);
				}
			}
		}, {
			key: 'addBehaviour',
			value: function addBehaviour(behaviour) {
				this.behaviours.push(behaviour);
				if (behaviour.hasOwnProperty('parents')) {
					behaviour.parents.push(this);
				}
				behaviour.initialize(this);
			}
		}, {
			key: 'addBehaviours',
			value: function addBehaviours(behaviours) {
				for (var i = 0, l = behaviours.length; i < l; i++) {
					this.addBehaviour(behaviours[i]);
				}
			}
		}, {
			key: 'removeBehaviour',
			value: function removeBehaviour(behaviour) {
				var index = this.behaviours.indexOf(behaviour);
				if (index > -1) {
					var behaviour = this.behaviours.splice(index, 1);
					behaviour.parents = null;
				}
			}
		}, {
			key: 'removeAllBehaviours',
			value: function removeAllBehaviours() {
				this.behaviours.length = 0;
			}

			/**
	   * Destory this particle
	   */
		}, {
			key: 'destory',
			value: function destory() {
				this.removeAllBehaviours();
				this.energy = 0;
				this.dead = true;
				this.parent = null;
			}
		}]);

		return Particle;
	})();

	exports['default'] = Particle;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Linear = Linear;
	exports.SineIn = SineIn;
	exports.SineOut = SineOut;
	exports.SineInOut = SineInOut;
	exports.QuadIn = QuadIn;
	exports.QuadOut = QuadOut;
	exports.QuadInOut = QuadInOut;
	exports.CubicIn = CubicIn;
	exports.CubicOut = CubicOut;
	exports.CubicInOut = CubicInOut;
	exports.QuartIn = QuartIn;
	exports.QuartOut = QuartOut;
	exports.QuartInOut = QuartInOut;
	exports.QuintIn = QuintIn;
	exports.QuintOut = QuintOut;
	exports.QuintInOut = QuintInOut;
	exports.ExpoIn = ExpoIn;
	exports.ExpoOut = ExpoOut;
	exports.ExpoInOut = ExpoInOut;
	exports.CircIn = CircIn;
	exports.CircOut = CircOut;
	exports.CircInOut = CircInOut;
	exports.ElasticIn = ElasticIn;
	exports.ElasticOut = ElasticOut;
	exports.ElasticInOut = ElasticInOut;
	exports.BackIn = BackIn;
	exports.BackOut = BackOut;
	exports.BackInOut = BackInOut;
	exports.BounceIn = BounceIn;
	exports.BounceOut = BounceOut;
	exports.BounceInOut = BounceInOut;
	var PI = Math.PI;
	var TwoPI = Math.PI * 2.0;
	var halfPI = Math.PI * 0.5;
	var cos = Math.cos;
	var sin = Math.sin;
	var pow = Math.pow;
	var sqrt = Math.sqrt;
	var abs = Math.abs;
	var asin = Math.asin;

	function Linear(time, duration) {
		return time / duration;
	}

	function SineIn(time, duration) {
		return -cos(time / duration * halfPI) + 1;
	}

	function SineOut(time, duration) {
		return sin(time / duration * halfPI);
	}

	function SineInOut(time, duration) {
		return -0.5 * (cos(PI * time / duration) - 1);
	}

	function QuadIn(time, duration) {
		return (time /= duration) * time;
	}

	function QuadOut(time, duration) {
		return -(time /= duration) * (time - 2);
	}

	function QuadInOut(time, duration) {
		if ((time /= duration * 0.5) < 1) return 0.5 * time * time;
		return -0.5 * (--time * (time - 2) - 1);
	}

	function CubicIn(time, duration) {
		return (time /= duration) * time * time;
	}

	function CubicOut(time, duration) {
		return (time = time / duration - 1) * time * time + 1;
	}

	function CubicInOut(time, duration) {
		if ((time /= duration * 0.5) < 1) return 0.5 * time * time * time;
		return 0.5 * ((time -= 2) * time * time + 2);
	}

	function QuartIn(time, duration) {
		return (time /= duration) * time * time * time;
	}

	function QuartOut(time, duration) {
		return -((time = time / duration - 1) * time * time * time - 1);
	}

	function QuartInOut(time, duration) {
		if ((time /= duration * 0.5) < 1) return 0.5 * time * time * time * time;
		return -0.5 * ((time -= 2) * time * time * time - 2);
	}

	function QuintIn(time, duration) {
		return (time /= duration) * time * time * time * time;
	}

	function QuintOut(time, duration) {
		return (time = time / duration - 1) * time * time * time * time + 1;
	}

	function QuintInOut(time, duration) {
		if ((time /= duration * 0.5) < 1) return 0.5 * time * time * time * time * time;
		return 0.5 * ((time -= 2) * time * time * time * time + 2);
	}

	function ExpoIn(time, duration) {
		return time == 0 ? 0 : pow(2, 10 * (time / duration - 1));
	}

	function ExpoOut(time, duration) {
		if (time == duration) return 1;
		return -pow(2, -10 * time / duration) + 1;
	}

	function ExpoInOut(time, duration) {
		if (time == 0) return 0;
		if (time == duration) return 1;
		if ((time /= duration * 0.5) < 1) return 0.5 * pow(2, 10 * (time - 1));
		return 0.5 * (-pow(2, -10 * --time) + 2);
	}

	function CircIn(time, duration) {
		return -(sqrt(1 - (time /= duration) * time) - 1);
	}

	function CircOut(time, duration) {
		return sqrt(1 - (time = time / duration - 1) * time);
	}

	function CircInOut(time, duration) {
		if ((time /= duration * 0.5) < 1) return -0.5 * (sqrt(1 - time * time) - 1);
		return 0.5 * (sqrt(1 - (time -= 2) * time) + 1);
	}

	function ElasticIn(time, duration, overshootOrAmplitude, period) {
		var s0;
		if (time == 0) return 0;
		if ((time /= duration) == 1) return 1;
		if (period == 0) period = duration * 0.3;
		if (overshootOrAmplitude < 1) {
			overshootOrAmplitude = 1;
			s0 = period / 4;
		} else {
			s0 = period / TwoPI * asin(1 / overshootOrAmplitude);
		}
		return -(overshootOrAmplitude * pow(2, 10 * (time -= 1)) * sin((time * duration - s0) * TwoPI / period));
	}

	function ElasticOut(time, duration, overshootOrAmplitude, period) {
		var s1;
		if (time == 0) return 0;
		if ((time /= duration) == 1) return 1;
		if (period == 0) period = duration * 0.3;
		if (overshootOrAmplitude < 1) {
			overshootOrAmplitude = 1;
			s1 = period / 4;
		} else {
			s1 = period / TwoPI * asin(1 / overshootOrAmplitude);
		}
		return overshootOrAmplitude * pow(2, -10 * time) * sin((time * duration - s1) * TwoPI / period) + 1;
	}

	function ElasticInOut(time, duration, overshootOrAmplitude, period) {
		var s;
		if (time == 0) return 0;
		if ((time /= duration * 0.5) == 2) return 1;
		if (period == 0) period = duration * (0.3 * 1.5);
		if (overshootOrAmplitude < 1) {
			overshootOrAmplitude = 1;
			s = period / 4;
		} else {
			s = period / TwoPI * asin(1 / overshootOrAmplitude);
		}
		if (time < 1) return -0.5 * (overshootOrAmplitude * pow(2, 10 * (time -= 1)) * sin((time * duration - s) * TwoPI / period));
		return overshootOrAmplitude * pow(2, -10 * (time -= 1)) * sin((time * duration - s) * TwoPI / period) * 0.5 + 1;
	}

	function BackIn(time, duration, overshootOrAmplitude, period) {
		return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude);
	}

	function BackOut(time, duration, overshootOrAmplitude, period) {
		return (time = time / duration - 1) * time * ((overshootOrAmplitude + 1) * time + overshootOrAmplitude) + 1;
	}

	function BackInOut(time, duration, overshootOrAmplitude, period) {
		if ((time /= duration * 0.5) < 1) return 0.5 * (time * time * (((overshootOrAmplitude *= 1.525) + 1) * time - overshootOrAmplitude));
		return 0.5 * ((time -= 2) * time * (((overshootOrAmplitude *= 1.525) + 1) * time + overshootOrAmplitude) + 2);
	}

	function BounceIn(time, duration, overshootOrAmplitude, period) {
		return 1 - BounceOut(duration - time, duration, -1, -1);
	}

	function BounceOut(time, duration, overshootOrAmplitude, period) {
		if ((time /= duration) < 1 / 2.75) {
			return 7.5625 * time * time;
		}
		if (time < 2 / 2.75) {
			return 7.5625 * (time -= 1.5 / 2.75) * time + 0.75;
		}
		if (time < 2.5 / 2.75) {
			return 7.5625 * (time -= 2.25 / 2.75) * time + 0.9375;
		}
		return 7.5625 * (time -= 2.625 / 2.75) * time + 0.984375;
	}

	function BounceInOut(time, duration, overshootOrAmplitude, period) {
		if (time < duration * 0.5) {
			return BounceIn(time * 2, duration, -1, -1) * 0.5;
		}
		return BounceOut(time * 2 - duration, duration, -1, -1) * 0.5 + 0.5;
	}

	/*
	 *
	 * TERMS OF USE - EASING EQUATIONS
	 * 
	 * Open source under the BSD License. 
	 * 
	 * Copyright © 2001 Robert Penner
	 * All rights reserved.
	 * 
	 * Redistribution and use in source and binary forms, with or without modification, 
	 * are permitted provided that the following conditions are met:
	 * 
	 * Redistributions of source code must retain the above copyright notice, this list of 
	 * conditions and the following disclaimer.
	 * Redistributions in binary form must reproduce the above copyright notice, this list 
	 * of conditions and the following disclaimer in the documentation and/or other materials 
	 * provided with the distribution.
	 * 
	 * Neither the name of the author nor the names of contributors may be used to endorse 
	 * or promote products derived from this software without specific prior written permission.
	 * 
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
	 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
	 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
	 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
	 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
	 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
	 * OF THE POSSIBILITY OF SUCH DAMAGE. 
	 *
	 */

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Vector2D = __webpack_require__(7);

	var _Vector2D2 = _interopRequireDefault(_Vector2D);

	var Polar2D = (function () {
		function Polar2D() {
			var r = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			var tha = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

			_classCallCheck(this, Polar2D);

			this.r = Math.abs(r);
			this.tha = tha;
		}

		_createClass(Polar2D, [{
			key: 'getX',
			value: function getX() {
				return this.r * Math.sin(this.tha);
			}
		}, {
			key: 'getY',
			value: function getY() {
				return -this.r * Math.cos(this.tha);
			}
		}, {
			key: 'set',
			value: function set(r, tha) {
				this.r = r;
				this.tha = tha;
				return this;
			}
		}, {
			key: 'setR',
			value: function setR(r) {
				this.r = r;
				return this;
			}
		}, {
			key: 'setTha',
			value: function setTha(tha) {
				this.tha = tha;
				return this;
			}
		}, {
			key: 'copy',
			value: function copy(p) {
				this.r = p.r;
				this.tha = p.tha;
				return this;
			}
		}, {
			key: 'normalize',
			value: function normalize() {
				this.r = 1;
				return this;
			}
		}, {
			key: 'clear',
			value: function clear() {
				this.r = 0.0;
				this.tha = 0.0;
				return this;
			}
		}, {
			key: 'equals',
			value: function equals(v) {
				return v.r === this.r && v.tha === this.tha;
			}
		}, {
			key: 'clone',
			value: function clone() {
				return new Polar2D(this.r, this.tha);
			}
		}, {
			key: 'toVector',
			value: function toVector() {
				return new _Vector2D2['default'](this.x, this.y);
			}
		}, {
			key: 'toArray',
			value: function toArray() {
				return [this.r, this.tha];
			}
		}, {
			key: 'x',
			get: function get() {
				return this.r * Math.sin(this.tha);
			}
		}, {
			key: 'y',
			get: function get() {
				return -this.r * Math.cos(this.tha);
			}
		}]);

		return Polar2D;
	})();

	exports['default'] = Polar2D;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Rectangle = (function () {
		function Rectangle(x, y, w, h) {
			_classCallCheck(this, Rectangle);

			this.x = x;
			this.y = y;
			this.width = w;
			this.height = h;
		}

		_createClass(Rectangle, [{
			key: "contains",
			value: function contains(x, y) {
				return x <= this.right && x >= this.x && y <= this.bottom && y >= this.y;
			}
		}, {
			key: "top",
			get: function get() {
				return this.y;
			}
		}, {
			key: "left",
			get: function get() {
				return this.x;
			}
		}, {
			key: "bottom",
			get: function get() {
				return this.y + this.height;
			}
		}, {
			key: "right",
			get: function get() {
				return this.x + this.width;
			}
		}]);

		return Rectangle;
	})();

	exports["default"] = Rectangle;
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _ease = __webpack_require__(12);

	var ease = _interopRequireWildcard(_ease);

	var _Proton = __webpack_require__(8);

	/** @private */
	var BEHAVIOUR_ID = 0;

	/**
	 * The Behaviour class is the base for the other Behaviour
	 */

	var Behaviour = (function () {
		/**
	  * @param {Number} life the life time
	  * @param {String} easing the easing function
	  */

		function Behaviour(life, easing) {
			if (life === undefined) life = Infinity;

			_classCallCheck(this, Behaviour);

			/**
	   * The behaviour's id
	   * @property {String} id
	   */
			this.id = 'Behaviour_' + BEHAVIOUR_ID++;

			/**
	   * The behaviour's life
	   * @property {Number} life
	   */
			this.life = life;

			/**
	   * The behaviour's decaying trend, for example Proton.easeOutQuart
	   * @property {Function} easing
	   * @default Proton.easeLinear
	   */
			this.easing = easing || ease.Linear;

			/** @private TODO doc */
			this.age = 0;
			/** @private TODO doc */
			this.energy = 1;

			/**
	   * The behaviour is Dead
	   * @property {Boolean} dead
	   */
			this.dead = false;

			/**
	   * The behaviour's parents array
	   * @property {Array} parents
	   */
			this.parents = [];

			// speed hack
			//this._applyBehaviour = this.applyBehaviour
			this._applyBehaviour = Behaviour.prototype.applyBehaviour;
		}

		/**
	  * Reset this behaviour's parameters
	  * @param {Number} this behaviour's life
	  * @param {String} this behaviour's easing
	  */

		_createClass(Behaviour, [{
			key: 'reset',
			value: function reset(life, easing) {
				if (life === undefined) life = Infinity;

				this.life = life;
				this.easing = easing || ease.Linear;
			}

			/**
	   * Normalize a force by 1:100
	   * @param {Vector2D} force
	   * @return {Vector2D}
	   */
		}, {
			key: 'normalizeForce',
			value: function normalizeForce(force) {
				return force.multiplyScalar(_Proton.MEASURE);
			}

			/**
	   * Normalize a value by 1:100
	   * @param {Number} value
	   * @return {Number}
	   */
		}, {
			key: 'normalizeValue',
			value: function normalizeValue(value) {
				return value * _Proton.MEASURE;
			}

			/**
	   * Initialize the behaviour's parameters for all particles
	   * @param {Particle} particle
	   * @abstract
	   */
		}, {
			key: 'initialize',
			value: function initialize(particle) {}

			/**
	   * Apply this behaviour for all particles every time
	   * @param {Particle} particle
	   * @param {Number} time the integrate time 1/ms
	   * @param {Number} index the particle index
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this.age += time;
				if (this.age >= this.life || this.dead) {
					this.energy = 0;
					this.dead = true;
					this.destory();
				} else {
					var scale = this.easing(particle.age, particle.life);
					this.energy = Math.max(1 - scale, 0);
				}
			}

			/**
	   * Destory this behaviour
	   */
		}, {
			key: 'destory',
			value: function destory() {
				for (var i = 0, l = this.parents.length; i < l; i++) {
					this.parents[i].removeBehaviour(this);
				}
				this.parents = [];
			}
		}]);

		return Behaviour;
	})();

	exports['default'] = Behaviour;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var _util = __webpack_require__(2);

	var Alpha = (function (_Behaviour) {
		_inherits(Alpha, _Behaviour);

		function Alpha(a, b, life, easing) {
			_classCallCheck(this, Alpha);

			_get(Object.getPrototypeOf(Alpha.prototype), 'constructor', this).call(this, life, easing);
			this.reset(a, b);
		}

		/**
	  * @override
	  */

		_createClass(Alpha, [{
			key: 'reset',
			value: function reset(a, b, life, easing) {
				if (a === undefined) a = 1;

				this.same = b === null || b === undefined;

				this.a = (0, _util.setSpanValue)(a);
				this.b = (0, _util.setSpanValue)(b);

				if (life) {
					_get(Object.getPrototypeOf(Alpha.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.transform.alphaA = this.a.getValue();
				if (this.same) {
					particle.transform.alphaB = particle.transform.alphaA;
				} else {
					particle.transform.alphaB = this.b.getValue();
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this._applyBehaviour(particle, time, index);
				var transform = particle.transform;
				particle.alpha = transform.alphaB + (transform.alphaA - transform.alphaB) * this.energy;
				if (particle.alpha < 0.001) {
					particle.alpha = 0;
				}
			}
		}]);

		return Alpha;
	})(_Behaviour3['default']);

	exports['default'] = Alpha;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var Attraction = (function (_Behaviour) {
		_inherits(Attraction, _Behaviour);

		function Attraction(targetPosition, force, radius, life, easing) {
			if (force === undefined) force = 1;
			if (radius === undefined) radius = 1000;

			_classCallCheck(this, Attraction);

			_get(Object.getPrototypeOf(Attraction.prototype), 'constructor', this).call(this, life, easing);

			this.targetPosition = targetPosition || new Proton.Vector2D();
			this.force = this.normalizeValue(force);
			this.radius = radius;

			this.radiusSq = this.radius * this.radius;
			this.attractionForce = new Proton.Vector2D();
			this.lengthSq = 0;
		}

		/**
	  * @override
	  */

		_createClass(Attraction, [{
			key: 'reset',
			value: function reset(targetPosition, force, radius, life, easing) {
				if (force === undefined) force = 1;
				if (radius === undefined) radius = 1000;

				this.targetPosition = targetPosition || new Proton.Vector2D();
				this.force = this.normalizeValue(force);
				this.radius = radius;

				this.radiusSq = this.radius * this.radius;
				this.attractionForce = new Proton.Vector2D();
				this.lengthSq = 0;
				if (life) {
					_get(Object.getPrototypeOf(Attraction.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this._applyBehaviour(particle, time, index);

				this.attractionForce.copy(this.targetPosition);
				this.attractionForce.sub(particle.p);

				this.lengthSq = this.attractionForce.lengthSq();
				if (this.lengthSq > 0.000004 && this.lengthSq < this.radiusSq) {
					this.attractionForce.normalize();
					this.attractionForce.multiplyScalar(1 - this.lengthSq / this.radiusSq);
					this.attractionForce.multiplyScalar(this.force);
					particle.a.add(this.attractionForce);
				}
			}
		}]);

		return Attraction;
	})(_Behaviour3['default']);

	exports['default'] = Attraction;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var Collision = (function (_Behaviour) {
		_inherits(Collision, _Behaviour);

		//can use Collision(emitter,true,function(){}) or Collision()

		function Collision(emitter, mass, callback, life, easing) {
			_classCallCheck(this, Collision);

			_get(Object.getPrototypeOf(Collision.prototype), 'constructor', this).call(this, life, easing);
			this.reset(emitter, mass, callback);
		}

		/**
	  * @override
	  */

		_createClass(Collision, [{
			key: 'reset',
			value: function reset(emitter, mass, callback, life, easing) {
				if (emitter === undefined) emitter = null;
				if (mass === undefined) mass = true;
				if (callback === undefined) callback = null;

				this.emitter = emitter;
				this.mass = mass;
				this.callback = callback;

				this.collisionPool = [];
				this.delta = new Proton.Vector2D();
				if (life) {
					_get(Object.getPrototypeOf(Collision.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				var newPool = this.emitter ? this.emitter.particles.slice(index) : this.pool.slice(index);

				var otherParticle;
				var averageMass1, averageMass2;

				for (var i = 0, l = newPool.length; i < l; i++) {
					otherParticle = newPool[i];
					if (otherParticle !== particle) {
						this.delta.copy(otherParticle.p);
						this.delta.sub(particle.p);
						var lengthSq = this.delta.lengthSq();
						var distance = particle.radius + otherParticle.radius;

						if (lengthSq <= distance * distance) {
							var overlap = distance - Math.sqrt(lengthSq);
							overlap += 0.5;
							var totalMass = particle.mass + otherParticle.mass;
							averageMass1 = this.mass ? otherParticle.mass / totalMass : 0.5;
							averageMass2 = this.mass ? particle.mass / totalMass : 0.5;
							particle.p.add(this.delta.clone().normalize().multiplyScalar(overlap * -averageMass1));
							otherParticle.p.add(this.delta.normalize().multiplyScalar(overlap * averageMass2));

							if (this.callback) {
								this.callback(particle, otherParticle);
							}
						}
					}
				}
			}
		}]);

		return Collision;
	})(_Behaviour3['default']);

	exports['default'] = Collision;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var _mathColorSpan = __webpack_require__(4);

	var _mathColorSpan2 = _interopRequireDefault(_mathColorSpan);

	var _util = __webpack_require__(2);

	var Color = (function (_Behaviour) {
		_inherits(Color, _Behaviour);

		function Color(color1, color2, life, easing) {
			_classCallCheck(this, Color);

			_get(Object.getPrototypeOf(Color.prototype), 'constructor', this).call(this, life, easing);
			this.reset(color1, color2);
		}

		/**
	  * @override
	  */

		_createClass(Color, [{
			key: 'reset',
			value: function reset(color1, color2, life, easing) {
				this.color1 = this.setSpanValue(color1);
				this.color2 = this.setSpanValue(color2);
				if (life) {
					_get(Object.getPrototypeOf(Color.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.color = this.color1.getValue();
				particle.transform.beginRGB = (0, _util.hexToRGB)(particle.color);

				if (this.color2) particle.transform.endRGB = (0, _util.hexToRGB)(this.color2.getValue());
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				if (this.color2) {
					this._applyBehaviour(particle, time, index);
					particle.transform.rgb.r = particle.transform.endRGB.r + (particle.transform.beginRGB.r - particle.transform.endRGB.r) * this.energy;
					particle.transform.rgb.g = particle.transform.endRGB.g + (particle.transform.beginRGB.g - particle.transform.endRGB.g) * this.energy;
					particle.transform.rgb.b = particle.transform.endRGB.b + (particle.transform.beginRGB.b - particle.transform.endRGB.b) * this.energy;
					particle.transform.rgb.r = parseInt(particle.transform.rgb.r, 10);
					particle.transform.rgb.g = parseInt(particle.transform.rgb.g, 10);
					particle.transform.rgb.b = parseInt(particle.transform.rgb.b, 10);
				} else {
					particle.transform.rgb.r = particle.transform.beginRGB.r;
					particle.transform.rgb.g = particle.transform.beginRGB.g;
					particle.transform.rgb.b = particle.transform.beginRGB.b;
				}
			}
		}, {
			key: 'setSpanValue',
			value: function setSpanValue(color) {
				if (color) {
					if (color instanceof _mathColorSpan2['default']) {
						return color;
					} else {
						return new _mathColorSpan2['default'](color);
					}
				} else {
					return null;
				}
			}
		}]);

		return Color;
	})(_Behaviour3['default']);

	exports['default'] = Color;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var CrossZone = (function (_Behaviour) {
		_inherits(CrossZone, _Behaviour);

		function CrossZone(zone, crossType, life, easing) {
			_classCallCheck(this, CrossZone);

			_get(Object.getPrototypeOf(CrossZone.prototype), 'constructor', this).call(this, life, easing);
			this.reset(zone, crossType);
			///dead /bound /cross
		}

		/**
	  * @override
	  */

		_createClass(CrossZone, [{
			key: 'reset',
			value: function reset(zone, crossType, life, easing) {
				if (crossType === undefined) crossType = 'dead';

				this.zone = zone;
				this.zone.crossType = crossType;

				if (life) {
					_get(Object.getPrototypeOf(CrossZone.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this._applyBehaviour(particle, time, index);
				this.zone.crossing(particle);
			}
		}]);

		return CrossZone;
	})(_Behaviour3['default']);

	exports['default'] = CrossZone;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var Force = (function (_Behaviour) {
		_inherits(Force, _Behaviour);

		function Force(fx, fy, life, easing) {
			_classCallCheck(this, Force);

			_get(Object.getPrototypeOf(Force.prototype), 'constructor', this).call(this, life, easing);
			this.force = this.normalizeForce(new Proton.Vector2D(fx, fy));
		}

		/**
	  * @override
	  */

		_createClass(Force, [{
			key: 'reset',
			value: function reset(fx, fy, life, easing) {
				this.force = this.normalizeForce(new Proton.Vector2D(fx, fy));
				if (life) {
					_get(Object.getPrototypeOf(Force.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this._applyBehaviour(particle, time, index);
				particle.a.add(this.force);
			}
		}]);

		return Force;
	})(_Behaviour3['default']);

	exports['default'] = Force;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Force2 = __webpack_require__(21);

	var _Force3 = _interopRequireDefault(_Force2);

	var Gravity = (function (_Force) {
		_inherits(Gravity, _Force);

		function Gravity(g, life, easing) {
			_classCallCheck(this, Gravity);

			_get(Object.getPrototypeOf(Gravity.prototype), 'constructor', this).call(this, 0, g, life, easing);
		}

		/**
	  * @override
	  */

		_createClass(Gravity, [{
			key: 'reset',
			value: function reset(g, life, easing) {
				_get(Object.getPrototypeOf(Gravity.prototype), 'reset', this).call(this, 0, g, life, easing);
			}
		}]);

		return Gravity;
	})(_Force3['default']);

	exports['default'] = Gravity;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var GravityWell = (function (_Behaviour) {
		_inherits(GravityWell, _Behaviour);

		function GravityWell(centerPoint, force, life, easing) {
			if (force === undefined) force = 1;

			_classCallCheck(this, GravityWell);

			_get(Object.getPrototypeOf(GravityWell.prototype), 'constructor', this).call(this, life, easing);
			this.distanceVec = new Proton.Vector2D();
			this.centerPoint = centerPoint || new Proton.Vector2D();
			this.force = this.normalizeValue(force);
		}

		/**
	  * @override
	  */

		_createClass(GravityWell, [{
			key: 'reset',
			value: function reset(centerPoint, force, life, easing) {
				this.distanceVec = new Proton.Vector2D();
				this.centerPoint = centerPoint || new Proton.Vector2D();
				this.force = this.normalizeValue(force);

				if (life) {
					_get(Object.getPrototypeOf(GravityWell.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'initialize',
			value: function initialize(particle) {}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this.distanceVec.set(this.centerPoint.x - particle.p.x, this.centerPoint.y - particle.p.y);
				var distanceSq = this.distanceVec.lengthSq();
				if (distanceSq != 0) {
					var distance = this.distanceVec.length();
					var factor = this.force * time / (distanceSq * distance);
					particle.v.x += factor * this.distanceVec.x;
					particle.v.y += factor * this.distanceVec.y;
				}
			}
		}]);

		return GravityWell;
	})(_Behaviour3['default']);

	exports['default'] = GravityWell;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var _util = __webpack_require__(2);

	var RandomDrift = (function (_Behaviour) {
		_inherits(RandomDrift, _Behaviour);

		function RandomDrift(driftX, driftY, delay, life, easing) {
			_classCallCheck(this, RandomDrift);

			_get(Object.getPrototypeOf(RandomDrift.prototype), 'constructor', this).call(this, life, easing);
			this.reset(driftX, driftY, delay);
			this.time = 0;
		}

		/**
	  * @override
	  */

		_createClass(RandomDrift, [{
			key: 'reset',
			value: function reset(driftX, driftY, delay, life, easing) {
				this.panFoce = new Proton.Vector2D(driftX, driftY);
				this.panFoce = this.normalizeForce(this.panFoce);
				this.delay = delay;
				if (life) {
					_get(Object.getPrototypeOf(RandomDrift.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this._applyBehaviour(particle, time, index);
				this.time += time;
				if (this.time >= this.delay) {
					var x = (0, _util.randomAToB)(-this.panFoce.x, this.panFoce.x);
					var y = (0, _util.randomAToB)(-this.panFoce.y, this.panFoce.y);
					particle.a.addXY(x, y);
					this.time = 0;
				}
			}
		}]);

		return RandomDrift;
	})(_Behaviour3['default']);

	exports['default'] = RandomDrift;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Attraction2 = __webpack_require__(17);

	var _Attraction3 = _interopRequireDefault(_Attraction2);

	var Repulsion = (function (_Attraction) {
		_inherits(Repulsion, _Attraction);

		function Repulsion(targetPosition, force, radius, life, easing) {
			_classCallCheck(this, Repulsion);

			_get(Object.getPrototypeOf(Repulsion.prototype), 'constructor', this).call(this, targetPosition, force, radius, life, easing);
			this.force *= -1;
		}

		/**
	  * @override
	  */

		_createClass(Repulsion, [{
			key: 'reset',
			value: function reset(targetPosition, force, radius, life, easing) {
				_get(Object.getPrototypeOf(Repulsion.prototype), 'reset', this).call(this, targetPosition, force, radius, life, easing);
				this.force *= -1;
			}
		}]);

		return Repulsion;
	})(_Attraction3['default']);

	exports['default'] = Repulsion;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var _util = __webpack_require__(2);

	var Rotate = (function (_Behaviour) {
		_inherits(Rotate, _Behaviour);

		function Rotate(a, b, style, life, easing) {
			_classCallCheck(this, Rotate);

			_get(Object.getPrototypeOf(Rotate.prototype), 'constructor', this).call(this, life, easing);
			this.reset(a, b, style);
		}

		/**
	  * @override
	  */

		_createClass(Rotate, [{
			key: 'reset',
			value: function reset(a, b, style, life, easing) {
				if (a === undefined) a = 'Velocity';
				if (style === undefined) style = 'to';

				this.same = b == null || b == undefined;

				this.a = (0, _util.setSpanValue)(a);
				this.b = (0, _util.setSpanValue)(b || 0);
				this.style = style;

				if (life) {
					_get(Object.getPrototypeOf(Rotate.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.rotation = this.a.getValue();
				particle.transform.rotationA = this.a.getValue();
				if (!this.same) {
					particle.transform.rotationB = this.b.getValue();
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this._applyBehaviour(particle, time, index);

				if (!this.same) {
					if (this.style == 'to' || this.style == 'TO' || this.style == '_') {
						var a = particle.transform.rotationA;
						var b = particle.transform.rotationB;
						particle.rotation += b + (a - b) * this.energy;
					} else {
						particle.rotation += particle.transform.rotationB;
					}
				} else if (this.a.a == "V" || this.a.a == "Velocity" || this.a.a == "v") {
					//beta...
					particle.rotation = particle.getDirection();
				}
			}
		}]);

		return Rotate;
	})(_Behaviour3['default']);

	exports['default'] = Rotate;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Behaviour2 = __webpack_require__(15);

	var _Behaviour3 = _interopRequireDefault(_Behaviour2);

	var _util = __webpack_require__(2);

	var Scale = (function (_Behaviour) {
		_inherits(Scale, _Behaviour);

		function Scale(a, b, life, easing) {
			_classCallCheck(this, Scale);

			_get(Object.getPrototypeOf(Scale.prototype), 'constructor', this).call(this, life, easing);
			this.reset(a, b);
		}

		/**
	  * @override
	  */

		_createClass(Scale, [{
			key: 'reset',
			value: function reset(a, b, life, easing) {
				if (a === undefined) a = 1;

				this.same = b == null || b == undefined;

				this.a = (0, _util.setSpanValue)(a);
				this.b = (0, _util.setSpanValue)(b);
				if (life) {
					_get(Object.getPrototypeOf(Scale.prototype), 'reset', this).call(this, life, easing);
				}
			}

			/**
	   * @override
	   */
		}, {
			key: 'initialize',
			value: function initialize(particle) {
				particle.transform.scaleA = this.a.getValue();
				particle.transform.oldRadius = particle.radius;
				if (this.same) particle.transform.scaleB = particle.transform.scaleA;else particle.transform.scaleB = this.b.getValue();
			}

			/**
	   * @override
	   */
		}, {
			key: 'applyBehaviour',
			value: function applyBehaviour(particle, time, index) {
				this._applyBehaviour(particle, time, index);

				particle.scale = particle.transform.scaleB + (particle.transform.scaleA - particle.transform.scaleB) * this.energy;
				if (particle.scale < 0.0001) particle.scale = 0;
				particle.radius = particle.transform.oldRadius * particle.scale;
			}
		}]);

		return Scale;
	})(_Behaviour3['default']);

	exports['default'] = Scale;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Zone2 = __webpack_require__(6);

	var _Zone3 = _interopRequireDefault(_Zone2);

	var CircleZone = (function (_Zone) {
		_inherits(CircleZone, _Zone);

		function CircleZone(x, y, radius) {
			_classCallCheck(this, CircleZone);

			_get(Object.getPrototypeOf(CircleZone.prototype), 'constructor', this).call(this);
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.angle = 0;
			this.center = {
				x: this.x,
				y: this.y
			};
		}

		/**
	  * @override
	  */

		_createClass(CircleZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.random = Math.random();
				this.angle = Math.PI * 2 * Math.random();
				this.vector.x = this.x + this.random * this.radius * Math.cos(this.angle);
				this.vector.y = this.y + this.random * this.radius * Math.sin(this.angle);
				return this.vector;
			}
		}, {
			key: 'setCenter',
			value: function setCenter(x, y) {
				this.center.x = x;
				this.center.y = y;
			}

			/**
	   * @override
	   */
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				var d = particle.p.distanceTo(this.center);
				switch (this.crossType) {
					case 'dead':
						if (d - particle.radius > this.radius) particle.dead = true;
						break;
					case 'bound':
						if (d + particle.radius >= this.radius) this.getSymmetric(particle);
						break;
					case 'cross':
						if (this.alert) {
							alert('Sorry CircleZone does not support cross method');
							this.alert = false;
						}
						break;
				}
			}
		}, {
			key: 'getSymmetric',
			value: function getSymmetric(particle) {
				// FIXME
				var tha2 = particle.v.getGradient();
				var tha1 = this.getGradient(particle);
				var tha = 2 * (tha2 - tha1);
				var oldx = particle.v.x;
				var oldy = particle.v.y;
				particle.v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
				particle.v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
			}
		}, {
			key: 'getGradient',
			value: function getGradient(particle) {
				return -Math.PI / 2 + Math.atan2(particle.p.y - this.center.y, particle.p.x - this.center.x);
			}
		}]);

		return CircleZone;
	})(_Zone3['default']);

	exports['default'] = CircleZone;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Zone2 = __webpack_require__(6);

	var _Zone3 = _interopRequireDefault(_Zone2);

	var ImageZone = (function (_Zone) {
		_inherits(ImageZone, _Zone);

		function ImageZone(imageData, x, y, d) {
			_classCallCheck(this, ImageZone);

			_get(Object.getPrototypeOf(ImageZone.prototype), 'constructor', this).call(this);
			this.reset(imageData, x, y, d);
		}

		_createClass(ImageZone, [{
			key: 'reset',
			value: function reset(imageData) {
				var x = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
				var y = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
				var d = arguments.length <= 3 || arguments[3] === undefined ? 2 : arguments[3];

				this.imageData = imageData;
				this.x = x;
				this.y = y;
				this.d = d;

				this.vectors = [];
				this.setVectors();
			}
		}, {
			key: 'setVectors',
			value: function setVectors() {
				var length1 = this.imageData.width;
				var length2 = this.imageData.height;
				for (var i = 0; i < length1; i += this.d) {
					for (var j = 0; j < length2; j += this.d) {
						var index = ((j >> 0) * length1 + (i >> 0)) * 4;
						if (this.imageData.data[index + 3] > 0) {
							this.vectors.push({
								x: i + this.x,
								y: j + this.y
							});
						}
					}
				}
				return this.vector;
			}
		}, {
			key: 'getBound',
			value: function getBound(x, y) {
				var index = ((y >> 0) * this.imageData.width + (x >> 0)) * 4;
				return this.imageData.data[index + 3] > 0;
			}

			/**
	   * @override
	   */
		}, {
			key: 'getPosition',
			value: function getPosition() {
				return this.vector.copy(this.vectors[Math.floor(Math.random() * this.vectors.length)]);
			}
		}, {
			key: 'getColor',
			value: function getColor(x, y) {
				x -= this.x;
				y -= this.y;
				var i = ((y >> 0) * this.imageData.width + (x >> 0)) * 4;
				return {
					r: this.imageData.data[i],
					g: this.imageData.data[i + 1],
					b: this.imageData.data[i + 2],
					a: this.imageData.data[i + 3]
				};
			}

			/**
	   * @override
	   */
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				if (this.crossType == 'dead') {
					if (this.getBound(particle.p.x - this.x, particle.p.y - this.y)) particle.dead = true;else particle.dead = false;
				} else if (this.crossType == 'bound') {
					if (!this.getBound(particle.p.x - this.x, particle.p.y - this.y)) particle.v.negate();
				}
			}
		}]);

		return ImageZone;
	})(_Zone3['default']);

	exports['default'] = ImageZone;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Zone2 = __webpack_require__(6);

	var _Zone3 = _interopRequireDefault(_Zone2);

	var LineZone = (function (_Zone) {
		_inherits(LineZone, _Zone);

		function LineZone(x1, y1, x2, y2) {
			var direction = arguments.length <= 4 || arguments[4] === undefined ? '>' : arguments[4];

			_classCallCheck(this, LineZone);

			_get(Object.getPrototypeOf(LineZone.prototype), 'constructor', this).call(this);
			if (x2 - x1 >= 0) {
				this.x1 = x1;
				this.y1 = y1;
				this.x2 = x2;
				this.y2 = y2;
			} else {
				this.x1 = x2;
				this.y1 = y2;
				this.x2 = x1;
				this.y2 = y1;
			}
			this.dx = this.x2 - this.x1;
			this.dy = this.y2 - this.y1;
			this.minx = Math.min(this.x1, this.x2);
			this.miny = Math.min(this.y1, this.y2);
			this.maxx = Math.max(this.x1, this.x2);
			this.maxy = Math.max(this.y1, this.y2);
			this.dot = this.x2 * this.y1 - this.x1 * this.y2;
			this.xxyy = this.dx * this.dx + this.dy * this.dy;
			this.gradient = this.getGradient();
			this.length = this.getLength();

			this.direction = direction;
		}

		/**
	  * @override
	  */

		_createClass(LineZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.random = Math.random();
				this.vector.x = this.x1 + this.random * this.length * Math.cos(this.gradient);
				this.vector.y = this.y1 + this.random * this.length * Math.sin(this.gradient);
				return this.vector;
			}
		}, {
			key: 'getDirection',
			value: function getDirection(x, y) {
				var A = this.dy;
				var B = -this.dx;
				var C = this.dot;
				var D = B == 0 ? 1 : B;
				if ((A * x + B * y + C) * D > 0) return true;else return false;
			}
		}, {
			key: 'getDistance',
			value: function getDistance(x, y) {
				var A = this.dy;
				var B = -this.dx;
				var C = this.dot;
				var D = A * x + B * y + C;
				return D / Math.sqrt(this.xxyy);
			}
		}, {
			key: 'getSymmetric',
			value: function getSymmetric(v) {
				var tha2 = v.getGradient();
				var tha1 = this.getGradient();
				var tha = 2 * (tha1 - tha2);
				var oldx = v.x;
				var oldy = v.y;
				v.x = oldx * Math.cos(tha) - oldy * Math.sin(tha);
				v.y = oldx * Math.sin(tha) + oldy * Math.cos(tha);
				return v;
			}
		}, {
			key: 'getGradient',
			value: function getGradient() {
				return Math.atan2(this.dy, this.dx);
			}
		}, {
			key: 'getRange',
			value: function getRange(particle, fun) {
				var angle = Math.abs(this.getGradient());
				if (angle <= Math.PI / 4) {
					if (particle.p.x < this.maxx && particle.p.x > this.minx) {
						fun();
					}
				} else {
					if (particle.p.y < this.maxy && particle.p.y > this.miny) {
						fun();
					}
				}
			}
		}, {
			key: 'getLength',
			value: function getLength() {
				return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
			}

			/**
	   * @override
	   */
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				var self = this;
				if (this.crossType == 'dead') {
					if (this.direction == '>' || this.direction == 'R' || this.direction == 'right' || this.direction == 'down') {
						this.getRange(particle, function () {
							if (self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					} else {
						this.getRange(particle, function () {
							if (!self.getDirection(particle.p.x, particle.p.y)) particle.dead = true;
						});
					}
				} else if (this.crossType == 'bound') {
					this.getRange(particle, function () {
						if (self.getDistance(particle.p.x, particle.p.y) <= particle.radius) {
							if (self.dx == 0) {
								particle.v.x *= -1;
							} else if (self.dy == 0) {
								particle.v.y *= -1;
							} else {
								self.getSymmetric(particle.v);
							}
						}
					});
				} else if (this.crossType == 'cross') {
					if (this.alert) {
						alert('Sorry lineZone does not support cross method');
						this.alert = false;
					}
				}
			}
		}]);

		return LineZone;
	})(_Zone3['default']);

	exports['default'] = LineZone;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Zone2 = __webpack_require__(6);

	var _Zone3 = _interopRequireDefault(_Zone2);

	var RectZone = (function (_Zone) {
		_inherits(RectZone, _Zone);

		function RectZone(x, y, width, height) {
			_classCallCheck(this, RectZone);

			_get(Object.getPrototypeOf(RectZone.prototype), 'constructor', this).call(this);
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}

		/**
	  * @override
	  */

		_createClass(RectZone, [{
			key: 'getPosition',
			value: function getPosition() {
				this.vector.x = this.x + Math.random() * this.width;
				this.vector.y = this.y + Math.random() * this.height;
				return this.vector;
			}

			/**
	   * @override
	   */
		}, {
			key: 'crossing',
			value: function crossing(particle) {
				var p = particle.p;
				var v = particle.v;
				var radius = particle.radius;

				switch (this.crossType) {
					case 'dead':
						if (p.x + radius < this.x) {
							particle.dead = true;
						} else if (p.x - radius > this.x + this.width) {
							particle.dead = true;
						}

						if (p.y + radius < this.y) {
							particle.dead = true;
						} else if (p.y - radius > this.y + this.height) {
							particle.dead = true;
						}
						break;
					case 'bound':
						if (p.x - radius < this.x) {
							p.x = this.x + radius;
							v.x *= -1;
						} else if (p.x + radius > this.x + this.width) {
							p.x = this.x + this.width - radius;
							v.x *= -1;
						}

						if (p.y - radius < this.y) {
							p.y = this.y + radius;
							v.y *= -1;
						} else if (p.y + radius > this.y + this.height) {
							p.y = this.y + this.height - radius;
							v.y *= -1;
						}
						break;
					case 'cross':
						if (p.x + radius < this.x && v.x <= 0) {
							p.x = this.x + this.width + radius;
						} else if (p.x - radius > this.x + this.width && v.x >= 0) {
							p.x = this.x - radius;
						}

						if (p.y + radius < this.y && v.y <= 0) {
							p.y = this.y + this.height + radius;
						} else if (p.y - radius > this.y + this.height && v.y >= 0) {
							p.y = this.y - radius;
						}
						break;
				}
			}
		}]);

		return RectZone;
	})(_Zone3['default']);

	exports['default'] = RectZone;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _eventemitter3 = __webpack_require__(9);

	var _eventemitter32 = _interopRequireDefault(_eventemitter3);

	var _Proton = __webpack_require__(8);

	var _Particle2 = __webpack_require__(11);

	var _Particle3 = _interopRequireDefault(_Particle2);

	var _Initialize = __webpack_require__(1);

	var _util = __webpack_require__(2);

	//setPrototypeByObject
	//setVector2DByObject

	/** @private */
	var EMITTER_ID = 0;

	/**
	 * You can use this emit particles.
	 *
	 * It will dispatch follow events:
	 * PARTICLE_CREATED
	 * PARTICLE_UPDATA
	 * PARTICLE_DEAD
	 *
	 * @extends {Particle}
	 * @extends {EventEmitter}
	 */

	var Emitter = (function (_Particle) {
		_inherits(Emitter, _Particle);

		/**
	 * @param {Object} pObj the parameters object
	 * for example {damping:0.01,bindEmitter:false}
	 */

		function Emitter(pObj) {
			_classCallCheck(this, Emitter);

			_get(Object.getPrototypeOf(Emitter.prototype), 'constructor', this).call(this, pObj);

			// TODO EventEmitter
			this._events = undefined;
			this.addEventListener = _eventemitter32['default'].prototype.on;
			this.removeEventListener = _eventemitter32['default'].prototype.off;
			this.removeAllEventListeners = _eventemitter32['default'].prototype.removeAllListeners;
			//this.hasEventListener = EventEmitter.hasEventListener
			this.dispatchEvent = _eventemitter32['default'].prototype.emit;

			this.initializes = [];
			this.particles = [];
			this.behaviours = [];
			this.emitTime = 0;
			this.emitTotalTimes = -1;

			/**
	   * The friction coefficient for all particle emit by This
	   * @property {Number} damping
	   * @default 0.006
	   */
			this.damping = .006;

			/**
	   * If bindEmitter the particles can bind this emitter's property
	   * @property {Boolean} bindEmitter
	   * @default true
	   */
			this.bindEmitter = true;

			/**
	   * The number of particles per second emit (a [particle]/b [s])
	   * @property {Rate} rate
	   * @default Rate(1, .1)
	   */
			this.rate = new _Initialize.Rate(1, .1);

			/**
	   * The emitter's id
	   * @property id
	   * @type {String} id
	   */
			this.id = 'emitter_' + EMITTER_ID++;
		}

		/**
	  * start emit particle
	  * @param {Number} emitTime begin emit time
	  * @param {String} life the life of this emitter
	  */

		_createClass(Emitter, [{
			key: 'emit',
			value: function emit(emitTime, life) {
				if (emitTime === undefined) emitTime = Infinity;

				this.emitTime = 0;
				this.emitTotalTimes = emitTime;

				if (life == true || life == 'life' || life == 'destroy') {
					if (emitTime == 'once') this.life = 1;else this.life = this.emitTotalTimes;
				} else if (!isNaN(life)) {
					this.life = life;
				}

				this.rate.init();
			}

			/**
	   * stop emiting
	   */
		}, {
			key: 'stopEmit',
			value: function stopEmit() {
				this.emitTotalTimes = -1;
				this.emitTime = 0;
			}

			/**
	   * remove current all particles
	   */
		}, {
			key: 'removeAllParticles',
			value: function removeAllParticles() {
				var particles = this.particles;
				for (var i = 0, l = particles.length; i < l; i++) {
					particles[i].dead = true;
				}
			}

			/**
	   * create single particle
	   * 
	   * can use emit({x:10},new Gravity(10),{'particleUpdate',fun}) or emit([{x:10},new Initialize],new Gravity(10),{'particleUpdate',fun})
	   */
		}, {
			key: 'createParticle',
			value: function createParticle(initialize, behaviour) {
				var particle = _Proton.pool.get();
				this.setupParticle(particle, initialize, behaviour);
				this.dispatchEvent(_Proton.PARTICLE_CREATED, particle);
				return particle;
			}

			/**
	   * add initialize to this emitter
	   */
		}, {
			key: 'addSelfInitialize',
			value: function addSelfInitialize(pObj) {
				if (pObj['init']) {
					pObj.init(this);
				} else {
					this.initAll();
				}
			}

			/**
	   * add the Initialize to particles
	   * 
	   * you can use initializes array:for example emitter.addInitialize(initialize1,initialize2,initialize3)
	   * @param {Initialize} initialize like this new Radius(1, 12)
	   */
		}, {
			key: 'addInitialize',
			value: function addInitialize() {
				for (var i = 0, l = arguments.length; i < l; i++) {
					this.initializes.push(arguments[i]);
				}
			}

			/**
	   * remove the Initialize
	   * @param {Initialize} initialize a initialize
	   */
		}, {
			key: 'removeInitialize',
			value: function removeInitialize(initializer) {
				var index = this.initializes.indexOf(initializer);
				if (index > -1) {
					this.initializes.splice(index, 1);
				}
			}

			/**
	   * remove all Initializes
	   */
		}, {
			key: 'removeInitializers',
			value: function removeInitializers() {
				this.initializes.length = 0;
			}

			/**
	   * add the Behaviour to particles
	   * 
	   * you can use Behaviours array:emitter.addBehaviour(Behaviour1,Behaviour2,Behaviour3)
	   * @param {Behaviour} behaviour like this new Color('random')
	   */
		}, {
			key: 'addBehaviour',
			value: function addBehaviour() {
				for (var i = 0, l = arguments.length; i < l; i++) {
					this.behaviours.push(arguments[i]);
					if (arguments[i].hasOwnProperty("parents")) arguments[i].parents.push(this);
				}
			}

			/**
	   * remove the Behaviour
	   * @param {Behaviour} behaviour a behaviour
	   */
		}, {
			key: 'removeBehaviour',
			value: function removeBehaviour(behaviour) {
				var index = this.behaviours.indexOf(behaviour);
				if (index > -1) this.behaviours.splice(index, 1);
			}

			/**
	   * remove all behaviours
	   */
		}, {
			key: 'removeAllBehaviours',
			value: function removeAllBehaviours() {
				this.behaviours.length = 0;
			}
		}, {
			key: 'integrate',
			value: function integrate(time) {
				var damping = 1 - this.damping;
				_Proton.integrator.integrate(this, time, damping);
				var particles = this.particles;
				for (var i = 0, l = particles.length; i < l; i++) {
					var particle = particles[i];
					particle.update(time, i);
					_Proton.integrator.integrate(particle, time, damping);

					this.dispatchEvent(_Proton.PARTICLE_UPDATE, particle);
				}
			}
		}, {
			key: 'emitting',
			value: function emitting(time) {
				if (this.emitTotalTimes == 'once') {
					var count = this.rate.getValue(99999);
					for (var i = count - 1; i >= 0; i--) {
						this.createParticle();
					}

					this.emitTotalTimes = 'none';
				} else if (!isNaN(this.emitTotalTimes)) {
					this.emitTime += time;
					if (this.emitTime < this.emitTotalTimes) {
						var count = this.rate.getValue(time);
						for (var i = count - 1; i >= 0; i--) {
							this.createParticle();
						}
					}
				}
			}
		}, {
			key: 'update',
			value: function update(time) {
				this.age += time;
				if (this.age >= this.life || this.dead) {
					this.destroy();
					return;
				}

				this.emitting(time);
				this.integrate(time);

				var particles = this.particles;
				for (var k = particles.length - 1; k >= 0; k--) {
					var particle = this.particles[k];
					if (particle.dead) {
						_Proton.pool.set(particle);
						particles.splice(k, 1);
						this.dispatchEvent(_Proton.PARTICLE_DEAD, particle);
					}
				}
			}
		}, {
			key: 'setupParticle',
			value: function setupParticle(particle, initialize, behaviour) {
				var initializes = this.initializes;
				var behaviours = this.behaviours;

				if (initialize) {
					if (initialize instanceof Array) initializes = initialize;else initializes = [initialize];
				}

				if (behaviour) {
					if (behaviour instanceof Array) behaviours = behaviour;else behaviours = [behaviour];
				}

				this._initialize(particle, initializes);

				particle.addBehaviours(behaviours);
				particle.parent = this;
				this.particles.push(particle);
			}
		}, {
			key: '_initialize',
			value: function _initialize(particle, initializes) {
				for (var i = 0, l = initializes.length; i < l; i++) {
					if (initializes[i] instanceof _Initialize.Initialize) {
						initializes[i].init(this, particle);
					} else {
						console.error('fuck this shit');
						setPrototypeByObject(particle, initialize);
						setVector2DByObject(particle, initialize);
					}
				}

				if (this.bindEmitter) {
					particle.p.add(this.p);
					particle.v.add(this.v);
					particle.a.add(this.a);
					particle.v.rotate((0, _util.degreeTransform)(this.rotation));
				}
			}

			/**
	   * Destory this Emitter
	   */
		}, {
			key: 'destroy',
			value: function destroy() {
				this.dead = true;
				this.emitTotalTimes = -1;
				if (this.particles.length == 0) {
					this.removeInitializers();
					this.removeAllBehaviours();

					if (this.parent) this.parent.removeEmitter(this);
				}
			}
		}]);

		return Emitter;
	})(_Particle3['default']);

	exports['default'] = Emitter;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Emitter2 = __webpack_require__(32);

	var _Emitter3 = _interopRequireDefault(_Emitter2);

	/**
	 * The FollowEmitter class inherits from Proton.Emitter
	 *
	 * use the FollowEmitter will emit particle when mousemoving
	 */

	var FollowEmitter = (function (_Emitter) {
		_inherits(FollowEmitter, _Emitter);

		/**
	  * @param {Element} mouseTarget mouseevent's target
	  * @param {Number} ease the easing of following speed
	  * @default 0.7
	  * @param {Object} pObj the parameters object
	  */

		function FollowEmitter(mouseTarget, ease, pObj) {
			if (mouseTarget === undefined) mouseTarget = window;
			if (ease === undefined) ease = .7;

			_classCallCheck(this, FollowEmitter);

			_get(Object.getPrototypeOf(FollowEmitter.prototype), 'constructor', this).call(this, pObj);
			this.mouseTarget = mouseTarget;
			this.ease = ease;
			this._allowEmitting = false;
			this.initEventHandler();
		}

		_createClass(FollowEmitter, [{
			key: 'initEventHandler',
			value: function initEventHandler() {
				var self = this;
				this.mousemoveHandler = function (e) {
					self.mousemove.call(self, e);
				};
				this.mousedownHandler = function (e) {
					self.mousedown.call(self, e);
				};
				this.mouseupHandler = function (e) {
					self.mouseup.call(self, e);
				};

				this.mouseTarget.addEventListener('mousemove', this.mousemoveHandler, false);
			}

			/**
	   * start emit particle
	   */
		}, {
			key: 'emit',
			value: function emit() {
				this._allowEmitting = true;
			}

			/**
	   * stop emiting
	   */
		}, {
			key: 'stopEmit',
			value: function stopEmit() {
				this._allowEmitting = false;
			}
		}, {
			key: 'mousemove',
			value: function mousemove(e) {
				if (e.layerX || e.layerX == 0) {
					this.p.x += (e.layerX - this.p.x) * this.ease;
					this.p.y += (e.layerY - this.p.y) * this.ease;
				} else if (e.offsetX || e.offsetX == 0) {
					this.p.x += (e.offsetX - this.p.x) * this.ease;
					this.p.y += (e.offsetY - this.p.y) * this.ease;
				}
				if (this._allowEmitting) {
					_get(Object.getPrototypeOf(FollowEmitter.prototype), 'emit', this).call(this, 'once');
				}
			}

			/**
	   * Destory this Emitter
	   */
		}, {
			key: 'destroy',
			value: function destroy() {
				_get(Object.getPrototypeOf(FollowEmitter.prototype), 'destroy', this).call(this);
				this.mouseTarget.removeEventListener('mousemove', this.mousemoveHandler, false);
			}
		}]);

		return FollowEmitter;
	})(_Emitter3['default']);

	exports['default'] = FollowEmitter;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Emitter2 = __webpack_require__(32);

	var _Emitter3 = _interopRequireDefault(_Emitter2);

	/**
	 * The BehaviourEmitter class inherits from Proton.Emitter
	 *
	 * use the BehaviourEmitter you can add behaviours to self
	 */

	var BehaviourEmitter = (function (_Emitter) {
		_inherits(BehaviourEmitter, _Emitter);

		/**
	  * @param {Object} pObj the parameters object
	  */

		function BehaviourEmitter(pObj) {
			_classCallCheck(this, BehaviourEmitter);

			_get(Object.getPrototypeOf(BehaviourEmitter.prototype), 'constructor', this).call(this, pObj);
			this.selfBehaviours = [];
		}

		/**
	  * add the Behaviour to emitter
	  *
	  * you can use Behaviours array:emitter.addSelfBehaviour(Behaviour1,Behaviour2,Behaviour3)
	  * @param {Behaviour} behaviour like this new Proton.Color('random')
	  */

		_createClass(BehaviourEmitter, [{
			key: 'addSelfBehaviour',
			value: function addSelfBehaviour() {
				for (var i = 0, l = arguments.length; i < l; i++) {
					this.selfBehaviours.push(arguments[i]);
				}
			}

			/**
	   * remove the Behaviour for self
	   * @param {Behaviour} behaviour a behaviour
	   */
		}, {
			key: 'removeSelfBehaviour',
			value: function removeSelfBehaviour(behaviour) {
				var index = this.selfBehaviours.indexOf(behaviour);
				if (index > -1) this.selfBehaviours.splice(index, 1);
			}

			/** @override */
		}, {
			key: 'update',
			value: function update(time) {
				_get(Object.getPrototypeOf(BehaviourEmitter.prototype), 'update', this).call(this, time);
				if (!this.sleep) {
					var selfBehaviours = this.selfBehaviours;
					for (var i = 0, l = selfBehaviours.length; i < l; i++) {
						selfBehaviours[i].applyBehaviour(this, time, i);
					}
				}
			}
		}]);

		return BehaviourEmitter;
	})(_Emitter3['default']);

	exports['default'] = BehaviourEmitter;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Proton = __webpack_require__(8);

	var BaseRender = (function () {
		function BaseRender(proton, element, stroke) {
			_classCallCheck(this, BaseRender);

			this.proton = proton;
			this.element = element;
			this.stroke = stroke;
		}

		_createClass(BaseRender, [{
			key: 'start',
			value: function start() {
				var _this = this;

				this.proton.on(_Proton.PROTON_UPDATE, function () {
					_this.onProtonUpdate();
				});

				this.proton.on(_Proton.PROTON_UPDATE_AFTER, function () {
					_this.onProtonUpdateAfter();
				});

				this.proton.on(_Proton.EMITTER_ADDED, function (emitter) {
					_this.onEmitterAdded(emitter);
				});

				this.proton.on(_Proton.EMITTER_REMOVED, function (emitter) {
					_this.onEmitterRemoved(emitter);
				});

				var length = this.proton.emitters.length,
				    i;
				for (i = 0; i < length; i++) {
					var emitter = this.proton.emitters[i];
					this.addEmitterListener(emitter);
				}
			}

			/** @abstract */
		}, {
			key: 'resize',
			value: function resize(width, height) {}
		}, {
			key: 'addEmitterListener',
			value: function addEmitterListener(emitter) {
				var _this2 = this;

				emitter.addEventListener(_Proton.PARTICLE_CREATED, function (particle) {
					_this2.onParticleCreated(particle);
				});
				emitter.addEventListener(_Proton.PARTICLE_UPDATE, function (particle) {
					_this2.onParticleUpdate(particle);
				});
				emitter.addEventListener(_Proton.PARTICLE_DEAD, function (particle) {
					_this2.onParticleDead(particle);
				});
			}
		}, {
			key: 'stop',
			value: function stop() {
				var length = this.proton.emitters.length;
				this.proton.removeAllEventListeners();
				for (var i = 0; i < length; i++) {
					var emitter = this.proton.emitters[i];
					emitter.removeAllEventListeners();
				}
			}

			/** @abstract */
		}, {
			key: 'onEmitterAdded',
			value: function onEmitterAdded(emitter) {
				this.addEmitterListener(emitter);
			}

			/** @abstract */
		}, {
			key: 'onEmitterRemoved',
			value: function onEmitterRemoved(emitter) {
				emitter.removeAllEventListeners();
			}

			/** @abstract */
		}, {
			key: 'onProtonUpdate',
			value: function onProtonUpdate() {}

			/** @abstract */
		}, {
			key: 'onProtonUpdateAfter',
			value: function onProtonUpdateAfter() {}

			/** @abstract */
		}, {
			key: 'onParticleCreated',
			value: function onParticleCreated(particle) {}

			/** @abstract */
		}, {
			key: 'onParticleUpdate',
			value: function onParticleUpdate(particle) {}

			/** @abstract */
		}, {
			key: 'onParticleDead',
			value: function onParticleDead(particle) {}
		}]);

		return BaseRender;
	})();

	exports['default'] = BaseRender;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _BaseRender2 = __webpack_require__(35);

	var _BaseRender3 = _interopRequireDefault(_BaseRender2);

	var _util = __webpack_require__(2);

	var CanvasRender = (function (_BaseRender) {
		_inherits(CanvasRender, _BaseRender);

		function CanvasRender(proton, element) {
			_classCallCheck(this, CanvasRender);

			_get(Object.getPrototypeOf(CanvasRender.prototype), 'constructor', this).call(this, proton, element);
			this.stroke = null;
			this.context = this.element.getContext('2d');
			this.bufferCache = {};
		}

		/** @override */

		_createClass(CanvasRender, [{
			key: 'resize',
			value: function resize(width, height) {
				this.element.width = width;
				this.element.height = height;
			}
		}, {
			key: 'start',
			value: function start() {
				_get(Object.getPrototypeOf(CanvasRender.prototype), 'start', this).call(this);
			}
		}, {
			key: 'setStroke',
			value: function setStroke() {
				var color = arguments.length <= 0 || arguments[0] === undefined ? '#000000' : arguments[0];
				var thinkness = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

				this.stroke = {
					color: color,
					thinkness: thinkness
				};
			}

			/** @override */
		}, {
			key: 'onProtonUpdate',
			value: function onProtonUpdate() {
				this.context.clearRect(0, 0, this.element.width, this.element.height);
			}

			/** @override */
		}, {
			key: 'onParticleCreated',
			value: function onParticleCreated(particle) {
				if (particle.target) (0, _util.getImage)(particle.target, particle, false);else particle.color = particle.color ? particle.color : '#ff0000';
			}

			/** @override */
		}, {
			key: 'onParticleUpdate',
			value: function onParticleUpdate(particle) {
				if (particle.target) {
					if (particle.target instanceof Image) {
						var w = particle.target.width * particle.scale | 0;
						var h = particle.target.height * particle.scale | 0;
						var x = particle.p.x - w / 2;
						var y = particle.p.y - h / 2;

						if (!!particle.color) {
							if (!particle.transform['buffer']) particle.transform.buffer = this.getBuffer(particle.target);
							var bufferContext = particle.transform.buffer.getContext('2d');
							bufferContext.clearRect(0, 0, particle.transform.buffer.width, particle.transform.buffer.height);
							bufferContext.globalAlpha = particle.alpha;
							bufferContext.drawImage(particle.target, 0, 0);
							bufferContext.globalCompositeOperation = 'source-atop';
							bufferContext.fillStyle = (0, _util.rgbToHex)(particle.transform.rgb);
							bufferContext.fillRect(0, 0, particle.transform.buffer.width, particle.transform.buffer.height);
							bufferContext.globalCompositeOperation = 'source-over';
							bufferContext.globalAlpha = 1;
							this.context.drawImage(particle.transform.buffer, 0, 0, particle.transform.buffer.width, particle.transform.buffer.height, x, y, w, h);
						} else {
							this.context.save();
							this.context.globalAlpha = particle.alpha;
							this.context.translate(particle.p.x, particle.p.y);
							this.context.rotate((0, _util.degreeTransform)(particle.rotation));
							this.context.translate(-particle.p.x, -particle.p.y);
							this.context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height, x, y, w, h);
							this.context.globalAlpha = 1;
							this.context.restore();
						}
					}
				} else {
					if (particle.transform['rgb']) this.context.fillStyle = 'rgba(' + particle.transform.rgb.r + ',' + particle.transform.rgb.g + ',' + particle.transform.rgb.b + ',' + particle.alpha + ')';else this.context.fillStyle = particle.color;
					this.context.beginPath();
					this.context.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2, true);
					if (this.stroke) {
						this.context.strokeStyle = this.stroke.color;
						this.context.lineWidth = this.stroke.thinkness;
						this.context.stroke();
					}

					this.context.closePath();
					this.context.fill();
				}
			}

			/** @override */
		}, {
			key: 'onParticleDead',
			value: function onParticleDead(particle) {}
		}, {
			key: 'getBuffer',
			value: function getBuffer(image) {
				if (image instanceof Image) {
					var size = image.width + '_' + image.height;
					var canvas = this.bufferCache[size];
					if (!canvas) {
						canvas = document.createElement('canvas');
						canvas.width = image.width;
						canvas.height = image.height;
						this.bufferCache[size] = canvas;
					}
					return canvas;
				}
			}
		}]);

		return CanvasRender;
	})(_BaseRender3['default']);

	exports['default'] = CanvasRender;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _BaseRender2 = __webpack_require__(35);

	var _BaseRender3 = _interopRequireDefault(_BaseRender2);

	var DomRender = (function (_BaseRender) {
		_inherits(DomRender, _BaseRender);

		function DomRender(proton, element) {
			_classCallCheck(this, DomRender);

			_get(Object.getPrototypeOf(DomRender.prototype), 'constructor', this).call(this, proton, element);
			this.stroke = null;
		}

		/** @override */

		_createClass(DomRender, [{
			key: 'start',
			value: function start() {
				_get(Object.getPrototypeOf(DomRender.prototype), 'start', this).call(this);
			}
		}, {
			key: 'setStroke',
			value: function setStroke() {
				var color = arguments.length <= 0 || arguments[0] === undefined ? '#000000' : arguments[0];
				var thinkness = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

				this.stroke = {
					color: color,
					thinkness: thinkness
				};
			}

			/** @override */
		}, {
			key: 'onProtonUpdate',
			value: function onProtonUpdate() {}

			/** @override */
		}, {
			key: 'onParticleCreated',
			value: function onParticleCreated(particle) {
				if (particle.target) {
					var self = this;
					Proton.Util.getImage(particle.target, particle, false, function (particle) {
						self.setImgInDIV.call(self, particle);
					});
				} else {
					particle.transform.canvas = Proton.DomUtil.createCanvas(particle.id + '_canvas', particle.radius + 1, particle.radius + 1, 'absolute');
					particle.transform.bakOldRadius = particle.radius;

					if (this.stroke) {
						particle.transform.canvas.width = 2 * particle.radius + this.stroke.thinkness * 2;
						particle.transform.canvas.height = 2 * particle.radius + this.stroke.thinkness * 2;
					} else {
						particle.transform.canvas.width = 2 * particle.radius + 1;
						particle.transform.canvas.height = 2 * particle.radius + 1;
					}

					particle.transform.context = particle.transform.canvas.getContext('2d');
					particle.transform.context.fillStyle = particle.color;
					particle.transform.context.beginPath();
					particle.transform.context.arc(particle.radius, particle.radius, particle.radius, 0, Math.PI * 2, true);

					if (this.stroke) {
						particle.transform.context.strokeStyle = this.stroke.color;
						particle.transform.context.lineWidth = this.stroke.thinkness;
						particle.transform.context.stroke();
					}

					particle.transform.context.closePath();
					particle.transform.context.fill();
					this.element.appendChild(particle.transform.canvas);
				}
			}

			/** @override */
		}, {
			key: 'onParticleUpdate',
			value: function onParticleUpdate(particle) {
				if (particle.target) {
					if (particle.target instanceof Image) {
						particle.transform.canvas.style.opacity = particle.alpha;
						Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.target.width / 2, particle.p.y - particle.target.height / 2, particle.scale, particle.rotation);
					}
				} else {
					particle.transform.canvas.style.opacity = particle.alpha;
					if (particle.transform['oldRadius']) Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.transform.oldRadius, particle.p.y - particle.transform.oldRadius, particle.scale, particle.rotation);else Proton.DomUtil.transformDom(particle.transform.canvas, particle.p.x - particle.transform.bakOldRadius, particle.p.y - particle.transform.bakOldRadius, particle.scale, particle.rotation);
				}
			}

			/** @override */
		}, {
			key: 'onParticleDead',
			value: function onParticleDead(particle) {
				if (particle.transform.canvas) this.element.removeChild(particle.transform.canvas);
			}
		}, {
			key: 'setImgInDIV',
			value: function setImgInDIV(particle) {
				particle.transform.canvas = Proton.DomUtil.createCanvas(particle.id + '_canvas', particle.target.width + 1, particle.target.height + 1, 'absolute', particle.p.x - particle.radius, particle.p.y - particle.radius);
				particle.transform.context = particle.transform.canvas.getContext('2d');
				particle.transform.context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height);
				this.element.appendChild(particle.transform.canvas);
			}
		}]);

		return DomRender;
	})(_BaseRender3['default']);

	exports['default'] = DomRender;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _BaseRender2 = __webpack_require__(35);

	var _BaseRender3 = _interopRequireDefault(_BaseRender2);

	var EaselRender = (function (_BaseRender) {
		_inherits(EaselRender, _BaseRender);

		function EaselRender(proton, element, stroke) {
			_classCallCheck(this, EaselRender);

			_get(Object.getPrototypeOf(EaselRender.prototype), 'constructor', this).call(this, proton, element);
			this.stroke = stroke;
		}

		/** @override */

		_createClass(EaselRender, [{
			key: 'resize',
			value: function resize(width, height) {}

			/** @override */
		}, {
			key: 'start',
			value: function start() {
				EaselRender._super_.prototype.start.call(this);
			}

			/** @override */
		}, {
			key: 'onProtonUpdate',
			value: function onProtonUpdate() {}

			/** @override */
		}, {
			key: 'onParticleCreated',
			value: function onParticleCreated(particle) {
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
		}, {
			key: 'onParticleUpdate',
			value: function onParticleUpdate(particle) {
				if (particle.target) {
					particle.target.x = particle.p.x;
					particle.target.y = particle.p.y;
					particle.target.alpha = particle.alpha;
					particle.target.scaleX = particle.target.scaleY = particle.scale;
					particle.target.rotation = particle.rotation;
				}
			}

			/** @override */
		}, {
			key: 'onParticleDead',
			value: function onParticleDead(particle) {
				if (particle.target) {
					if (particle.target.parent) particle.target.parent.removeChild(particle.target);
				}
			}
		}]);

		return EaselRender;
	})(_BaseRender3['default']);

	exports['default'] = EaselRender;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _BaseRender2 = __webpack_require__(35);

	var _BaseRender3 = _interopRequireDefault(_BaseRender2);

	var PixelRender = (function (_BaseRender) {
		_inherits(PixelRender, _BaseRender);

		function PixelRender(proton, element, rectangle) {
			_classCallCheck(this, PixelRender);

			_get(Object.getPrototypeOf(PixelRender.prototype), 'constructor', this).call(this, proton, element);
			this.context = this.element.getContext('2d');
			this.imageData = null;
			this.rectangle = null;
			this.rectangle = rectangle;
			this.createImageData(rectangle);
		}

		/** @override */

		_createClass(PixelRender, [{
			key: 'resize',
			value: function resize(width, height) {
				this.element.width = width;
				this.element.height = height;
			}
		}, {
			key: 'createImageData',
			value: function createImageData(rectangle) {
				if (!rectangle) this.rectangle = new Proton.Rectangle(0, 0, this.element.width, this.element.height);else this.rectangle = rectangle;
				this.imageData = this.context.createImageData(this.rectangle.width, this.rectangle.height);
				this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y);
			}

			/** @override */
		}, {
			key: 'start',
			value: function start() {
				PixelRender._super_.prototype.start.call(this);
			}
		}, {
			key: 'onProtonUpdate',

			/** @override */
			value: function onProtonUpdate() {
				this.context.clearRect(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
				this.imageData = this.context.getImageData(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height);
			}

			/** @override */
		}, {
			key: 'onProtonUpdateAfter',
			value: function onProtonUpdateAfter() {
				this.context.putImageData(this.imageData, this.rectangle.x, this.rectangle.y);
			}

			/** @override */
		}, {
			key: 'onParticleCreated',
			value: function onParticleCreated(particle) {}

			/** @override */
		}, {
			key: 'onParticleUpdate',
			value: function onParticleUpdate(particle) {
				if (this.imageData) {
					this.setPixel(this.imageData, Math.floor(particle.p.x - this.rectangle.x), Math.floor(particle.p.y - this.rectangle.y), particle);
				}
			}
		}, {
			key: 'setPixel',
			value: function setPixel(imagedata, x, y, particle) {
				var rgb = particle.transform.rgb;
				if (x < 0 || x > this.element.width || y < 0 || y > this.elementwidth) return;

				var i = ((y >> 0) * imagedata.width + (x >> 0)) * 4;

				imagedata.data[i] = rgb.r;
				imagedata.data[i + 1] = rgb.g;
				imagedata.data[i + 2] = rgb.b;
				imagedata.data[i + 3] = particle.alpha * 255;
			}

			/** @override */
		}, {
			key: 'onParticleDead',
			value: function onParticleDead(particle) {}
		}]);

		return PixelRender;
	})(_BaseRender3['default']);

	exports['default'] = PixelRender;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _BaseRender2 = __webpack_require__(35);

	var _BaseRender3 = _interopRequireDefault(_BaseRender2);

	var PI_180 = Math.PI / 180;

	var Sprite = global.PIXI && PIXI.Sprite;
	var Graphics = global.PIXI && PIXI.Graphics;

	var PixiRender = (function (_BaseRender) {
		_inherits(PixiRender, _BaseRender);

		function PixiRender(proton, element, stroke) {
			_classCallCheck(this, PixiRender);

			_get(Object.getPrototypeOf(PixiRender.prototype), 'constructor', this).call(this, proton, element);
			this.stroke = stroke;
		}

		/** @override */

		_createClass(PixiRender, [{
			key: 'resize',
			value: function resize(width, height) {}

			/** @override */
		}, {
			key: 'start',
			value: function start() {
				_get(Object.getPrototypeOf(PixiRender.prototype), 'start', this).call(this);
			}

			/** @override */
		}, {
			key: 'onProtonUpdate',
			value: function onProtonUpdate() {}

			/**
	   * @override
	   * @param particle
	   */
		}, {
			key: 'onParticleCreated',
			value: function onParticleCreated(particle) {
				if (particle.target) {
					particle.target = new Sprite(particle.target);
					particle.target.anchor.x = 0.5;
					particle.target.anchor.y = 0.5;
					this.element.addChild(particle.target);
				} else {
					var graphics = new Graphics();
					if (this.stroke) {
						if (this.stroke === true) {
							graphics.beginStroke('#000000');
						} else if (this.stroke instanceof String) {
							graphics.beginStroke(this.stroke);
						}
					}
					graphics.beginFill(particle.color);
					graphics.drawCircle(0, 0, particle.radius);
					particle.target = graphics;
					this.element.addChild(particle.target);
				}
			}

			/**
	   * @override
	   * @param particle
	   */
		}, {
			key: 'onParticleUpdate',
			value: function onParticleUpdate(particle) {
				if (particle.target) {
					particle.target.position.x = particle.p.x;
					particle.target.position.y = particle.p.y;
					particle.target.alpha = particle.alpha;
					particle.target.scale.x = particle.scale;
					particle.target.scale.y = particle.scale;
					// using cached version of Math.PI / 180 for slight performance increase.
					particle.target.rotation = particle.rotation * PI_180;
				}
			}

			/**
	   * @override
	   * @param particle
	   */
		}, {
			key: 'onParticleDead',
			value: function onParticleDead(particle) {
				if (particle.target) {
					this.element.removeChild(particle.target);
				}
			}
		}]);

		return PixiRender;
	})(_BaseRender3['default']);

	exports['default'] = PixiRender;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _BaseRender2 = __webpack_require__(35);

	var _BaseRender3 = _interopRequireDefault(_BaseRender2);

	var _mathMat3 = __webpack_require__(42);

	var _mathMat32 = _interopRequireDefault(_mathMat3);

	var _util = __webpack_require__(2);

	function makeTranslation(tx, ty) {
		return [1, 0, 0, 0, 1, 0, tx, ty, 1];
	}

	function makeRotation(angleInRadians) {
		var c = Math.cos(angleInRadians);
		var s = Math.sin(angleInRadians);
		return [c, -s, 0, s, c, 0, 0, 0, 1];
	}

	function makeScale(sx, sy) {
		return [sx, 0, 0, 0, sy, 0, 0, 0, 1];
	}

	function matrixMultiply(a, b) {
		var a00 = a[0]; // 0 * 3 + 0
		var a01 = a[1]; // 0 * 3 + 1
		var a02 = a[2]; // 0 * 3 + 2
		var a10 = a[3]; // 1 * 3 + 0
		var a11 = a[4]; // 1 * 3 + 1
		var a12 = a[5]; // 1 * 3 + 2
		var a20 = a[6]; // 2 * 3 + 0
		var a21 = a[7]; // 2 * 3 + 1
		var a22 = a[8]; // 2 * 3 + 2

		var b00 = b[0]; // 0 * 3 + 0
		var b01 = b[1]; // 0 * 3 + 1
		var b02 = b[2]; // 0 * 3 + 2
		var b10 = b[3]; // 1 * 3 + 0
		var b11 = b[4]; // 1 * 3 + 1
		var b12 = b[5]; // 1 * 3 + 2
		var b20 = b[6]; // 2 * 3 + 0
		var b21 = b[7]; // 2 * 3 + 1
		var b22 = b[8]; // 2 * 3 + 2

		return [a00 * b00 + a01 * b10 + a02 * b20, a00 * b01 + a01 * b11 + a02 * b21, a00 * b02 + a01 * b12 + a02 * b22, a10 * b00 + a11 * b10 + a12 * b20, a10 * b01 + a11 * b11 + a12 * b21, a10 * b02 + a11 * b12 + a12 * b22, a20 * b00 + a21 * b10 + a22 * b20, a20 * b01 + a21 * b11 + a22 * b21, a20 * b02 + a21 * b12 + a22 * b22];
	}

	var MStack = (function () {
		function MStack() {
			_classCallCheck(this, MStack);

			this.mats = [];
			this.size = 0;
			for (var i = 0; i < 20; i++) this.mats.push(_mathMat32['default'].create([0, 0, 0, 0, 0, 0, 0, 0, 0]));
		}

		_createClass(MStack, [{
			key: 'set',
			value: function set(m, i) {
				if (i == 0) _mathMat32['default'].set(m, this.mats[0]);else _mathMat32['default'].multiply(this.mats[i - 1], m, this.mats[i]);
				this.size = Math.max(this.size, i + 1);
			}
		}, {
			key: 'push',
			value: function push(m) {
				if (this.size == 0) _mathMat32['default'].set(m, this.mats[0]);else _mathMat32['default'].multiply(this.mats[this.size - 1], m, this.mats[this.size]);
				this.size++;
			}
		}, {
			key: 'pop',
			value: function pop() {
				if (this.size > 0) this.size--;
			}
		}, {
			key: 'top',
			value: function top() {
				return this.mats[this.size - 1];
			}
		}]);

		return MStack;
	})();

	var WebGLRender = (function (_BaseRender) {
		_inherits(WebGLRender, _BaseRender);

		function WebGLRender(proton, element) {
			_classCallCheck(this, WebGLRender);

			_get(Object.getPrototypeOf(WebGLRender.prototype), 'constructor', this).call(this, proton, element);
			this.gl = this.element.getContext('experimental-webgl', {
				antialias: true,
				stencil: false,
				depth: false
			});
			if (!this.gl) alert('Sorry your browser do not suppest WebGL!');
			this.initVar();
			this.setMaxRadius();
			this.initShaders();
			this.initBuffers();
			this.gl.blendEquation(this.gl.FUNC_ADD);
			this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
			this.gl.enable(this.gl.BLEND);
		}

		_createClass(WebGLRender, [{
			key: 'resize',
			value: function resize(width, height) {
				this.umat[4] = -2;
				this.umat[7] = 1;
				this.smat[0] = 1 / width;
				this.smat[4] = 1 / height;
				this.mstack.set(this.umat, 0);
				this.mstack.set(this.smat, 1);
				this.gl.viewport(0, 0, width, height);
				this.element.width = width;
				this.element.height = height;
			}
		}, {
			key: 'setMaxRadius',
			value: function setMaxRadius(radius) {
				this.circleCanvasURL = this.createCircle(radius);
			}
		}, {
			key: 'getVertexShader',
			value: function getVertexShader() {
				var vsSource = ['uniform vec2 viewport;', 'attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat3 tMat;', 'varying vec2 vTextureCoord;', 'varying float alpha;', 'void main() {', '  vec3 v = tMat * vec3(aVertexPosition, 1.0);', '  gl_Position = vec4(v.x, v.y, 0, 1);', '  vTextureCoord = aTextureCoord;', '  alpha = tMat[0][2];', '}'].join('\n');
				return vsSource;
			}
		}, {
			key: 'getFragmentShader',
			value: function getFragmentShader() {
				var fsSource = ['precision mediump float;', 'varying vec2 vTextureCoord;', 'varying float alpha;', 'uniform sampler2D uSampler;', 'uniform vec4 color;', 'uniform bool useTexture;', 'uniform vec3 uColor;', 'void main() {', '  vec4 textureColor = texture2D(uSampler, vTextureCoord);', '  gl_FragColor = textureColor * vec4(uColor, 1.0);', '  gl_FragColor.w *= alpha;', '}'].join('\n');
				return fsSource;
			}
		}, {
			key: 'initVar',
			value: function initVar() {
				this.mstack = new MStack();
				this.umat = _mathMat32['default'].create([2, 0, 1, 0, -2, 0, -1, 1, 1]);
				this.smat = _mathMat32['default'].create([1 / 100, 0, 1, 0, 1 / 100, 0, 0, 0, 1]);
				this.texturebuffers = {};
			}
		}, {
			key: 'start',
			value: function start() {
				_get(Object.getPrototypeOf(WebGLRender.prototype), 'start', this).call(this);
				this.resize(this.element.width, this.element.height);
			}
		}, {
			key: 'blendEquation',
			value: function blendEquation(A) {
				var gl = this.gl;
				gl.blendEquation(gl[A]);
			}
		}, {
			key: 'blendFunc',
			value: function blendFunc(A, B) {
				var gl = this.gl;
				gl.blendFunc(gl[A], gl[B]);
			}
		}, {
			key: 'getShader',
			value: function getShader(gl, str, fs) {
				var shader;
				if (fs) shader = gl.createShader(gl.FRAGMENT_SHADER);else shader = gl.createShader(gl.VERTEX_SHADER);
				gl.shaderSource(shader, str);
				gl.compileShader(shader);

				if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
					alert(gl.getShaderInfoLog(shader));
					return null;
				}
				return shader;
			}
		}, {
			key: 'initShaders',
			value: function initShaders() {
				var gl = this.gl;
				var fragmentShader = this.getShader(gl, this.getFragmentShader(), true);
				var vertexShader = this.getShader(gl, this.getVertexShader(), false);

				this.sprogram = gl.createProgram();
				gl.attachShader(this.sprogram, vertexShader);
				gl.attachShader(this.sprogram, fragmentShader);
				gl.linkProgram(this.sprogram);
				if (!gl.getProgramParameter(this.sprogram, gl.LINK_STATUS)) alert('Could not initialise shaders');

				gl.useProgram(this.sprogram);
				this.sprogram.vpa = gl.getAttribLocation(this.sprogram, 'aVertexPosition');
				this.sprogram.tca = gl.getAttribLocation(this.sprogram, 'aTextureCoord');
				gl.enableVertexAttribArray(this.sprogram.tca);
				gl.enableVertexAttribArray(this.sprogram.vpa);

				this.sprogram.tMatUniform = gl.getUniformLocation(this.sprogram, 'tMat');
				this.sprogram.samplerUniform = gl.getUniformLocation(this.sprogram, 'uSampler');
				this.sprogram.useTex = gl.getUniformLocation(this.sprogram, 'useTexture');
				this.sprogram.color = gl.getUniformLocation(this.sprogram, 'uColor');
				gl.uniform1i(this.sprogram.useTex, 1);
			}
		}, {
			key: 'initBuffers',
			value: function initBuffers() {
				var gl = this.gl;
				this.unitIBuffer = gl.createBuffer();
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer);
				var vs = [0, 3, 1, 0, 2, 3];
				gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vs), gl.STATIC_DRAW);

				var ids = [];
				for (var i = 0; i < 100; i++) ids.push(i);

				var idx;

				idx = new Uint16Array(ids);
				this.unitI33 = gl.createBuffer();
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.unitI33);
				gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);

				ids = [];
				for (i = 0; i < 100; i++) ids.push(i, i + 1, i + 2);

				idx = new Uint16Array(ids);
				this.stripBuffer = gl.createBuffer();
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.stripBuffer);
				gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
			}
		}, {
			key: 'createCircle',
			value: function createCircle() {
				var raidus = arguments.length <= 0 || arguments[0] === undefined ? 32 : arguments[0];

				this.circleCanvasRadius = (0, _util.nhpot)(raidus);
				var canvas = (0, _util.createCanvas)('circle_canvas', this.circleCanvasRadius * 2, this.circleCanvasRadius * 2);
				var context = canvas.getContext('2d');
				context.beginPath();
				context.arc(this.circleCanvasRadius, this.circleCanvasRadius, this.circleCanvasRadius, 0, Math.PI * 2, true);
				context.closePath();
				context.fillStyle = '#FFF';
				context.fill();
				return canvas.toDataURL();
			}
		}, {
			key: 'setImgInCanvas',
			value: function setImgInCanvas(particle) {
				var _w = particle.target.width;
				var _h = particle.target.height;
				var _width = (0, _util.nhpot)(particle.target.width);
				var _height = (0, _util.nhpot)(particle.target.height);
				var _scaleX = particle.target.width / _width;
				var _scaleY = particle.target.height / _height;

				var gl = this.gl;

				if (!this.texturebuffers[particle.transform.src]) this.texturebuffers[particle.transform.src] = [gl.createTexture(), gl.createBuffer(), gl.createBuffer()];
				particle.transform.texture = this.texturebuffers[particle.transform.src][0];
				particle.transform.vcBuffer = this.texturebuffers[particle.transform.src][1];
				particle.transform.tcBuffer = this.texturebuffers[particle.transform.src][2];
				gl.bindBuffer(gl.ARRAY_BUFFER, particle.transform.tcBuffer);
				gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, _scaleX, 0.0, 0.0, _scaleY, _scaleY, _scaleY]), gl.STATIC_DRAW);
				gl.bindBuffer(gl.ARRAY_BUFFER, particle.transform.vcBuffer);
				gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, _w, 0.0, 0.0, _h, _w, _h]), gl.STATIC_DRAW);

				var context = particle.transform.canvas.getContext('2d');
				var data = context.getImageData(0, 0, _width, _height);

				gl.bindTexture(gl.TEXTURE_2D, particle.transform.texture);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, data);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
				gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
				gl.generateMipmap(gl.TEXTURE_2D);
				particle.transform.textureLoaded = true;
				particle.transform.textureWidth = _w;
				particle.transform.textureHeight = _h;
			}
		}, {
			key: 'setStroke',
			value: function setStroke(color, thinkness) {}
		}, {
			key: 'onProtonUpdate',
			value: function onProtonUpdate() {
				//this.gl.clearColor(0, 0, 0, 1);
				//this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
			}
		}, {
			key: 'onParticleCreated',
			value: function onParticleCreated(particle) {
				var _this = this;

				particle.transform.textureLoaded = false;
				particle.transform.tmat = _mathMat32['default'].create();
				particle.transform.tmat[8] = 1;
				particle.transform.imat = _mathMat32['default'].create();
				particle.transform.imat[8] = 1;
				if (particle.target) {
					(0, _util.getImage)(particle.target, particle, true, function (particle) {
						_this.setImgInCanvas(particle);
						particle.transform.oldScale = 1;
					});
				} else {
					(0, _util.getImage)(this.circleCanvasURL, particle, true, function (particle) {
						_this.setImgInCanvas(particle);
						particle.transform.oldScale = particle.radius / _this.circleCanvasRadius;
					});
				}
			}
		}, {
			key: 'onParticleUpdate',
			value: function onParticleUpdate(particle) {
				if (particle.transform.textureLoaded) {
					this.updateMatrix(particle);
					var gl = this.gl;
					gl.uniform3f(this.sprogram.color, particle.transform.rgb.r / 255, particle.transform.rgb.g / 255, particle.transform.rgb.b / 255);
					gl.uniformMatrix3fv(this.sprogram.tMatUniform, false, this.mstack.top());
					gl.bindBuffer(gl.ARRAY_BUFFER, particle.transform.vcBuffer);
					gl.vertexAttribPointer(this.sprogram.vpa, 2, gl.FLOAT, false, 0, 0);
					gl.bindBuffer(gl.ARRAY_BUFFER, particle.transform.tcBuffer);
					gl.vertexAttribPointer(this.sprogram.tca, 2, gl.FLOAT, false, 0, 0);
					gl.bindTexture(gl.TEXTURE_2D, particle.transform.texture);
					gl.uniform1i(this.sprogram.samplerUniform, 0);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer);
					gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
					this.mstack.pop();
				}
			}
		}, {
			key: 'onParticleDead',
			value: function onParticleDead(particle) {}
		}, {
			key: 'updateMatrix',
			value: function updateMatrix(particle) {
				var moveOriginMatrix = makeTranslation(-particle.transform.textureWidth / 2, -particle.transform.textureHeight / 2);
				var translationMatrix = makeTranslation(particle.p.x, particle.p.y);
				var angel = particle.rotation * (Math.PI / 180);
				var rotationMatrix = makeRotation(angel);
				var scale = particle.scale * particle.transform.oldScale;
				var scaleMatrix = makeScale(scale, scale);

				var matrix = matrixMultiply(moveOriginMatrix, scaleMatrix);
				matrix = matrixMultiply(matrix, rotationMatrix);
				matrix = matrixMultiply(matrix, translationMatrix);

				_mathMat32['default'].inverse(matrix, particle.transform.imat);
				matrix[2] = particle.alpha;
				this.mstack.push(matrix);
			}
		}]);

		return WebGLRender;
	})(_BaseRender3['default']);

	exports['default'] = WebGLRender;
	module.exports = exports['default'];

	//makeTranslation,makeRotation, makeScale,
	//matrixMultiply,

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Mat3 = (function () {
		function Mat3() {
			_classCallCheck(this, Mat3);
		}

		_createClass(Mat3, null, [{
			key: "create",
			value: function create(mat3) {
				var mat = new Float32Array(9);
				if (mat3) {
					Mat3.set(mat3, mat);
				}
				return mat;
			}
		}, {
			key: "set",
			value: function set(mat1, mat2) {
				for (var i = 0; i < 9; i++) mat2[i] = mat1[i];
				return mat2;
			}
		}, {
			key: "multiply",
			value: function multiply(mat1, mat2, mat3) {
				var a00 = mat1[0],
				    a01 = mat1[1],
				    a02 = mat1[2],
				    a10 = mat1[3],
				    a11 = mat1[4],
				    a20 = mat1[6],
				    a21 = mat1[7],
				    b00 = mat2[0],
				    b01 = mat2[1],
				    b02 = mat2[2],
				    b10 = mat2[3],
				    b11 = mat2[4],
				    b20 = mat2[6],
				    b21 = mat2[7];

				mat3[0] = b00 * a00 + b01 * a10;
				mat3[1] = b00 * a01 + b01 * a11;
				mat3[2] = a02 * b02;
				mat3[3] = b10 * a00 + b11 * a10;
				mat3[4] = b10 * a01 + b11 * a11;
				mat3[6] = b20 * a00 + b21 * a10 + a20;
				mat3[7] = b20 * a01 + b21 * a11 + a21;

				return mat3;
			}
		}, {
			key: "inverse",
			value: function inverse(mat1, mat3) {
				var a00 = mat1[0],
				    a01 = mat1[1],
				    a10 = mat1[3],
				    a11 = mat1[4],
				    a20 = mat1[6],
				    a21 = mat1[7],
				    b01 = a11,
				    b11 = -a10,
				    b21 = a21 * a10 - a11 * a20;

				var d = a00 * b01 + a01 * b11;
				var id = 1 / d;

				mat3[0] = b01 * id;
				mat3[1] = -a01 * id;
				mat3[3] = b11 * id;
				mat3[4] = a00 * id;
				mat3[6] = b21 * id;
				mat3[7] = (-a21 * a00 + a01 * a20) * id;

				return mat3;
			}
		}, {
			key: "multiplyVec2",
			value: function multiplyVec2(m, vec, mat3) {
				var x = vec[0],
				    y = vec[1];
				mat3[0] = x * m[0] + y * m[3] + m[6];
				mat3[1] = x * m[1] + y * m[4] + m[7];
				return mat3;
			}
		}]);

		return Mat3;
	})();

	exports["default"] = Mat3;
	module.exports = exports["default"];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _PixiRender = __webpack_require__(40);

	var _PixiRender2 = _interopRequireDefault(_PixiRender);

	var _DomRender = __webpack_require__(37);

	var _DomRender2 = _interopRequireDefault(_DomRender);

	var _CanvasRender = __webpack_require__(36);

	var _CanvasRender2 = _interopRequireDefault(_CanvasRender);

	var _WebGLRender = __webpack_require__(41);

	var _WebGLRender2 = _interopRequireDefault(_WebGLRender);

	var _EaselRender = __webpack_require__(38);

	var _EaselRender2 = _interopRequireDefault(_EaselRender);

	var _PixelRender = __webpack_require__(39);

	var _PixelRender2 = _interopRequireDefault(_PixelRender);

	var _BaseRender = __webpack_require__(35);

	var _BaseRender2 = _interopRequireDefault(_BaseRender);

	//the own renderer

	var Renderer = (function () {
		function Renderer(type, proton, element) {
			if (type === undefined) type = 'canvas';

			_classCallCheck(this, Renderer);

			///element dom/div canvas/canvas easeljs/cantainer(or stage)
			this.element = element;
			this.type = type;
			this.proton = proton;
			this.renderer = this.createRenderer();
		}

		_createClass(Renderer, [{
			key: 'start',
			value: function start() {
				this.addEventHandler();
				this.renderer.start();
			}
		}, {
			key: 'stop',
			value: function stop() {
				this.renderer.stop();
			}
		}, {
			key: 'resize',
			value: function resize(width, height) {
				this.renderer.resize(width, height);
			}
		}, {
			key: 'setStroke',
			value: function setStroke(color, thinkness) {
				if (this.renderer.hasOwnProperty('stroke')) this.renderer.setStroke(color, thinkness);else alert('Sorry this renderer do not suppest stroke method!');
			}
		}, {
			key: 'createImageData',
			value: function createImageData(data) {
				if (this.renderer instanceof _PixelRender2['default']) this.renderer.createImageData(data);
			}
		}, {
			key: 'setMaxRadius',
			value: function setMaxRadius(radius) {
				if (this.renderer instanceof _WebGLRender2['default']) this.renderer.setMaxRadius(radius);
			}
		}, {
			key: 'blendEquation',
			value: function blendEquation(A) {
				if (this.renderer instanceof _WebGLRender2['default']) this.renderer.blendEquation(A);
			}
		}, {
			key: 'blendFunc',
			value: function blendFunc(A, B) {
				if (this.renderer instanceof _WebGLRender2['default']) this.renderer.blendFunc(A, B);
			}
		}, {
			key: 'setType',
			value: function setType(type) {
				this.type = type;
				this.renderer = this.getRenderer();
			}
		}, {
			key: 'createRenderer',
			value: function createRenderer() {
				switch (this.type) {
					case 'pixi':
						return new _PixiRender2['default'](this.proton, this.element);
					case 'dom':
						return new _DomRender2['default'](this.proton, this.element);
					case 'canvas':
						return new _CanvasRender2['default'](this.proton, this.element);
					case 'webgl':
						return new _WebGLRender2['default'](this.proton, this.element);
					case 'easel':
						return new _EaselRender2['default'](this.proton, this.element);
					case 'easeljs':
						return new _EaselRender2['default'](this.proton, this.element);
					case 'pixel':
						return new _PixelRender2['default'](this.proton, this.element);
					default:
						return new _BaseRender2['default'](this.proton, this.element);
				}
			}
		}, {
			key: 'render',
			value: function render(callback) {
				this.renderer.render(callback);
			}
		}, {
			key: 'addEventHandler',
			value: function addEventHandler() {
				if (this.onProtonUpdate) this.renderer.onProtonUpdate = this.onProtonUpdate;

				if (this.onParticleCreated) this.renderer.onParticleCreated = this.onParticleCreated;

				if (this.onParticleUpdate) this.renderer.onParticleUpdate = this.onParticleUpdate;

				if (this.onParticleDead) this.renderer.onParticleDead = this.onParticleDead;
			}
		}]);

		return Renderer;
	})();

	exports['default'] = Renderer;
	module.exports = exports['default'];

/***/ }
/******/ ]);