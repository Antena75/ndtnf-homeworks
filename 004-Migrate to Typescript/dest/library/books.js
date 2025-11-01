"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TBook_1 = __importDefault(require("../classes/TBook"));
var stor = {
    books: [
        new TBook_1.default("Понедельник начинается в субботу", "Класическое фэнтези", "Братья Стругацкие", true, "Monday Begins on Saturday.jpg", "Monday Begins on Saturday.jpg", "/public/books/Monday Begins on Saturday.jpg"),
        new TBook_1.default("Охота на овец", "Роман не про овец", "Харуки Мураками", true, "A Wild Sheep Chase.jpg", "A Wild Sheep Chase.jpg", "/public/books/A Wild Sheep Chase.jpg"),
    ],
};
var books_1 = __importDefault(require("../models/books"));
function preloadBook(book) {
    console.log(book);
    var title = book.title, description = book.description, authors = book.authors, favorite = book.favorite, fileCover = book.fileCover, fileName = book.fileName, fileBook = book.fileBook;
    var newBook = new books_1.default({ title: title, description: description, authors: authors, favorite: favorite, fileCover: fileCover, fileName: fileName, fileBook: fileBook });
    try {
        newBook.save();
    }
    catch (e) {
    }
}
function preload() {
    var books = stor.books;
    books.forEach(function (book) {
        preloadBook(book);
    });
}
module.exports = preload;
