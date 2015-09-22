import Span from './math/Span'

export function setSpanValue(a, b, c) {
	if (a instanceof Span) {
		return a
	} else {
		if (!b) {
			return new Span(a)
		} else {
			if (!c)
				return new Span(a, b)
			else
				return new Span(a, b, c)
		}
	}
}

export function getSpanValue(pan) {
	if (pan instanceof Span)
		return pan.getValue()
	else
		return pan
}

export function randomAToB(a, b, INT) {
	if (!INT)
		return a + Math.random() * (b - a )
	else
		return Math.floor(Math.random() * (b - a)) + a
}

var PI_180 = Math.PI / 180
export function degreeTransform(a) {
	return a * PI_180
}

export function hexToRGB(h) {
	var hex16 = (h.charAt(0) == "#") ? h.substring(1, 7) : h
	var r = parseInt(hex16.substring(0, 2), 16)
	var g = parseInt(hex16.substring(2, 4), 16)
	var b = parseInt(hex16.substring(4, 6), 16)

	return {r, g, b}
}

export function rgbToHex(rbg) {
	return 'rgb(' + rbg.r + ', ' + rbg.g + ', ' + rbg.b + ')'
}

export function getImage(img, particle, drawCanvas, fun) {
	if ( typeof (img) == 'string') {
		loadAndSetImage(img, particle, drawCanvas, fun)
	} else if ( typeof (img) == 'object') {
		loadAndSetImage(img.src, particle, drawCanvas, fun)
	} else if ( img instanceof Image) {
		loadedImage(img.src, particle, drawCanvas, fun, img)
	}
}

export var TextureBuffer = {}
export var TextureCanvasBuffer = {}

export function loadedImage(src, particle, drawCanvas, fun, target) {
	particle.target = target
	particle.transform.src = src
	if (!TextureBuffer[src])
		TextureBuffer[src] = particle.target
	if (drawCanvas) {
		if (TextureCanvasBuffer[src]) {
			particle.transform.canvas = TextureCanvasBuffer[src]
		} else {
			var _width = nhpot(particle.target.width)
			var _height = nhpot(particle.target.height)
			particle.transform.canvas = createCanvas('canvas' + src, _width, _height)
			var context = particle.transform.canvas.getContext('2d')
			context.drawImage(particle.target, 0, 0, particle.target.width, particle.target.height)
			TextureCanvasBuffer[src] = particle.transform.canvas
		}
	}
	if (fun)
		fun(particle)
}

export function loadAndSetImage(src, particle, drawCanvas, fun) {
	if (TextureBuffer[src]) {
		loadedImage(src, particle, drawCanvas, fun, TextureBuffer[src])
	} else {
		var myImage = new Image()
		myImage.onload = function(e) {
			loadedImage(src, particle, drawCanvas, fun, e.target)
		}
		myImage.src = src
	}
}

export function ipot(length) {
	return (length & (length - 1)) == 0
}

export function nhpot(length) {
	--length
	for (var i = 1; i < 32; i <<= 1) {
		length = length | length >> i
	}
	return length + 1
}

export function createCanvas($id, $width, $height, $position) {
	var element = document.createElement('canvas')
	var position = $position ? $position : 'absolute'
	element.id = $id
	element.width = $width
	element.height = $height
	element.style.position = position
	element.style.opacity = 0
	transformDom(element, -500, -500, 0, 0)
	return element
}

export function transformDom($div, $x, $y, $scale, $rotate) {
	var translate = 'translate(' + $x + 'px, ' + $y + 'px) '
	var scale = 'scale(' + $scale + ') '
	var rotate = 'rotate(' + $rotate + 'deg)'
	$div.style.WebkitTransform = translate + scale + rotate
	$div.style.MozTransform = translate + scale + rotate
	$div.style.OTransform = translate + scale + rotate
	$div.style.msTransform = translate + scale + rotate
	$div.style.transform = translate + scale + rotate
}
