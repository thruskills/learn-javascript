var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , extraHtml :'<p>Welcome to express</p>'});
});

module.exports = router;
