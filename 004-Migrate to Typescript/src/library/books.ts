import Book from '../classes/TBook'

const stor = {
    books: [
        new Book(
            "Понедельник начинается в субботу", 
            "Класическое фэнтези",
            "Братья Стругацкие",
            true,
            "Monday Begins on Saturday.jpg",
            "Monday Begins on Saturday.jpg",
            "/public/books/Monday Begins on Saturday.jpg"),
        new Book(
            "Охота на овец", 
            "Роман не про овец",
            "Харуки Мураками",
            true,
            "A Wild Sheep Chase.jpg",
            "A Wild Sheep Chase.jpg",
            "/public/books/A Wild Sheep Chase.jpg"),       
    ],
}

import Books from '../models/books'

function preloadBook(book: Book){
    console.log(book)

    const {title, description, authors, favorite, fileCover, fileName, fileBook} = book
    const newBook = new Books({title, description, authors, favorite, fileCover, fileName, fileBook})
    
    try {
        newBook.save()
    } catch (e) {

    }  
}

function preload(){
    const {books} = stor;
    books.forEach((book) => {
        preloadBook(book)
    }); 
}

export = preload