var lerp = require('./')

require('tape').test('lerp numbers', function(t) {
	t.equal( lerp(0, 1, 0.5), 0.5, 'numbers work' )
	t.equal( lerp(-1, 1, 0.5), 0.0 )
	t.deepEqual( lerp([0, -1], [1, 1], 0.5), [0.5, 0.0], 'arrays work' )

	var out = [0, 0]
	t.equal( lerp([0, -1], [1, 1], 0.5, out), out, 'out param' )
	t.end()
})