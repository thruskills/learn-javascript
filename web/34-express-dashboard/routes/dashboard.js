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
    dbo.collection('projects').find({}).limit(10).toArray(function(err, projects){
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
  res.render('projects/createProject', {layout: 'layout_dashboard', 'title': 'Create new project'})
});

/* Submit create project */
router.post('/projects/new',  function(req, res, next) {
  let title = req.body.title;
  let image = req.body.image;
  let description = req.body.description;
  let project = {title, image, description};
  
  // write it to the db
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    let dbo = db.db("portfolio");
    let d = new Date();
    // get the projects
    dbo.collection('projects').insertOne(project, function(err, project){
        if (err) throw err;
        console.log(JSON.stringify(project));
        db.close();
        // redirect to list of projects page
        res.redirect('/projects')
    })
  });
  
});

/* Project detail*/
router.get('/projects/:id',  function(req, res, next) {
  // read the id from the path param
  let id = req.params.id;
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    let dbo = db.db("portfolio");
    dbo.collection('projects').findOne({_id: new ObjectId(id)}, function(err, project){
      if (err) throw err;
      console.log(JSON.stringify(project));
      db.close();
      res.render('projects/projectDetail', { project : project , layout: 'layout_dashboard'})
    })
  });
});

/* update project */
router.post('/projects/:id',  function(req, res, next) {
  let id = req.params.id;

  let title = req.body.title;
  let image = req.body.image;
  let description = req.body.description;
  let project = {title, image, description};
  let updatedProject = {$set: project};

  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    let dbo = db.db("portfolio");
    dbo.collection('projects').updateOne({_id: new ObjectId(id)}, updatedProject, function(err, p){
      if (err) throw err;
      console.log(JSON.stringify(p));
      db.close();
      res.render('projects/projectDetail', { project : project , layout: 'layout_dashboard', success: true})
    })
  });

});

/* delete project */
router.get('/projects/:id/delete',  function(req, res, next) {
  let id = req.params.id;
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    let dbo = db.db("portfolio");
    dbo.collection('projects').deleteOne({_id: new ObjectId(id)}, function(err, p){
      if (err) throw err;
      console.log(JSON.stringify(p));
      db.close();
      res.redirect('/projects')
    })
  });
});

router.get('/logout',  function(req, res, next) {
  req.session.isLoggedIn = false;
  delete req.session.user;
  res.redirect('/signin')
});
module.exports = router;
