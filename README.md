# lerp-array

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Quickly [lerps](https://nodei.co/npm/lerp-array/) two numbers or two parallel arrays of numbers (e.g. vectors, colors, etc). 

```js
var lerp = require('lerp-array')

//RGB colors
var color1 = [0, 255, 0]
var color2 = [255, 0, 0]

//lerp the two
var color3 = lerp(color1, color2, 0.5)
```

## Usage

[![NPM](https://nodei.co/npm/lerp-array.png)](https://nodei.co/npm/lerp-array/)

#### `lerp(v1, v2, t[, out])`

Linearly interpolates `v1` to `v2` using the `t` component. If both `v1` and `v2` are number types, this is equivalent to a straight lerp. If the two are array types, they are lerped in parallel. 

You can optionally specify an `out` parameter to re-use an array object. Otherwise, a new one will be created.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/lerp-array/blob/master/LICENSE.md) for details.
