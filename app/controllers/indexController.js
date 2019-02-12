const bodyParser     = require('body-parser');
var mongoose = require("mongoose");
require("../models/Lead");

exports.index = (response, request, db) => {
    console.log("Request handler 'start' was called.");
      
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post"><input type="text" name="title">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text1" />'+
    '</form>'+
    '</body>'+
    '</html>';
  
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(body);
      response.end();


}
exports.store = (response, request, db) => {
    console.log("Request handler 'start' was called.");
    console.log(request.body);

   var LeadModel = mongoose.model("Lead");
   var mylead = new LeadModel(request.body);
   
    mylead.save(function(err) {
        if(err) {
        console.log(err);
        } else {
        console.log("Successfully created an user.");
        }
    });

    response.end();

}

exports.users = (response, request, db) => {
    console.log("Request handler 'users' was called.");
    console.log(request.body);

    response.json({ 
        anObject: { item1: "item1val", item2: "item2val" }, 
        anArray: ["item1", "item2"], 
        another: "item"
      });

    response.end();

}