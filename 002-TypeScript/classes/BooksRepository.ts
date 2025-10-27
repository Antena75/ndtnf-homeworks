const {books} = require('../library/tbooks');

abstract class BooksRepository{
    createBook(book: IBook):void {        
        const idx = books.findIndex( (el:IBook) => el.id === book.id);
        if (idx !== -1) return books[idx];
        books.push(book);
    }
    getBook(id: string):IBook | null {
        const idx = books.findIndex( (el:IBook) => el.id === id);
        if (idx === -1) return null;        
        return books[idx];        
    }
    getBooks():IBook[] {
        return books;
    }
    updateBook(
        id: string, 
        title: string, 
        description: string, 
        authors: string, 
        favorite: boolean, 
        fileCover: string, 
        fileName: string, 
        fileBook: string):void {
            
        const idx = books.findIndex( (el:IBook) => el.id === id);
        if (idx === -1) return;   
        books[idx].title = title;     
        books[idx].description = description;   
        books[idx].authors = authors;    
        books[idx].favorite = favorite;     
        books[idx].fileCover = fileCover;     
        books[idx].fileName = fileName;     
        books[idx].fileBook = fileBook;     
    }
    deleteBook(id: string): void {
        const idx = books.findIndex( (el:IBook) => el.id === id);
        if (idx === -1) return; 
        let book = books[idx];       
        books.splice(idx, 1);
    }
}
