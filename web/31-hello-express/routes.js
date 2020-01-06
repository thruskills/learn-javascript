const fs = require("fs")
const express = require('express')
const app = express()
const port = 3002

// setting up static file serving capability
app.use(express.static('static'))

app.use('/public',express.static('public'))

// index page
app.get('/',(req,res) => {
    console.log('/', 'in get root route')
    fs.readFile('form.html', (error, data) => {
        if(error){
            res.send(error.message)
        }else{
            res.send(data.toString())
        }
    });
})

app.post('/', (req,res) => {
    console.log('/', 'in post root route')
    console.log(req)
    // first read the data that comes in

    // route user to the respective url
    /*
        1. you can render some page
        2. you can redirect user to some other route
    */
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => console.log(`Express Routes App listening on port ${port}!`))