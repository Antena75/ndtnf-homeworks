const express = require('express')
const router = express.Router()
module.exports = router

const Books = require('../models/books')

router.get('/books', async (req, res) => {

    try {
        const books = await Books.find().select('-__v')
        res.render("books/index", {
            title: "Список книг",
            books: books,
        });  
    } catch (e) {
        res.status(500).json(e)
    }  
}) 

router.get('/books/create', (req, res) => {
    res.render("books/create", {
        title: "Добавить новую книгу",
        book: {}
    })
})

router.post('/books/create', async (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName, fileBook} = req.body
    const newBook = new Books({title, description, authors, favorite, fileCover, fileName, fileBook})

    try {
        await newBook.save()
        res.redirect('/books')
    } catch (e) {
        res.status(500).json(e)
    }     
})

router.get('/books/:id', async (req, res) => {
    const {id} = req.params
    console.log(id)

    try {
        const book = await Books.findById(id).select('-__v')
        console.log(`book - ${book}`)

        res.render("books/view", {
            title: "Просмотреть карточку книги",
            book: book
        })        
    } catch (e) {
        res.redirect('/404')
    }  
})

router.get('/books/update/:id', async (req, res) => {
    const {id} = req.params

    try {
        const book = await Books.findById(id).select('-__v')
        res.render("books/update", {
            title: "Редактирование атрибутов книги",
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
        await Books.findByIdAndUpdate(id, {title, description, authors, favorite, fileCover, fileName, fileBook})
        res.redirect(`/books/${id}`);
    } catch (e) {
        res.redirect('/404')
    } 
})

router.post('/books/delete/:id', async (req, res) => {
    const {id} = req.params

    try {
        await Books.deleteOne({_id: id})
        res.redirect(`/books`); 
    } catch (e) {
        res.redirect('/404');
    }      
})   