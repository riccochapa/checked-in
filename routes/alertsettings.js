var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var client = require('Twilio')('AC3c3038a47a7752cf097e9f3732bb53a3', '24e5b2160646dcd95bfcef9cc3263605');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('alertsettings', { user: req.user });
});

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('home', { User: 'USER NAME' });
});

var app = express();
*/

// erased this and it worked!!!!!
// app.use(methodOverride('_method'));

/*var app2 = express();

app2.on('alarm', function(){
  client.sendMessage({

     to: '+19568785924',
     from: '+19562718912',
     body: 'Hello, You have been contacted because is in danger. Please try contacting them.'

 // }, function(err, responseData) { //this function is executed when a response is received from Twilio
 //
 //     if (!err) { // "err" is an error received during the request, if any
 //
 //         // "responseData" is a JavaScript object containing data received from Twilio.
 //         // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
 //         // http://www.twilio.com/docs/api/rest/sending-sms#example-1
 //         //
 //         console.log('responseData.from', responseData.from); // outputs "+14506667788"
 //         console.log('responseData.body', responseData.body); // outputs "word to your mother."
 //
 //     }

 });

  //  console.log('alarm rung!');
  //  console.log(arguments);
});

setTimeout(function(){
  app2.emit('alarm');
}, 7 * 1000)


// setTimeout(function(){
//   app.emit('alarm', ['a', 'b'], 'c');
// }, 7 * 1000)


// var ee = new EventEmitter();
// function listener() {
//     console.log('The foo event has been emitted.');
// }
//
// ee.addListener('foo', listener);*/

module.exports = router;
