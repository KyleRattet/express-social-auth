var express = require('express');
var router = express.Router();
var passport = require('../auth/github.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Social Auth' });
});

router.get('/account', function (req, res, next) {
  res.send(req.user);
});

router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/account');
  });

module.exports = router;
