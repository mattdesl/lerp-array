var lerp = require('lerp')

module.exports = function lerpValues(value1, value2, t, out) {
    if (typeof value1 === 'number'
            && typeof value2 === 'number')
        return lerp(value1, value2, t)
    else { //assume array
        out = out||new Array(value1.length)
        for (var i=0; i<value1.length; i++) 
            out[i] = lerp(value1[i], value2[i], t)
        return out
    }
}