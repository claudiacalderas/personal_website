//BASE MODULES
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//DATABASE MODULE
var db = require('./modules/db.js');

//ROUTE MODULES
var index = require('./routes/index.js');
var art = require('./routes/art.js');


//APP CONFIG
app.set('port', (process.env.PORT || 7000));

//MIDDLEWARE CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//ROUTES
app.use('/art', art);
app.use('/', index);

//LISTEN
app.listen(app.get('port'), function(){
    console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
