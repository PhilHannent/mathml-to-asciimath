const toAsciiMath = require('..');

exports['Throws Error for unsupported element'] = function (test) {
	const mathml = '<math><blah>4</blah></math>';

	test.throws(function () {
		toAsciiMath(mathml);
	}, /Unsupported element/);

	test.done();
};

exports['Throws Error for unsupported operator'] = function (test) {
	const mathml = '<math><mn>4</mn><mo>weird</mo></math>';

	test.throws(function () {
		toAsciiMath(mathml);
	}, /Unsupported operator/);

	test.done();
};
