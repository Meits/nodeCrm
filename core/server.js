
const db             = require('../config/db');
const mongoose = require("mongoose");
var express = require("express");
const bodyParser     = require('body-parser');
const app            = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8000;
require('../routes')(app, {});

function start() {
    app.listen(port, () => {
        console.log("Server has started on port - " + port);
    });
    mongoose.connect(db.url, {useNewUrlParser: true});

}
exports.start = start;


