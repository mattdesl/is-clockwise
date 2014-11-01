# is-clockwise

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Returns true if the sum of signed distances is greater than zero, which can be used as a quick test for convex polygon orientation.

```js
var clockwise = require('is-clockwise')
var points = [[25, 10], [100, 50], [10, 10]]
console.log(clockwise(points))
```

## Usage

[![NPM](https://nodei.co/npm/is-clockwise.png)](https://nodei.co/npm/is-clockwise/)

#### `isClockwise(points)`

Returns true if the points are clockwise, assuming cartesian space.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/is-clockwise/blob/master/LICENSE.md) for details.
