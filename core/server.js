
const db             = require('../config/db');
const mongoose = require("mongoose");
var express = require("express");
const bodyParser     = require('body-parser');
const app            = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8000;


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


