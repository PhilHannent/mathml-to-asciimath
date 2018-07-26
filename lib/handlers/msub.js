module.exports = function init(handlerApi) {

	return function handle(element, buffer) {
		const firstChild = element.children[0];
		const secondChild = element.children[1];

		handlerApi.handle(firstChild, buffer);
		buffer.push('_');
		handlerApi.handle(secondChild, buffer);
	};
};
