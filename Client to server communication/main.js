const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')

const db = new sqlite3.Database("Database.db")

const querry = `CREATE TABLE IF NOT EXISTS GestBookPost ( 
    ID INT   NOT NULL,
    Name VARCHAR(255)   NOT NULL,
    Message VARCHAR(255) NOT NULL,
    CreatedAt VARCHAR(255) NOT NULL,
    PRIMARY KEY(ID)
)`
db.run(querry)

app.get("/", function(req, res){
    
    res.send("Hello, World")
})

app.get("/posts/:id", function(req,res){

})


app.listen(8080)