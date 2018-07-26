const moHelpers = require('../mo-helpers');

module.exports = function init() {
	return function handle(element, buffer) {
		const value = element.val.trim();
		const asciiMathSymbol = moHelpers.toAsciiMath(value);

		if (typeof asciiMathSymbol == 'undefined') {
			throw new Error('Unsupported operator: ' + value)
		}

		buffer.push(asciiMathSymbol);
	};
};
