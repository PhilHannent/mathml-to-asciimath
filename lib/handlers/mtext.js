module.exports = function init() {
	return function handle(element, buffer) {
		const value = element.val.trim();
		buffer.push('text(' + value + ')');
	};
};
