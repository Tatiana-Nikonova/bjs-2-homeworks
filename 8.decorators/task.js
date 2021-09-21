function cachingDecoratorNew(func) {
	// Ваш код
	let cache = [];

	function wrapper(...args) {

		let hash = args.join(',');

		const idx = cache.findIndex((item) => item in cache);

		if (idx !== -1) {
			console.log("Из кэша: " + cache[hash]);
			return "Из кэша: " + cache[hash];
		} else {
			let result = func(...args);
			cache.push(args);

			if (cache.length > 5) {
				cache.shift();
			};
			console.log("Вычисляем: " + result);
			return "Вычисляем: " + result;
		};
	};

	return wrapper;
};





function debounceDecoratorNew(func, ms) {
	// Ваш код
	let isThrottled = false;

	return function wrapper(...args) {

		if (isThrottled) return;

		func.apply(this, args);
		isThrottled = true;

		setTimeout(() => {
			isThrottled = false;
			func.apply(this, args);
		}, ms);
	};
};



function debounceDecorator2(func, ms) {
	// Ваш код
	let isThrottled = false;


	return function wrapper(...args) {
		wrapper.count = 0;
		if (isThrottled) {
			return;
		} else {
			func.apply(this, args);
			wrapper.count++;
			isThrottled = true;

			setTimeout(() => {
				isThrottled = false;
				func.apply(this, args);
			}, ms);
		};

		console.log(wrapper.count);
		return wrapper;
	};
};

