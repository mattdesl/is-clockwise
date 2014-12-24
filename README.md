# is-clockwise

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Returns true if the sum of signed distances is greater than zero, which can be used as a quick test for convex polygon orientation. 

```js
var isClockwise = require('is-clockwise')
var points = [ [0, 0], [1, 1], [1, 0], [0, 0] ]

var cw = isClockwise(points)

console.log(cw) // true
```

See [robust-orientation](https://www.npmjs.com/package/robust-orientation) for a stronger test that handles floating point errors and other edge cases.

## Usage

[![NPM](https://nodei.co/npm/is-clockwise.png)](https://nodei.co/npm/is-clockwise/)

#### `isClockwise(points)`

Returns true if the points are clockwise, false if counter-clockwise. Assuming cartesian space.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/is-clockwise/blob/master/LICENSE.md) for details.
