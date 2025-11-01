import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import errorMiddleware from './middleware/error'
import preload from './library/books'

import indexRouter from './routes/index'
import booksRouter from './routes/books'

const app = express()
app.use(bodyParser.json())   
// app.use(express.urlencoded())
app.use(bodyParser.urlencoded({ extended: false }))
// app.set("views","src/views")
app.set('view engine', 'ejs')


app.use('/', indexRouter)
app.use('/', booksRouter)

app.use(errorMiddleware);

//const preload = require('./library/books')

async function start(PORT: string | number, MONGODB_URL: string) {
    try {
        await mongoose.connect(MONGODB_URL)
        preload();
        app.listen(PORT, () => {
            console.log(`Server is listening port ${PORT}...`)
        })
    } catch (e) {

    }
}



import MONGODB_URL from './config/mongo.config'
import PORT from './config/server.config'

start(PORT, MONGODB_URL)