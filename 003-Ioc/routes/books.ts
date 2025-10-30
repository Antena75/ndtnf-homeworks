import express from 'express'
const router = express.Router()
module.exports = router

import { Book } from '../classes/TBook'
import { container } from '../container'
import { BooksRepository } from '../classes/BooksRepository'

router.get('/books', async (req: any, res) => {
    const bookrep = container.get(BooksRepository)

    try {
        const books = await bookrep.getBooks()

        res.render("books/index", {
            title: "Список книг",
            user: req.user,
            books: books,
        });  
    } catch (e) {
        res.status(500).json(e)
    }  
}) 

router.get('/books/create', (req: any, res) => {
    res.render("books/create", {
        title: "Добавить новую книгу",
        user: req.user,
        book: {}
    })
})

router.post('/books/create',
    async (req: any, res) => {

    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body

    const book = new Book (title, description, authors, favorite, fileCover, fileName, fileBook)
    const bookrep = container.get(BooksRepository)

    try {
        const books = await bookrep.createBook(book)
        res.redirect('/books')
    } catch (e) {
        res.status(500).json(e)
    }     
})

router.get('/books/:id', async (req: any, res) => {
    const {id} = req.params
    const bookrep = container.get(BooksRepository)

    try {
        const book = await bookrep.getBook(id)

        res.render("books/view", {
            title: "Просмотреть карточку книги",
            user : req.user,
            book : book,
        })        
    } catch (e) {
        console.log(`Ошибка при обращении к книге`)
        console.log(e)
        res.redirect('/404')
    }  
})

router.get('/books/update/:id', async (req: any, res) => {
    const {id} = req.params

    const bookrep = container.get(BooksRepository)

    try {
        const book = await bookrep.getBook(id)

        res.render("books/update", {
            title: "Редактирование атрибутов книги",
            user: req.user,
            book: book,
        })        
    } catch (e) {
        res.redirect('/404')
    } 
})

router.post('/books/update/:id', async (req, res) => {
    const {id} = req.params
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    const favorite_bool = favorite === 'on' ? true: false

    const bookrep = container.get(BooksRepository)

    try {   
        const book = await bookrep.updateBook(id, title, description, authors, favorite, fileCover, fileName, fileBook)

        res.redirect(`/books/${id}`);
    } catch (e) {
        console.log(`Ошибка при обращении к книге`)
        console.log(e)
        res.redirect('/404')
        return        
    }  
})

router.post('/books/delete/:id', async (req, res) => {
    const {id} = req.params

    const bookrep = container.get(BooksRepository)

    try {
        const book = bookrep.deleteBook(id)

        res.redirect(`/books`); 
    } catch (e) {
        res.redirect('/404');
    }      
})   