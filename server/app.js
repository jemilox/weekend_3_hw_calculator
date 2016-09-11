var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded( {extended: false});

app.listen('3000', 'localhost', function () {
  console.log("port 3000 is listening");
});//end server up

app.get('/', urlencodedParser, function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
  // res.send('meow');
});//end get

//anyone can use the public folder now
app.use(express.static('public'));

//get requested calculation and calculate
app.post( '/calculate', urlencodedParser, function ( req, res) {
  //console.log('in post');
  //console.log('this is req', req.body);
  //calculate string
  var finishedCalculation = eval(req.body.takeThis);
  console.log('finishedCalculation', finishedCalculation);
  //send back
  var sendBack = {takeThis: finishedCalculation};
  res.send(sendBack);
  console.log(sendBack);
});
