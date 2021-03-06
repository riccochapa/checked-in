var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

var EmergencyContacts = require('../models/EmergencyContacts.js');

/* GET home page. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  EmergencyContacts.find(function(err, docs){
    res.render('settings', { contacts: docs , user: req.user });
  });
});

module.exports = router;
