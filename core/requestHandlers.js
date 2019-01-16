var exec = require("child_process").exec;
let indexController = require('../app/controllers/indexController');

function index(response, postData,db) {
  indexController.index(response, postData,db);
}

function upload(response, postData,db) {
  indexController.store(response, postData,db);
}

var handle = {}
handle["/"] = index;
handle["/start"] = index;
handle["/upload"] = upload;
  

exports.handle = handle;