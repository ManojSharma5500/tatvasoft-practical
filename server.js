var express = require('express');
var routes = require("./app/routes.js")


var app = express();

app.use('/app',routes);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});