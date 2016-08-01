var express = require('express');
var router = express.Router();

var EmergencyContacts = require('../models/EmergencyContacts.js');

router.get('/', function(req, res, next){
  EmergencyContacts.find(function(err, docs){
    res.render('contacts/index', { contacts: docs });
  });
});

router.get('/add_new_contact', function(req, res, next){
  EmergencyContacts.find(function(err, docs){
    res.render('contacts/add_new_contact', { contacts: docs });
  });
});

router.post('/add_new_contact', function(req, res, next){
  var contact = new EmergencyContacts({
    contact: [{
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    }],
  });
  contact.save(function(err){
    if (err) res.send('error ' + err);
    else res.redirect('/contacts');
  });
});

router.get('/:id', function(req, res, next){
  EmergencyContacts.findById(req.params.id, function(err, contact){
    if (err) return next(err);
    if (!contact) return next(404);
    res.render('contacts/edit_contact', {contact: contact });
  });
});

router.put('/:id', function(req, res, next){
  EmergencyContacts.findByIdAndUpdate(req.params.id, { $set: { contact:[{name: req.body.name, phone: req.body.phone, email: req.body.email}] }}, function (err, contact) {
    if (err) return next(err);
    contact.save(function(err){
      if (err) res.send('error ' + err);
      else
        console.log(req.body);
        res.redirect('/contacts');
    });
  });
});

router.get('/:id/remove_contact', function(req, res, next){
  EmergencyContacts.findById(req.params.id, function(err, contact){
    if (err) return next(err);
    if (!contact) return next(404);
    res.render('contacts/remove_contact', {contact: contact});
  });
});


router.delete('/:id/remove_contact', function(req, res, next){
  EmergencyContacts.findByIdAndRemove(req.params.id, function(err, contact){
    if (err) return res.send(err);
    res.redirect('/contacts');
  });
});


module.exports = router;
