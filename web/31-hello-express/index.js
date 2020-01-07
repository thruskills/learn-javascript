const fs = require("fs")
const express = require('express')
const app = express()
const port = 3001

// index page
app.get('/',(req,res) => res.send('Hello World!'))

// about page - read about.html and send back to client
app.get('/signin',(req,res) => {
    fs.readFile('signin.html', (error, data) => {
        if(error){
            res.send(error.message)
        }else{
            res.send(data.toString())
        }
    });
})

// contact page
app.get('/contact',(req,res) => res.send('Contact page'))

// blog page
app.get('/blog',(req,res) => res.send('Blog page'))

app.listen(port, () => console.log(`Hello App listening on port ${port}!`))