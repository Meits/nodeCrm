const bodyParser     = require('body-parser');
var mongoose = require("mongoose");
require("../models/Source");

exports.index = (response, request, db) => {
    console.log("Request handler 'index' was called.");

    var SourceModel = mongoose.model("Source");
    
    SourceModel.find({}).exec(function(err, result) {
        if (!err) {

            console.log(result);
            response.header('Access-Control-Allow-Origin', '*');
            response.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
            response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
            response.json(
                result
            );
        
            response.end();
          } else {
            console.log(err);
          };
    });
    /*response.json({ 
        anObject: { item1: "item1val", item2: "item2val" }, 
        anArray: ["item1", "item2"], 
        another: "item"
    });

    response.end();*/

}

exports.store = (response, request, db) => {
    console.log("Request handler 'store' was called.");
    console.log(request.body);

   var SourceModel = mongoose.model("Source");
   var mySource = new SourceModel({
    title : request.body.title,
    updated_at : request.body.updated_at
   });
   
   
   mySource.save(function(err,source) {
        if(err) {
        console.log(err);
        } else {
        console.log("Successfully created an Source.");
        response.json(
            source
        );
        response.end();
        }

    });

    //response.header('Access-Control-Allow-Origin', '*');
    //response.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    //response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
    //response.end();

}

exports.update = (response, request, db) => {
    console.log("Request handler 'update' was called.");
    console.log(request.body);

   var SourceModel = mongoose.model("Source");
//    var mySource = new SourceModel({
//     title : request.body.title,
//     updated_at : request.body.updated_at
//    });

    SourceModel.findByIdAndUpdate(
        request.params.source,
        request.body,
        {new: true},
        (err, source) => {
        // Handle any possible database errors
            if (err) return response.status(500).send(err);
            return response.send(source);
    }
   );
   
    //response.header('Access-Control-Allow-Origin', '*');
    //response.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    //response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization');
    //response.end();

}

exports.destroy = (response, request, db) => {
    console.log("Request handler 'destroy' was called.");
    var sourceId = request.params.source;
    var SourceModel = mongoose.model("Source");
    SourceModel.deleteOne({ _id: sourceId }, function (err) {
        if (err) return err;
      });

    response.end();

}