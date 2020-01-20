var express = require('express');
var router = express.Router();
let userloggedin = false;
let user = {}
let users = [
  {email: 'm@m.com', password: 'abcd', name: 'Manohar'},
  {email: 't@t.com', password: 'abcd', name: 'Tony'},
]
/* GET home page. */
router.get('/', 
  function(req, res, next){
    // moddleware
    if(userloggedin ){
      next();
    }else{
      res.redirect('/signin')
    }
  },
  function(req, res, next) {
    res.render('index', { title: 'Dashboard', user: user});
});

router.get('/signin', function(req, res) {
  res.render('signin', { title: 'Sign in' });
});

router.post('/signin', function(req, res){
  let {email,password} = req.body;
  console.log(email);
  console.log(password);
  if(email  != undefined && email !== '' && password != undefined && password !== ''){
    // get the user from DB based on the given details

    users.forEach((u)=>{
      if(u.email === email && u.password === password){
        user = u;
      }
    })

    if(user && user.name !== undefined){
      userloggedin = true;
      res.redirect('/')
    }else{
      // redirect back to signin page with proper message
      res.render('signin', { title: 'Sign in' });
    }
  }else{
    // validate inputs from request
    res.render('signin', { title: 'Sign in' });
  }
 })


module.exports = router;
