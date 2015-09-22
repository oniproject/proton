import BaseRender from './BaseRender'

import Mat3 from '../math/Mat3'
import {
	ipot,nhpot,
	//makeTranslation,makeRotation, makeScale,
	//matrixMultiply,
	getImage,
	createCanvas,
} from '../util'

function makeTranslation(tx, ty) {
	return [1, 0, 0, 0, 1, 0, tx, ty, 1]
}

function makeRotation(angleInRadians) {
	var c = Math.cos(angleInRadians)
	var s = Math.sin(angleInRadians)
	return [c, -s, 0, s, c, 0, 0, 0, 1]
}

function makeScale(sx, sy) {
	return [sx, 0, 0, 0, sy, 0, 0, 0, 1]
}

function matrixMultiply(a, b) {
	var a00 = a[0] // 0 * 3 + 0
	var a01 = a[1] // 0 * 3 + 1
	var a02 = a[2] // 0 * 3 + 2
	var a10 = a[3] // 1 * 3 + 0
	var a11 = a[4] // 1 * 3 + 1
	var a12 = a[5] // 1 * 3 + 2
	var a20 = a[6] // 2 * 3 + 0
	var a21 = a[7] // 2 * 3 + 1
	var a22 = a[8] // 2 * 3 + 2

	var b00 = b[0] // 0 * 3 + 0
	var b01 = b[1] // 0 * 3 + 1
	var b02 = b[2] // 0 * 3 + 2
	var b10 = b[3] // 1 * 3 + 0
	var b11 = b[4] // 1 * 3 + 1
	var b12 = b[5] // 1 * 3 + 2
	var b20 = b[6] // 2 * 3 + 0
	var b21 = b[7] // 2 * 3 + 1
	var b22 = b[8] // 2 * 3 + 2

	return [
		a00 * b00 + a01 * b10 + a02 * b20,
		a00 * b01 + a01 * b11 + a02 * b21,
		a00 * b02 + a01 * b12 + a02 * b22,
		a10 * b00 + a11 * b10 + a12 * b20,
		a10 * b01 + a11 * b11 + a12 * b21,
		a10 * b02 + a11 * b12 + a12 * b22,
		a20 * b00 + a21 * b10 + a22 * b20,
		a20 * b01 + a21 * b11 + a22 * b21,
		a20 * b02 + a21 * b12 + a22 * b22,
	]
}


class MStack {
	constructor() {
		this.mats = [];
		this.size = 0;
		for (var i = 0; i < 20; i++)
			this.mats.push(Mat3.create([0, 0, 0, 0, 0, 0, 0, 0, 0]))
	}


	set(m, i) {
		if (i == 0)
			Mat3.set(m, this.mats[0])
		else
			Mat3.multiply(this.mats[i - 1], m, this.mats[i])
		this.size = Math.max(this.size, i + 1)
	}

	push(m) {
		if (this.size == 0)
			Mat3.set(m, this.mats[0])
		else
			Mat3.multiply(this.mats[this.size - 1], m, this.mats[this.size])
		this.size++
	}

	pop() {
		if (this.size > 0)
			this.size--
	}

	top() {
		return (this.mats[this.size - 1])
	}
}

export default class WebGLRender extends BaseRender {
	constructor(proton, element) {
		super(proton, element);
		this.gl = this.element.getContext('experimental-webgl', {
			antialias : true,
			stencil : false,
			depth : false
		});
		if (!this.gl)
			alert('Sorry your browser do not suppest WebGL!');
		this.initVar();
		this.setMaxRadius();
		this.initShaders();
		this.initBuffers();
		this.gl.blendEquation(this.gl.FUNC_ADD);
		this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
		this.gl.enable(this.gl.BLEND);
	}

	resize(width, height) {
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

	setMaxRadius(radius) {
		this.circleCanvasURL = this.createCircle(radius);
	}

	getVertexShader() {
		var vsSource = [
			'uniform vec2 viewport;',
			'attribute vec2 aVertexPosition;',
			'attribute vec2 aTextureCoord;',
			'uniform mat3 tMat;',
			'varying vec2 vTextureCoord;',
			'varying float alpha;',
			'void main() {',
			'  vec3 v = tMat * vec3(aVertexPosition, 1.0);',
			'  gl_Position = vec4(v.x, v.y, 0, 1);',
			'  vTextureCoord = aTextureCoord;',
			'  alpha = tMat[0][2];',
			'}',
		].join('\n');
		return vsSource;
	}

	getFragmentShader() {
		var fsSource = [
			'precision mediump float;',
			'varying vec2 vTextureCoord;',
			'varying float alpha;',
			'uniform sampler2D uSampler;',
			'uniform vec4 color;',
			'uniform bool useTexture;',
			'uniform vec3 uColor;',
			'void main() {',
			'  vec4 textureColor = texture2D(uSampler, vTextureCoord);',
			'  gl_FragColor = textureColor * vec4(uColor, 1.0);',
			'  gl_FragColor.w *= alpha;',
			'}',
		].join('\n');
		return fsSource;
	}

	initVar() {
		this.mstack = new MStack();
		this.umat = Mat3.create([2, 0, 1, 0, -2, 0, -1, 1, 1]);
		this.smat = Mat3.create([1 / 100, 0, 1, 0, 1 / 100, 0, 0, 0, 1]);
		this.texturebuffers = {};
	}

	start() {
		super.start()
		this.resize(this.element.width, this.element.height);
	}

	blendEquation(A) {
		var gl = this.gl
		gl.blendEquation(gl[A]);
	}

	blendFunc(A, B) {
		var gl = this.gl
		gl.blendFunc(gl[A], gl[B]);
	}

	getShader(gl, str, fs) {
		var shader;
		if (fs)
			shader = gl.createShader(gl.FRAGMENT_SHADER);
		else
			shader = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(shader, str);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			alert(gl.getShaderInfoLog(shader));
			return null;
		}
		return shader;
	}

	initShaders() {
		var gl = this.gl
		var fragmentShader = this.getShader(gl, this.getFragmentShader(), true);
		var vertexShader = this.getShader(gl, this.getVertexShader(), false);

		this.sprogram = gl.createProgram();
		gl.attachShader(this.sprogram, vertexShader);
		gl.attachShader(this.sprogram, fragmentShader);
		gl.linkProgram(this.sprogram);
		if (!gl.getProgramParameter(this.sprogram, gl.LINK_STATUS))
			alert('Could not initialise shaders');

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

	initBuffers() {
		var gl = this.gl
		this.unitIBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.unitIBuffer);
		var vs = [0, 3, 1, 0, 2, 3];
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vs), gl.STATIC_DRAW);

		var ids = [];
		for (var i = 0; i < 100; i++)
			ids.push(i);

		var idx

		idx = new Uint16Array(ids);
		this.unitI33 = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.unitI33);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);

		ids = [];
		for ( i = 0; i < 100; i++)
			ids.push(i, i + 1, i + 2);

		idx = new Uint16Array(ids);
		this.stripBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.stripBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idx, gl.STATIC_DRAW);
	}

	createCircle(raidus = 32) {
		this.circleCanvasRadius = nhpot(raidus);
		var canvas = createCanvas('circle_canvas', this.circleCanvasRadius * 2, this.circleCanvasRadius * 2);
		var context = canvas.getContext('2d');
		context.beginPath();
		context.arc(this.circleCanvasRadius, this.circleCanvasRadius, this.circleCanvasRadius, 0, Math.PI * 2, true);
		context.closePath();
		context.fillStyle = '#FFF';
		context.fill();
		return canvas.toDataURL();
	}

	setImgInCanvas(particle) {
		var _w = particle.target.width;
		var _h = particle.target.height;
		var _width = nhpot(particle.target.width);
		var _height = nhpot(particle.target.height);
		var _scaleX = particle.target.width / _width;
		var _scaleY = particle.target.height / _height;

		var gl = this.gl

		if (!this.texturebuffers[particle.transform.src])
			this.texturebuffers[particle.transform.src] = [gl.createTexture(), gl.createBuffer(), gl.createBuffer()];
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

	setStroke(color, thinkness) {

	}

	onProtonUpdate() {
		//this.gl.clearColor(0, 0, 0, 1);
		//this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	}

	onParticleCreated(particle) {
		particle.transform.textureLoaded = false;
		particle.transform.tmat = Mat3.create();
		particle.transform.tmat[8] = 1;
		particle.transform.imat = Mat3.create();
		particle.transform.imat[8] = 1;
		if (particle.target) {
			getImage(particle.target, particle, true, (particle) => {
				this.setImgInCanvas(particle);
				particle.transform.oldScale = 1;
			});
		} else {
			getImage(this.circleCanvasURL, particle, true, (particle) => {
				this.setImgInCanvas(particle);
				particle.transform.oldScale = particle.radius / this.circleCanvasRadius;
			});
		}
	}

	onParticleUpdate(particle) {
		if (particle.transform.textureLoaded) {
			this.updateMatrix(particle);
			var gl = this.gl
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

	onParticleDead(particle) {
		
	}

	updateMatrix(particle) {
		var moveOriginMatrix = makeTranslation(-particle.transform.textureWidth / 2, -particle.transform.textureHeight / 2);
		var translationMatrix = makeTranslation(particle.p.x, particle.p.y);
		var angel = particle.rotation * (Math.PI / 180);
		var rotationMatrix = makeRotation(angel);
		var scale = particle.scale * particle.transform.oldScale;
		var scaleMatrix = makeScale(scale, scale);

		var matrix = matrixMultiply(moveOriginMatrix, scaleMatrix);
		matrix = matrixMultiply(matrix, rotationMatrix);
		matrix = matrixMultiply(matrix, translationMatrix);

		Mat3.inverse(matrix, particle.transform.imat);
		matrix[2] = particle.alpha;
		this.mstack.push(matrix);
	}
}
