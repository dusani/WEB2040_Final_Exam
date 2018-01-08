var port = 8868;
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongo = require('./config')();

app.set('view engine', 'ejs'); // set up ejs for templating

//purpose of this is to enable cross domain requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/assets", express.static(__dirname + "/assets"));

require('./app/routes')(app);

app.listen(port);

console.log("Server listening on port " + port);
