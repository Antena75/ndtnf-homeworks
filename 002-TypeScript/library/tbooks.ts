const TBook = require('../classes/TBook');

const stor = {
    books: [
        new TBook(
            "Понедельник начинается в субботу", 
            "Класическое фэнтези",
            "Братья Стругацкие",
            true,
            "Monday Begins on Saturday.jpg",
            "Monday Begins on Saturday.jpg",
            "/public/books/Monday Begins on Saturday.jpg"),
        new TBook(
            "Охота на овец", 
            "Роман не про овец",
            "Харуки Мураками",
            true,
            "A Wild Sheep Chase.jpg",
            "A Wild Sheep Chase.jpg",
            "/public/books/A Wild Sheep Chase.jpg")       
    ]
};

module.exports = stor;