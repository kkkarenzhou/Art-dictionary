var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home')});


router.get('/about', function(req, res, next) {
  res.send('about Art Dictionary');
});

module.exports = router;
