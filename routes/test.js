var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();
var dotenv = require('dotenv');

dotenv.load();

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

var client = require('Twilio')(ACCOUNT_SID, AUTH_TOKEN);

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('test')

var app = express();

app.on('alarm', function(){
    client.sendMessage({
      to: '...',
      from: '...',
      body: 'You have been sent an alert because Ricco did not check in at a time they expected to. Can you you please reach out until you have made contact with them?'
     });
  });

  var alarm = setTimeout(function(){
    app.emit('alarm');
  }, 1 * 1000)

});

module.exports = router;
