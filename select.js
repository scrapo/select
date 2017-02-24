const each = require('each');
const flatten = require('flatten');

module.exports = function select(context, selector) {
	selector = selector.slice();
	if (Array.isArray(context)) {
		return flatten(each(context, function (item) { return select(item, selector); }));
	}
	const key = Array.isArray(selector) ? selector.shift() : selector;
	if (key === undefined) {
		return context;
	}
	if (context[key] === undefined) {
		return;
	}
	return select(context[key], selector);
};