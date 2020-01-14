var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const data = [
  {
    title: 'My portfolio with Express.js',
    description: 'Portfolio project using Node and Express. We will use HBS template engine.',
    image: '/images/1.jpg',
    link: '/projects/0'
  },{
    title: 'Dashboard',
    description: 'Build an admin dashboard to manage my portfolio. Again, we will be using node and express',
    image: '/images/2.jpg',
    link: '/projects/1'
  },{
    title: 'REST API',
    description: 'Here, we will build REST based API to interact with the MongoDB.',
    image: '/images/3.jpg',
    link: '/projects/2'
  },{
    title: 'My portfolio with React.js',
    description: 'Portfolio project using React.js.',
    image: '/images/4.jpg',
    link: '/projects/3'
  }
];


/* GET home page. */
router.get('/',function(req,res){
  res.render('index')
})

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express', projects: data, extraHtml :'<p>Welcome to express</p>'});
});

router.get('/projects/:id', function(req, res){
  let id = parseInt(req.params.id);
  console.log('id --- > ', typeof id);
  //  once you got the project id
  // make the database call to check if it exists
  
  if(id < data.length ){
    res.render('project-detail', { data : data[id] })
  }else{
    // 404 
    console.log('page not found')
    res.send('Page not found')
  }
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
      let name = req.body.name;
      let mobile = req.body.mobile;
      let email = req.body.email;
      let description = req.body.description;

      res.render('contact', {errors: true, messages: messages, name, mobile, email, description});
    }else{
      // read the values and save it in the DB

      res.render('contact', {success: true});
    }
})
module.exports = router;
