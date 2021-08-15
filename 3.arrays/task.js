function compareArrays(arr1, arr2) {

	// Ваш код
	let result = arr1.every((item, idx) => {
		if (arr1[item] === arr2[item] && arr1.length === arr2.length) return true;
		return false;
	});

	return result;
};




function advancedFilter(arr) {
	let resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);

	// Ваш код

	return resultArr; // array
}
