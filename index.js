const xmldoc = require('xmldoc');

function handleAll(elements, buffer) {
	try {
		if (!elements) {
			return;
		}
		for (let i = 0, len = elements.length; i < len; i++) {
			handle(elements[i], buffer);
		}
	} catch (err) { }
}

function handle(element, buffer) {
	const handler = handlers[element.name] || handlers.gotoChildren;
	try {
		handler(element, buffer);
	} catch (err) {
		if (element.name === 'mo' && err.toString().match(/Error: Unsupported operator/)) {
			handlers.mi(element, buffer);
		} else {
			throw err;
		}
	}
}

const handlerApi = {
	handle: handle,
	handleAll: handleAll
};

// element name -> function(element, buffer)
const handlers = {
	// always pass string literals to require for browserify
	math: require('./lib/handlers/math')(handlerApi),
	mi: require('./lib/handlers/mi')(handlerApi),
	mo: require('./lib/handlers/mo')(handlerApi),
	mn: require('./lib/handlers/mn')(handlerApi),
	mfrac: require('./lib/handlers/mfrac')(handlerApi),
	msup: require('./lib/handlers/msup')(handlerApi),
	msub: require('./lib/handlers/msub')(handlerApi),
	mrow: require('./lib/handlers/mrow')(handlerApi),
	msqrt: require('./lib/handlers/msqrt')(handlerApi),
	mover: require('./lib/handlers/mover')(handlerApi),
	mstyle: require('./lib/handlers/mstyle')(handlerApi),
	mtext: require('./lib/handlers/mtext')(handlerApi),
	gotoChildren: require('./lib/handlers/gotoChildren')(handlerApi),
};

function toAsciiMath(mathml) {
	const doc = new xmldoc.XmlDocument(mathml);

	var buffer = [];
	handle(doc, buffer);
	return buffer.join(' ');
}

module.exports = toAsciiMath;
