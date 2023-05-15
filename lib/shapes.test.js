const {Circle, Square, Triangle} = require("./shapes")

//Checks the Circle shape
describe("Circle", () => {
	test('renders correctly', () => {
		const shape = new Circle();
		var color = ('blue')
		shape.setColor(color);
		expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
	});
});

//Checks the Square shape
describe("Square", () => {
	test('renders correctly', () => {
		const shape = new Square();
		var color = ('orange')
		shape.setColor(color);
		expect(shape.render()).toEqual(`<rect x="50" y="20" width="200" height="250" fill="${color}"/>`);
	});
});

//Checks the Triangle shape
describe("Triangle", () => {
	test('renders correctly', () => {
		const shape = new Triangle();
		var color = ('red')
		shape.setColor(color);
		expect(shape.render()).toEqual(`<polygon points="150 0, 300 180, 0 180" fill="${color}"/>`);
	});
});