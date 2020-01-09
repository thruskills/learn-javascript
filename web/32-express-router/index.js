const express = require('express')
const app = express()
const port = 3001

let requestTime = function(req, res, next){
    console.log('request time middleware')
    req.requestTime = Date.now()
    next()
}

let loggerr = function(req,res,next){
    console.log('req: ', req.path, new Date(), req.headers["user-agent"] )
    next()
}

// app.use(requestTime)
// app.use(loggerr)

// GET router
app.get('/', requestTime, loggerr, (req,res) => {
    let requestTime = req.requestTime
    res.send('Requested at: '+ requestTime)
})

// POST route
app.post('/',(req,res) => res.send('This is a post route!'))

// ALL methods
app.all('/all', (req,res) => res.send('You are at / all'))

// routes with request path params 
app.get('/users/:userId/books/:bookId', function (req, res) {
    console.log('userId = ', req.params.userId);
    console.log('bookId = ', req.params.bookId);
    res.send(req.params)
})

app.get('/go/a',(req,res) => res.send('Go to a...') )

// multiple handlers
app.get('/go/b', function(req,res,next){
    console.log('Went to a first....')
    next()
}, function(req, res){
    console.log('finaly in b...')
    res.send('Go to b...')
})

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

var cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/go/c', [cb0,cb1,cb2])

app.get('*', function(req,res){
    res.send('/');
})


app.listen(port, () => console.log(`Hello App listening on port ${port}!`))