class PrintEditionItem {

	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	};

	set state(numberState) {

		if (numberState < 0) {
			this.state = 0;
		} else if (numberState > 100) {
			this.state = 100;
		} else {
			this._state = numberState;

		};
	};

	get state() {
		return this._state;
	};

	fix() {
		this.state *= 1.5;
	};
};

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type);
		this.type = "magazine";
	};
};

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(name, releaseDate, pagesCount, state, type);
		this.author = author;
		this.type = "book";
	};
};

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "novel";
	};
};

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "fantastic";
	};
};

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type) {
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "detective";
	};
};



class Library {

	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	};

	addBook(book) {

		if (book.state > 30) {
			this.books.push(book);
		};
	};

	findBookBy = function (type, value) {

		const index = books.findIndex((item, idx) => {

		});
	};



	giveBookByName(bookName) {

		if (books.indexOf(bookName) !== -1) {
			delete books.indexOf(bookName);
		} else {
			return null;
		};

	};


};





