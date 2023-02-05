//index.js Money Raheja 301276615 05/02/2023
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Home' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Home' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Home' });
});
/* GET Contacts page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Home' });
});







module.exports = router;
