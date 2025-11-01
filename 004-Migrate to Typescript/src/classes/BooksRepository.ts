import { IBook } from './IBook'
import Book from './TBook'

import { injectable } from 'inversify'
import Books from '../models/books'

@injectable()
export class BooksRepository{
    async createBook(book: IBook):Promise<IBook> {        

        const newBook = new Books({
            title: book.title,
            description: book.description,
            authors: book.authors,
            favorite: book.favorite,
            fileCover: book.fileCover,
            fileName: book.fileName,
            fileBook: book.fileBook
        })
    
        try {
            await newBook.save()
            return book
        } catch (e) {
            console.log(e)
            return null
        }        
    }

    async getBook(id: string):Promise<IBook> {

        try {
            const dbBook = await Books.findById(id).select('-__v')
            const {title, description, authors, favorite, fileCover, fileName, fileBook} = dbBook
            const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook)
            console.log(book)
            return book
        } catch (e) { 
            console.log(e)
            return null
        }
    }

    async getBooks():Promise<IBook[]> {
        try {
            const dbBooks = await Books.find().select('-__v')
            let books: Book[] = []
            let i: number
            for (i = 0; i < dbBooks.length; i++ ){
                const {title, description, authors, favorite, fileCover, fileName, fileBook} = dbBooks[i]
                const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook)
                books.push(book)          
            }
            return books;
        } catch (e) {
            console.log(e)
            return null
        }  
    }

    async updateBook(
        id: string,
        title: string,
        description: string,
        authors: string,
        favorite: boolean,
        fileCover: string,
        fileName: string,
        fileBook: string):Promise<IBook> {
       
        try {
            const dbBook = await Books.findById(id).select('-__v')
            const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook)

            try {
                await Books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName, fileBook})

                return book
            } catch (e) {
                return null
            } 
        } catch (e) {
            console.log(e)
            return null
        }  
    }

    async deleteBook(id: string):Promise<void> {

        try {
            const dbBook = await Books.findById(id).select('-__v')

            const {title, description, authors, favorite, fileCover, fileName, fileBook} = dbBook
            const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook)

            await Books.deleteOne({_id: id})

            console.log("Book deleted")
            // return book
        } catch (e) {
            console.log(e)
            // return null
        }   
    }
}