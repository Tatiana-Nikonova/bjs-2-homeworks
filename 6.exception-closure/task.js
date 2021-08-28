function parseCount(value) {
	let res = Number.parseInt(value);
	if (isNaN(res)) {
		throw new Error('Невалидное значение');
	};

	return res;
};

function validateCount(value) {

	try {
		return parseCount(value);
	} catch (e) {
		return e;
	};
};


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		};
	};

	getPerimeter() {
		return this.a + this.b + this.c;
	};

	getArea() {
		let S = this.getPerimeter() / 2;
		return +Math.sqrt((S * (S - this.a) * (S - this.b) * (S - this.c))).toFixed(3);
	};
};

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return new class SimpleClass {
			getArea = () => 'Ошибка! Треугольник не существует';
			getPerimeter = () => 'Ошибка! Треугольник не существует';
		};
	};
};

