module.exports = function init(handlerApi) {

	return function handle(element, buffer) {
		const base = element.children[0];
		const overscript = element.children[1];

		handlerApi.handleAll([overscript, base], buffer);
	};
};
