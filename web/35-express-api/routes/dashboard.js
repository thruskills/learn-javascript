var express = require('express');
var router = express.Router();
const Project = require('../model/project');
const Contact = require('../model/contact');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let response = {
    'status': 'success',
    'code': 200,
  };

  Project.find({}, function(err, data){
    if (err) throw Error;
    console.log(JSON.stringify(data));
    res.setHeader('Content-Type','application/json');
    response.data = data;
    res.json(response)
  })
});

// projects
router.get('/projects', function(req, res, next) {
  let response = {
    'status': 'success',
    'code': 200,
    'total': 10,
    'pno': 1
  };

  Project.find({}, function(err, data){
    if (err) throw Error;
    console.log(JSON.stringify(data));
    res.setHeader('Content-Type','application/json');
    response.data = data;
    response.total = data.length;
    res.json(response)
  })
});

// get by id
router.get('/projects/:id', function(req, res, next) {
  const id = req.params.id;
  Project.findById({_id: id}, function(err, data){
    if (err) throw Error;
    console.log(JSON.stringify(data));
    res.setHeader('Content-Type','application/json');
    res.json(data)
  })
});

// create new project
router.post('/projects', function(req, res){
  console.log('creating new project ....')
  var newProject = new Project(req.body);
  newProject.save(function(err, data){
    if (err) throw Error;
    console.log(JSON.stringify(data));
    res.json({'status': 'success', 'code':201, 'id': data._id})
  })
});

// find and update
router.put('/projects/:id', function(req, res){
  var id = req.params.id;
  Project.findOneAndUpdate({_id: id},{$set:req.body,$inc:{__v:1}},{new:true}, 
    function(err, project){
    if(err){
      next(err);
    }else{
      res.json(project); 
    }
  });
});

// delete
router.delete('/projects/:id', function(req, res){
  let id = req.params.id;
  Project.deleteOne({_id: id}, function(err, data){
    if (err) throw Error;
    console.log(JSON.stringify(data));
    res.json({'status': 'success', 'code':200})
  })
});

// contact
router.get('/contacts', function(req, res, next) {
  Contact.find({}, function(err, data){
    if (err) throw Error;
    console.log(JSON.stringify(data));
    res.setHeader('Content-Type','application/json');
    res.json(data)
  })
});

router.post('/contacts', function(req, res){
  console.log('creating new contact ....')
  var newContact = new Contact(req.body);
  newContact.save(function(err, data){
    if (err) throw Error;
    console.log(JSON.stringify(data));
    res.json({'status': 'success', 'code':201, 'id': data._id})
  })
});


module.exports = router;
