var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
var Client = require('node-rest-client').Client;
var client = new Client();
const apiUrl = 'http://localhost:3005';

/* GET home page. */
router.get('/',function(req,res){
  client.get(apiUrl + "/dashboard/projects", function (data, response) {
    console.log(data);
    res.render('index', {projects: data.data, posts: {}})
  });
})

router.post('/subscribe',function(req,res){
  let email = req.body.email;
  console.log(email);
  if(email && email !== ''){
    // MongoClient.connect(url, function(err, db){
    //   if (err) throw err;
    //   let dbo = db.db("portfolio");
    //   let d = new Date();
    //   let newsletter = {email, date_created: d};
    //   dbo.collection('newsletter').insertOne(newsletter, function(err, obj){
    //     if(err) throw err;
    //     // get the projects
    //     dbo.collection('projects').find({}).limit(3).toArray(function(err, projects){
    //       if (err) throw err;
    //       console.log(JSON.stringify(projects));
    //       // get the posts
    //       dbo.collection('posts').find({}).sort({'date_created': -1}).limit(3).toArray(function(err, posts){
    //           if (err) throw err;
    //           console.log(JSON.stringify(posts));
    //           db.close();
    //           res.render('index', {projects: projects, posts: posts, success: true})
    //       })
    //     })
    //   })
    // });
  }// else block... you can 

})

router.get('/projects', function(req, res, next) {
  client.get(apiUrl + "/dashboard/projects", function (data, response) {
    console.log(data);
    res.render('projects', { title: 'Express', projects: data.data, extraHtml :'<p>Welcome to express</p>'});
  });
});

router.get('/projects/:id', function(req, res){
  let id = req.params.id;
  console.log('id --- > ',  id);
  //  once you got the project id
  // make the database call to check if it exists
  // MongoClient.connect(url, function(err, db){
  //   if (err) throw err;
  //   let dbo = db.db("portfolio");
  //   dbo.collection('projects').findOne({_id: new ObjectId(id)}, function(err, project){
  //     if (err) throw err;
  //     console.log(JSON.stringify(project));
  //     db.close();
  //     res.render('project-detail', { data : project })
  //   })
  // });
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

      // prepare an object which will contain data
      var args = {
        data: { name, mobile, email, message: description },
        headers: { "Content-Type": "application/json" }
      };

      client.post(apiUrl + '/dashboard/contacts', args, function(data, response){
        console.log(data)
        res.render('contact', {success: true});
      })
    }
})
module.exports = router;
