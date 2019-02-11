
const db             = require('../config/db');
const mongoose = require("mongoose");
var express = require("express");
const bodyParser     = require('body-parser');
const app            = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8000;

cors = require('cors');
//app.user(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
var originsWhitelist = [
    'http://localhost:4200',      //this is my front-end url for development
  ];
  var corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }
  
  //here is the magic
  app.use(cors(corsOptions));


//express-formidable

require('../routes')(app, {});


//mongoose.connect("mongodb+srv://servernode:bot123bot123@cluster0-vairy.mongodb.net/crm?retryWrites=true", {useNewUrlParser: true});
function start() {
    app.listen(port, () => {
        console.log("Server has started on port - " + port);
    });
    mongoose.connect(db.url, {useNewUrlParser: true});

}
exports.start = start;


