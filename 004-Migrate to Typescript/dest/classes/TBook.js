"use strict";
var Book = /** @class */ (function () {
    function Book(title, description, authors, favorite, fileCover, fileName, fileBook, id) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        this.id = id;
    }
    return Book;
}());
module.exports = Book;
