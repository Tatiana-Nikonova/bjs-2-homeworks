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


Student.prototype.getAverage = function (arr) {
	//ваш код
	let i = 0;
	let sum = arr.forEach((item) => i += item);

	let avg = sum / arr.length;
	return avg = Number(avg.toFixed(2));
};

Student.prototype.excludeStudent = function (reason) {
	//ваш код
	//getAverage(arr);

	if (avg < 3) {
		delete this.subject;
		delete this.marks;

		this.excluded = reason;
	};
};














