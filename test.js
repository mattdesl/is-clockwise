var clockwise = require('./')
var test = require('tape').test

test('is clockwise', function(t) {
    var poly = [
        [0, 0],
        [1, 1],
        [1, 0],
        [0, 0]
    ]
    var cw = clockwise(poly)
    t.equal(cw, true, 'should be clockwise')

    poly = [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 0]
    ]
    var ccw = clockwise(poly)
    t.equal(ccw, false, 'should be counter-clockwise')
    t.end()
})