let http = require("http");
let url = require('url');

const MongoClient    = require('mongodb').MongoClient;
const db             = require('../config/db');

function start(route, handle) {
    let dbDriver;
    function onRequest(request, response) {
        //get path name
        let pathname = url.parse(request.url).pathname;
        console.log("Request " + pathname + " received.");
        request.setEncoding("utf8");

        let postData = "";
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
            postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, postData, dbDriver);
        });
    };
    
    let server = http.createServer(onRequest);

    MongoClient.connect(db.url, (err, database) => {
        if (err) return console.log(err)
        server.listen(8888);   
        dbDriver = database.db('crm');

        console.log("Server has started.");      
      })

}

exports.start = start;

