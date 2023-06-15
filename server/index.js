const express = require('express')
const app = express()
const mysql = require('msql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: ''
    database: 'database'
})

app.get('/', (req, res)=> {
    res.send('hello world dude');
})

app.listen(3001, () => {
    console.log('running on port 3001')
})