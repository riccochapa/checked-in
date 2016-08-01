var express = require('express');
var router = express.Router();

var EmergencyContacts = require('../models/EmergencyContacts.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  EmergencyContacts.find(function(err, docs){
    res.render('settings', { contacts: docs });
  });
});

module.exports = router;
