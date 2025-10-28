// const {books} = require('../library/tbooks');

abstract class BooksRepository{    
    constructor(public books: IBook[]) {}
    
    getBooks(): IBook[] {
        return this.books;
    }

    getBook(id: string): IBook | null {
        const idx = this.books.findIndex( (el:IBook) => el.id === id);
        if (idx === -1) return null;        
        return this.books[idx];        
    }

    abstract createBook(book: IBook): void;

    abstract updateBook(id: number, updatedBook: IBook): void;

    abstract deleteBook(id: string): void;
}