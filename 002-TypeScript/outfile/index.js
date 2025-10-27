"use strict";
const { books } = require('../library/tbooks');
class BooksRepository {
    createBook(book) {
        const idx = books.findIndex((el) => el.id === book.id);
        if (idx !== -1)
            return books[idx];
        books.push(book);
    }
    getBook(id) {
        const idx = books.findIndex((el) => el.id === id);
        if (idx === -1)
            return null;
        return books[idx];
    }
    getBooks() {
        return books;
    }
    updateBook(id, title, description, authors, favorite, fileCover, fileName, fileBook) {
        const idx = books.findIndex((el) => el.id === id);
        if (idx === -1)
            return;
        books[idx].title = title;
        books[idx].description = description;
        books[idx].authors = authors;
        books[idx].favorite = favorite;
        books[idx].fileCover = fileCover;
        books[idx].fileName = fileName;
        books[idx].fileBook = fileBook;
    }
    deleteBook(id) {
        const idx = books.findIndex((el) => el.id === id);
        if (idx === -1)
            return;
        let book = books[idx];
        books.splice(idx, 1);
    }
}
const { v4: uuid } = require('uuid');
class Book {
    constructor(title, description, authors, favorite, fileCover, fileName, fileBook, id = uuid()) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        this.id = id;
    }
}
module.exports = Book;
const TBook = require('../classes/TBook');
const stor = {
    books: [
        new TBook("Понедельник начинается в субботу", "Класическое фэнтези", "Братья Стругацкие", true, "Monday Begins on Saturday.jpg", "Monday Begins on Saturday.jpg", "/public/books/Monday Begins on Saturday.jpg"),
        new TBook("Охота на овец", "Роман не про овец", "Харуки Мураками", true, "A Wild Sheep Chase.jpg", "A Wild Sheep Chase.jpg", "/public/books/A Wild Sheep Chase.jpg")
    ]
};
module.exports = stor;