var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();

var EmergencyContacts = require('../models/EmergencyContacts.js');

router.get('/', ensureLoggedIn, function(req, res, next){
  EmergencyContacts.find({
    'contact.auth0': req.user.id
  }, function(err, docs){
    res.render('contacts/index', { contacts: docs, user: req.user });
  });
});

router.get('/add_new_contact', ensureLoggedIn, function(req, res, next){
  EmergencyContacts.find({
    'contact.auth0': req.user.id
  }, function(err, docs){
    res.render('contacts/add_new_contact', { contacts: docs , user: req.user });
  });
});

router.post('/add_new_contact', ensureLoggedIn, function(req, res, next){
  var contact = new EmergencyContacts({
    contact: [{
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      auth0: req.user.id
    }],
  });
  contact.save(function(err){
    if (err) res.send('error ' + err);
    else res.redirect('/contacts');
  });
});

router.get('/:id', ensureLoggedIn, function(req, res, next){
  EmergencyContacts.findOne({
    _id: req.params.id,
    'contact.auth0': req.user.id
  }, function(err, contact){
    if (err) return next(err);
    if (!contact) return next(404);
    res.render('contacts/edit_contact', {contact: contact , user: req.user});
  });
});

router.get('/:id', ensureLoggedIn, function(req, res, next){
  EmergencyContacts.findOne({
    _id: req.params.id,
    'contact.auth0': req.user.id
  }, function(err, contact){
    if (err) return next(err);
    if (!contact) return next(404);
    res.render('contacts/alertsettings', {contact: contact , user: req.user});
  });
});

router.put('/:id', ensureLoggedIn, function(req, res, next){
  EmergencyContacts.findOneAndUpdate({
    _id: req.params.id,
    'contact.auth0': req.user.id
  }, { $set: { contact:[{name: req.body.name, phone: req.body.phone, email: req.body.email, auth0: req.user.id}] }}, function (err, contact) {
    if (err) return next(err);
    contact.save(function(err){
      if (err) res.send('error ' + err);
      else
        console.log(req.body);
        res.redirect('/contacts');
    });
  });
});

router.get('/:id/remove_contact', ensureLoggedIn, function(req, res, next){
  EmergencyContacts.findById(req.params.id, function(err, contact){
    if (err) return next(err);
    if (!contact) return next(404);
    res.render('contacts/remove_contact', {contact: contact , user: req.user});
  });
});


router.delete('/:id/remove_contact', ensureLoggedIn, function(req, res, next){
  EmergencyContacts.findByIdAndRemove(req.params.id, function(err, contact){
    if (err) return res.send(err);
    res.redirect('/contacts');
  });
});


module.exports = router;
