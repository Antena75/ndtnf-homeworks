import { IBook } from './IBook'
import Book from './TBook'

import { injectable } from 'inversify'
import Books from '../models/books'

@injectable()
export class BooksRepository{
    async createBook(book: IBook):Promise<void> {        
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
        } catch (e) {
            console.log(e)
        }        
    }

    async getBook(id: string):Promise<IBook> {
        try {
            const dbBook = await Books.findById(id).select('-__v')
            const {title, description, authors, favorite, fileCover, fileName, fileBook, _id} = dbBook
            const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook, _id)
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
                const {title, description, authors, favorite, fileCover, fileName, fileBook, _id} = dbBooks[i]
                const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook, _id)
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
        fileBook: string):Promise<void> {
       
        try {
            const dbBook = await Books.findById(id).select('-__v')
            const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook)

            try {
                await Books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName, fileBook})
            } catch (e) {
                console.log(e)
            } 
        } catch (e) {
            console.log(e)
        }  
    }

    async deleteBook(id: string):Promise<void> {
        try {
            const dbBook = await Books.findById(id).select('-__v')

            const {title, description, authors, favorite, fileCover, fileName, fileBook} = dbBook
            const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook)

            await Books.deleteOne({_id: id})

            console.log("Book deleted")
        } catch (e) {
            console.log(e)
        }   
    }
}