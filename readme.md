# mathml-to-asciimath

Convert subset of MathML to text so that it can be parsed by BigEval node library.

## Usage

```
var convert = require('mathml-to-asciimath');

var mathml = '<math><mn>1</mn><mo>+</mo><mn>2</mn></math>';
convert(mathml); // => '1 + 2'
```

## Running Tests

    npm test

## This module is not

- comprehensive
- performant

## License

MIT
