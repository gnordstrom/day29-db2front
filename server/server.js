var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://GustavNordstrom@localhost/ThursdayDemo";

var app = express();
module.exports = app;

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set('db', massiveInstance);

// var db = app.get('db');

app.use(cors());
app.use(bodyParser.json());

var animalCtrl = require('./controllers/animalCtrl');



var port = 9001;
app.listen(port, function() {
  console.log('Server is now live at port ' + port);
  console.log('♫ Ground control to Major Tom ♫');
});
