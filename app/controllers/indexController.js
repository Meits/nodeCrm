var querystring = require("querystring");
var mongoose = require("mongoose");
require("../models/Lead");

exports.index = (response, postData, db) => {
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
exports.store = (response, postData, db) => {
    console.log("Request handler 'start' was called.");

    /*let data = querystring.parse(postData);
    db.collection('leads').insert(data, (err, result) => {
        if(err){ 
            return console.log(err);
        }
        console.log(result.ops);
    });*/

    //response.writeHead(200, {'Location': 'http://localhost:8888/start'});
    //response.write(body);

   var LeadModel = mongoose.model("Lead");
   var mylead = new LeadModel(querystring.parse(postData));

    mylead.save(function(err) {
        if(err) {
        console.log(err);
        } else {
        console.log("Successfully created an employee.");
        }
    });

    response.end();

}