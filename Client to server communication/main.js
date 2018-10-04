const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database("Database.db")

const querry = "CREATE TABLE IF NOT EXISTS "
db.run()

app.get("/", function(req, res){
    
    res.send("Hello, World")
})


app.listen(8080)