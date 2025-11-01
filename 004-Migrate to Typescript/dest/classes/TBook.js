"use strict";
var uuid_1 = require("uuid");
var Book = /** @class */ (function () {
    function Book(title, description, authors, favorite, fileCover, fileName, fileBook, id) {
        if (id === void 0) { id = (0, uuid_1.v4)(); }
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
