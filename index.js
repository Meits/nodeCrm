let server = require('./core/server');
let router = require('./core/router');
let requestHandlers = require("./core/requestHandlers");

const assert = require('assert');

try {
    assert.equal(typeof (router.route), 'function');
    server.start(router.route, requestHandlers.handle);
}
catch(err) {
    console.log(err);
}

