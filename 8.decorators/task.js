function cachingDecoratorNew(func) {
	// Ваш код
	let cache = [];

	function wrapper(...args) {

		let hash = args.join(',');

		const idx = cache.findIndex((item) => item in cache);

		if (idx !== -1) {
			console.log("Из кэша: " + cache[hash]);
			return "Из кэша: " + cache[hash];
		};
		let result = func(...args);
		cache.push(args);

		if (cache.length > 5) {
			cache.shift();
		};
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;

	};

	return wrapper;
};





function debounceDecoratorNew(func, ms) {
	// Ваш код
	let isThrottled = false;
	let timeout;

	return function wrapper(...args) {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			isThrottled = false;
			func.apply(this, args);
		}, ms);

		if (isThrottled) return;

		func.apply(this, args);
		isThrottled = true;
	};
};



function debounceDecorator2(func, ms) {
	// Ваш код
	let isThrottled = false;
	let timeout;
	wrapper.count = 0;

	return function wrapper(...args) {

		clearTimeout(timeout);

		timeout = setTimeout(() => {
			isThrottled = false;
			func.apply(this, args)
			wrapper.count++;
		}, ms);

		if (isThrottled) {
			wrapper.count++;
			return;
		};
		console.log(wrapper.count);
	};

};

