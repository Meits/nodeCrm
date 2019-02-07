
const db             = require('../config/db');
const mongoose = require("mongoose");
var express = require("express");
const bodyParser     = require('body-parser');
const app            = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8000;


var corsOptions = {
  origin: 'http://localhost',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}


//express-formidable

require('../routes')(app, {});

function start() {
    app.listen(port, () => {
        console.log("Server has started on port - " + port);
    });
    mongoose.connect(db.url, {useNewUrlParser: true});

}
exports.start = start;


