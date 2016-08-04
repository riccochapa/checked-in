var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();
var client = require('Twilio')('AC48b7cad6d105d0180b62141b23115b2a', '0053ecffef55e7ee421eb2134ae5fa07');

/* GET user profile. */
router.get('/', function(req, res, next) {
  res.render('test')

  var app = express();


app.on('alarm', function(){
    client.sendMessage({
       to: '+19564665091',
       from: '+12109878225',
       body: 'Hey gurl.'
     });
  });

  var alarm = setTimeout(function(){
    app.emit('alarm');
  }, 1 * 1000)


});

module.exports = router;
