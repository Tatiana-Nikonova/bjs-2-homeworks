function compareArrays(arr1, arr2) {

	// Ваш код
	if (arr1.length === arr2.length) {
		let result = arr1.every((item, idx) => arr1[idx] === arr2[idx]);

		return result;
	} else {
		return false;
	};

};




function advancedFilter(arr) {
	let resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);

	// Ваш код

	return resultArr; // array
}
