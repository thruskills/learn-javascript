var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var url = "mongodb://localhost:27017/";

/* GET home page. */
router.get('/',function(req,res){
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    let dbo = db.db("portfolio");
    let d = new Date();
    // get the projects
    dbo.collection('projects').find({}).limit(3).toArray(function(err, projects){
        if (err) throw err;
        console.log(JSON.stringify(projects));
        // get the posts
        dbo.collection('posts').find({}).sort({'date_created': -1}).limit(3).toArray(function(err, posts){
            if (err) throw err;
            console.log(JSON.stringify(posts));
            db.close();
            res.render('index', {projects: projects, posts: posts})
        })
    })
  });
})

router.get('/projects', function(req, res, next) {
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    let dbo = db.db("portfolio");
    let d = new Date();
    dbo.collection('projects').find({}).toArray(function(err, data){
      if (err) throw err;
      console.log(JSON.stringify(data));
      db.close();
      res.render('projects', { title: 'Express', projects: data, extraHtml :'<p>Welcome to express</p>'});
    })
  });
});

router.get('/projects/:id', function(req, res){
  let id = req.params.id;
  console.log('id --- > ',  id);
  //  once you got the project id
  // make the database call to check if it exists
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    let dbo = db.db("portfolio");
    dbo.collection('projects').findOne({_id: new ObjectId(id)}, function(err, project){
      if (err) throw err;
      console.log(JSON.stringify(project));
      db.close();
      res.render('project-detail', { data : project })
    })
  });
})


router.get('/contact', function(req, res){
  res.render('contact');
})

router.post('/contact', [
    check('email').isEmail().withMessage('Please enter a valid email id'),
    check('mobile').isLength({ min: 10 }).withMessage('Mobile  number must be atleast 10 characters')
  ],
  function(req, res){
    const errors = validationResult(req);
    console.log(JSON.stringify(errors))
    if(!errors.isEmpty()){
      var messages = [];
      errors.errors.forEach(function(err){
        console.log(JSON.stringify(err))
        messages.push(err.msg)
      })
      res.render('contact', {errors: true, messages: messages, name, mobile, email, description});
    }else{
      // read the values and save it in the DB
      let name = req.body.name;
      let mobile = req.body.mobile;
      let email = req.body.email;
      let description = req.body.description;

      MongoClient.connect(url, function(err, db){
        if (err) throw err;
        let dbo = db.db("portfolio");
        let d = new Date();
        let contact = {name, mobile, email, message: description, date_created: d, date_modified: d};
        dbo.collection('contact').insertOne(contact, function(err, contactObj){
          if (err) throw err;
          console.log("1 document inserted. Id = " + contactObj._id);
          db.close();
          res.render('contact', {success: true});
        })
      });
    }
})
module.exports = router;
