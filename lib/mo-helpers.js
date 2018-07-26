// value in <mo> -> AsciiMath symbol
const moToAsciiMath = {
	'+': '+',
	'-': '-',
	'−': '-',
	'&sdot;': '*',
	'&Star;': '**',
	'&times;': 'xx',
	'×': 'xx',
	'/': '÷',
	'÷': '÷',
	'&divide;': '÷',
	'=': '=',
	'&ne;': '!=',
	'≠': '!=',
	'<': '<',
	'>': '>',
	'&le;': '<=',
	'&ge;': '>=',
	'(': '(',
	')': ')',
	'&asymp;': '~~',
	'[': '[',
	']': ']',
	',': ',',
	'{': '{',
	'}': '}',
	'&macr;': 'bar',
	'&rarr;': 'vec',
	'&harr;': 'line',
	'\u23DC': 'arc',
	'&plusmn;': '+-',
	'?': '?',
	'&ang;': '/_',
	'&deg;': 'deg',
	'&Delta;': 'Delta',
	'&Gamma;': 'Gamma',
	'&Lambda;': 'Lambda',
	'&Omega;': 'Omega',
	'&Phi;': 'Phi',
	'&Pi;': 'Pi',
	'&Sigma;': 'Sigma',
	'&Theta;': 'Theta',
	'&Xi;': 'Xi',
	'|': '|',
};

exports.toAsciiMath = function toAsciiMath(mo) {
	return moToAsciiMath[mo];
};

exports.isOpenOperator = function isOpenOperator(operator) {
	return ['(', '[', '{', '|'].indexOf(operator) !== -1;
};

exports.isCloseOperator = function isCloseOperator(operator) {
	return [')', ']', '}', '|'].indexOf(operator) != -1;
};
