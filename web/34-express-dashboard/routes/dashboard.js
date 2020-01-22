var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";

let authenticate = function(req,res,next){
  var loggedIn = req.session.isLoggedIn;
console.log(loggedIn)
if(loggedIn){
    next()
}else{
    res.redirect('/signin')
  }
}

let authenticated = function(req,res,next){
  req.session.isLoggedIn = req.session.isLoggedIn ? true:false;
   console.log('authenticated',req.session)
  if(req.session.isLoggedIn){
      res.locals.user = req.session.user;
      next();
  } else{
      next();
  }
}


router.use(authenticated);
router.use(authenticate);

/* GET home page. */
router.get('/', 
  
  function(req, res, next) {
    res.render('index', {layout: 'layout_dashboard', title: 'My Portfolio Dashboard'});
});

router.get('/',  function(req, res, next) {
  res.send('respond with a resource');
});


/* List projects */
router.get('/projects',  function(req, res, next) {
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    let dbo = db.db("portfolio");
    let d = new Date();
    // get the projects
    dbo.collection('projects').find({}).limit(3).toArray(function(err, projects){
        if (err) throw err;
        console.log(JSON.stringify(projects));
        db.close();
        // get the posts
        res.render('projects/listProjects', {layout: 'layout_dashboard', projects: projects})
    })
  });
});

/* Create project */
router.get('/projects/new',  function(req, res, next) {
  res.send('respond with a resource');
});

/* Submit create project */
router.post('/projects/new',  function(req, res, next) {
  res.send('respond with a resource');
});

/* Project detail*/
router.get('/projects/:id',  function(req, res, next) {
  res.send('respond with a resource');
});

/* update project */
router.put('/projects/:id',  function(req, res, next) {
  res.send('respond with a resource');
});

/* delete project */
router.delete('/projects/:id',  function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/logout',  function(req, res, next) {
  req.session.isLoggedIn = false;
  delete req.session.user;
  res.redirect('/signin')
});
module.exports = router;
