const express = require('express')
const mongoose = require('mongoose')

const dotenv = require('dotenv').config();

const errorMiddleware = require('./middleware/error');

const indexRouter = require('./routes/index')
const booksRouter = require('./routes/books')

const app = express()
app.use(express.json())   
app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/', booksRouter)

app.use(errorMiddleware);

const preload = require('./library/books')

async function start(PORT, UrlDB) {
    try {
        await mongoose.connect(UrlDB)
        preload();
        app.listen(PORT, () => {
            console.log(`Server is listening port ${PORT}...`)
        })
    } catch (e) {

    }
}

const UrlDB = process.env.UrlDB
const PORT = process.env.PORT
start(PORT, UrlDB)