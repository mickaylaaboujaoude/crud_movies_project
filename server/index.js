const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const mysql = require('mysql')
const config = require('./config');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: config[ 'db' ][ 'password' ],
    database: config[ 'db' ][ 'database' ]
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))


app.post('/api/insert', (req, res) => {
    
    const movieName = req.body.movieName
    const movieReview = req.body.movieReview

    const sqlInsert = 'INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)'
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(err)
    })
});

app.listen(3001, () => {
    console.log('running on port 3001')
});