const express = require('express')
const serverless = require('serverless-http')
const films = require('./films.json');

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/films', (req, res) => {

    const { id } = req.query

    if (!id) res.json(films)
    else {
        const film = films.find((film) => film.id == id )
        if (film)
            res.json(film) 
        else
            res.json('Code: 404')
    }
})
   
module.exports.handler = serverless(app)  