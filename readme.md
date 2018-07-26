# mathml-to-asciimath

Convert subset of MathML to text so that it can be parsed by BigEval node library.

## Usage

```
const convert = require('mathml-to-asciimath');

const mathml = '<math><mn>1</mn><mo>+</mo><mn>2</mn></math>';
convert(mathml); // => '1 + 2'
```

## Running Tests

    npm test

## This module is based on someone else's work

https://github.com/learningobjectsinc/mathml-to-asciimath

## License

MIT
