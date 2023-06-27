const express = require('express')
const app = express()
const mysql = require('msql')
const config = require('./config');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: config[ 'db' ][ 'password' ],
    database: config[ 'db' ][ 'database' ]
})


app.get('/', (req, res)=> {
    const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Shrek', 'Good movie')"
    db.query(sqlInsert, (error, result)=> {
        res.send('Inserted');
    })
    
})

app.listen(3001, () => {
    console.log('running on port 3001')
})