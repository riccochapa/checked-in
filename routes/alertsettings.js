var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var client = require('Twilio')('AC323525522ee9c896c847e6e61912b4f8', '8883e30f5339447542dc2a0d8973da70');

var router = express.Router();

/* GET home page. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('alertsettings', { user: req.user });

/*
var app2 = express();

app2.on('alarm', function(){
  client.sendMessage({
     to: '+19568848448',
     from: '+19566164831',
     body: 'from ricco'
 }, 3000);
});

setTimeout(function(){
  app2.emit('alarm');
}, 1 * 1000)
*/

});


module.exports = router;
