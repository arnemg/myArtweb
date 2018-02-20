var express = require('express');
var fs = require('fs');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index',{ title: 'Index Filen' } );
  });

router.get('/art', function(req, res, next) {
      console.log("Er i GET /art");
  res.render('art',{ title: 'Fartøysjef Moe-Gumøs Art Gallery' } );
    });

router.get('/users', function(req, res, next) {
  var files = fs.readdirSync('./public/images/');
  console.log('respond with a resource' + files.length);
  res.render('users', {title: 'Dette er alle art filene tilgjengelig ' + files.length});
    });


module.exports = router;
