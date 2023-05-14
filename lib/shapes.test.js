const {Circle, Square, Triangle} = require("./shapes")

describe("Circle", () => {
	test('renders correctly', () => {
		const shape = new Circle();
		var color = ('purple')
		shape.setColor(color);
		expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
	});
});