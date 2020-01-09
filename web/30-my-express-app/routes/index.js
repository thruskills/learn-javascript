var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Hbs', 'indexNav': true, data: 'This is to demostrate how to pass data to views.' });
});

/* GET the about page */
router.get('/about', function(req, res, next){
  // we will render the about.hbs viw here
  res.render('about',{'aboutNav': true})
});

/* GET the contact page */
router.get('/contact', function(req, res, next){
  res.render('contact',{'contactNav': true})
});

router.get('/login', function(req, res, next){
  res.render('login', {layout: 'layout2'})
})

module.exports = router;
