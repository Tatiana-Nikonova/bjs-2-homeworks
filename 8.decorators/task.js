function cachingDecoratorNew(func) {
	// Ваш код
	let cache = {};

	function wrapper(...args) {

		cache.hash = args.join(',');

		const idx = cache.findIndex((item) => item in cache.hash);

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

	function wrapper(...args) {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			isThrottled = false;
			func.apply(this, args);
		}, ms);

		if (isThrottled) return;

		func.apply(this, args);
		isThrottled = true;
	};
	return wrapper;
};



function debounceDecorator2(func, ms) {
	// Ваш код
	let isThrottled = false;
	let timeout;
	wrapper.count = 0;

	function wrapper(...args) {

		clearTimeout(timeout);

		timeout = setTimeout(() => {
			isThrottled = false;
			func.apply(this, args);
			wrapper.count++;
		}, ms);
		func.apply(this, args);
		wrapper.count++;

		if (isThrottled) {
			return;
		};

		func.apply(this, args);
		wrapper.count++;
		isThrottled = true;

		console.log(wrapper.count);
	};
	return wrapper;
};

