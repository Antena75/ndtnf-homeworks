import express from 'express'
import Book from '../classes/TBook'
import { container } from '../container'
import { BooksRepository } from '../classes/BooksRepository'

const router = express.Router()
const bookrep = container.get(BooksRepository)

router.get('/books', async (req: any, res) => {
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

router.post('/books/create', async (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    const favoriteBl = (favorite == 'true')
    const book = new Book (title, description, authors, favoriteBl, fileCover, fileName, fileBook)

    try {
        const books = await bookrep.createBook(book)

        res.redirect('/books')
    } catch (e) {
        res.status(500).json(e)
    }     
})

router.get('/books/:id', async (req: any, res) => {
    const {id} = req.params

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

    try {
        const book = await bookrep.deleteBook(id)

        res.redirect(`/books`); 
    } catch (e) {
        res.redirect('/404');
    }      
})

export = router