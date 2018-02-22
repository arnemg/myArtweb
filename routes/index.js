var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fartøysjef Moe-Gumøs homepage' });
});

module.exports = router;
