var express = require('express');
var router = express.Router();
var Project = require('../model/projectModel');

function urlify(str){
  var urlifyStr = str.trim().toLowerCase();
  urlifyStr = urlifyStr.replace(/ /g,'-');
  // handle for ? & - 
  return urlifyStr;
}

/* GET all projects listing. */
router.get('/', function(req, res, next) {
  Project.find({}, function(err, projects){
    if(err){
        next(err);
    }else if (projects){
      res.json(projects);
    }
  });
});

/* GET project by alias. */
router.get('/:id', function(req, res, next) {
  Project.findOne({_id: req.params.id}, function(err, project){
    if(err){
        next(err)
    }else if (project){
      res.json(project);
    }
  });
});

/* Create project. */
router.post('/', function(req, res, next) {
  var project = req.body;
  var projectModel = new Project();
  projectModel.name = project.name;
  projectModel.alias = urlify(project.name); 
  projectModel.githubUrl = project.githubUrl;
  projectModel.image = project.image;
  projectModel.description = project.description;
  projectModel.tags = [];
  projectModel.imageSliders = project.imageSliders;
  projectModel.relatedProjects = project.relatedProjects;
  projectModel.createAt = new Date();
  projectModel.save(function(err, project){
      if(err){
        next(err);
      }else{
        res.json(project); 
      }
  });
});

/* Create project. */
router.put('/:id', function(req, res, next) {
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

/* Create project. */
router.delete('/:id', function(req, res, next) {
  Project.remove({'_id': req.params.id}, function(err, project){
    if(err){
      next(err)
    }else{
      res.json({message: 'deleted successfully'}); 
    }
  });
});

module.exports = router;
