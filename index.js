module.exports = function isClockwise(poly) {
    var sum = 0
    for (var i=0; i<poly.length-1; i++) {
        var t = poly[i],
            next = poly[i+1]
        sum += t[0]*next[1] - next[0] * t[1]
    }
    return sum > 0
}