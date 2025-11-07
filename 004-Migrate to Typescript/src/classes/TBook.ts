import { IBook } from './IBook';
import mongoose from 'mongoose'

class Book implements IBook{
    
    title: string;
    description: string; 
    authors: string;
    favorite: boolean;
    fileCover: string;
    fileName: string;
    fileBook: string;
    id: mongoose.Types.ObjectId;

    constructor(
            title: string,
            description: string, 
            authors: string,
            favorite: boolean,
            fileCover: string,
            fileName: string,
            fileBook: string,
            id?: mongoose.Types.ObjectId){
        
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
