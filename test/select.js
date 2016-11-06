const assert = require('assert');
const select = require('../select');

suite('select', function () {
	test('with context object and selector array returns array', function () {
		assert.deepStrictEqual(select({a: {b: {c: 42}}}, ['a']), {b: {c: 42}});
	});
	test('with context object and selector array returns array', function () {
		assert.deepStrictEqual(select({a: {b: {c: {d: [{e: 'Ee #1'}, {e: 'Ee #2'}]}}}}, ['a', 'b', 'c', 'd', 'e']), ['Ee #1', 'Ee #2']);
	});
	test('with context object and selector array returns string', function () {
		assert.deepStrictEqual(select({a: {b: {c: {d: [{e: 'Ee #1'}]}}}}, ['a', 'b', 'c', 'd', 'e']), 'Ee #1');
	});
	test('with context object and selector array returns object', function () {
		assert.deepStrictEqual(select({a: {b: {c: {d: [{e: {f: 'Ee #1'}}]}}}}, ['a', 'b', 'c', 'd', 'e']), {f: 'Ee #1'});
	});
	test('with context object and empty selector array returns context object', function () {
		const context = {a: {b: {c: {d: [{e: {f: 'Ee #1'}}]}}}};
		assert.deepStrictEqual(select(context, []), context);
	});
});