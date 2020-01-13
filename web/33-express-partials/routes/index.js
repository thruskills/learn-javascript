var express = require('express');
var router = express.Router();
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
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Express', projects: data, extraHtml :'<p>Welcome to express</p>'});
});

router.get('/projects/:id', function(req, res){
  let id = parseInt(req.params.id);
  console.log('id --- > ', typeof id);
  if(id < data.length ){
    res.render('project-detail', { data : data[id] })
  }else{
    // 404 
    console.log('page not found')
    res.send('Page not found')
  }
})

module.exports = router;
