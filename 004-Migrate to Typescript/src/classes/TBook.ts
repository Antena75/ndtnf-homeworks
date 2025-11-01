import { v4 as uuid } from 'uuid';
import { IBook } from './IBook';

class Book implements IBook{
    
    title: string;
    description: string; 
    authors: string;
    favorite: boolean;
    fileCover: string;
    fileName: string;
    fileBook: string;
    id: string;

    constructor(
            title: string,
            description: string, 
            authors: string,
            favorite: boolean,
            fileCover: string,
            fileName: string,
            fileBook: string,
            id: string = uuid()){
        
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
export = Book;
