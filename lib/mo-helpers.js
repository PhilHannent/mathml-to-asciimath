// value in <mo> -> AsciiMath symbol
var moToAsciiMath = {
  '+'       : '+',
  '-'       : '-',
  '&sdot;'  : '*',
  '&Star;'  : '**',
  '&times;' : 'xx',
  '/'       : '//',
  '&divide;': '-:',
  '='       : '=',
  '&ne;'    : '!=',
  '<'       : '<',
  '>'       : '>',
  '&le;'    : '<=',
  '&ge;'    : '>=',
  '('       : '(',
  ')'       : ')',
  '&asymp;' : '~~',
  '['       : '[',
  ']'       : ']',
  ','       : ',',
  '{'       : '{',
  '}'       : '}',
  '&macr;'  : 'bar',
  '&rarr;'  : 'vec',
  '&harr;'  : 'line',
  '\u23DC' : 'arc',
  '&plusmn;': '+-',
  '?'       : '?',
  '&ang;'   : '/_',
  '&deg;'   : 'deg',
  '&Delta;' : 'Delta',
  '&Gamma;' : 'Gamma',
  '&Lambda;': 'Lambda',
  '&Omega;' : 'Omega',
  '&Phi;'   : 'Phi',
  '&Pi;'    : 'Pi',
  '&Sigma;' : 'Sigma',
  '&Theta;' : 'Theta',
  '&Xi;'    : 'Xi',
  // added by zw
  '−'       : '-',
  '×'       : 'xx',
  '≠'       : '!=',
  '|'       : '|',
};

exports.toAsciiMath = function toAsciiMath(mo) {
  return moToAsciiMath[mo];
};

exports.isOpenOperator = function isOpenOperator(operator) {
  return ['(', '[', '{'].indexOf(operator) != -1;
};

exports.isCloseOperator = function isCloseOperator(operator) {
  return [')', ']', '}'].indexOf(operator) != -1;
};
