var clockwise = require('./')
var test = require('tape').test

test('is clockwise', function(t) {
    var points = [
        [5,0],
        [6,4],
        [4,5],
        [1,5],
        [1,0]
    ]
    var ccw = points.slice().reverse()
    t.equal(clockwise(points), true)
    t.equal(clockwise(ccw), false)
    t.end()
})