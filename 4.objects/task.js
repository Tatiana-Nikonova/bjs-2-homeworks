function Student(name, gender, age) {
	// Ваш код
	this.name = name;
	this.gender = gender;
	this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
	//ваш код
	this.subject = subjectName;
};

// ваш код для остальных методов


Student.prototype.addMark = function (...mark) {
	//ваш код

	if (this.marks === undefined) {
		// добавить первую оценку 
		this.marks = mark;

	} else {
		// добавить вторую и последующие оценки в массив
		this.marks.push(...mark);
	};
	let arr = this.marks;
	return arr;
};


Student.prototype.getAverage = this.marks.reduce((acc = 0, item, idx, arr) => {
	acc += item;
	console.log(acc);

	if (idx === arr.length - 1) {
		let avg = acc / arr.length;
		return Number(avg.toFixed(2));
	} else {
		return acc = avg;
	};
});


Student.prototype.excludeStudent = function (reason) {
	//ваш код

	let avg = getAverage();

	if (avg < 3) {
		delete this.subject;
		delete this.marks;

		this.excluded = reason;
	};
};














