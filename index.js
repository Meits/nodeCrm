let server = require('./core/server');
const assert = require('assert');

try {
    //assert.equal(typeof (router.route), 'function');
    server.start();
}
catch(err) {
    console.log(err);
}

