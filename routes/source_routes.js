let sourcesController = require('../app/controllers/sourcesController');

module.exports = function(app, db) {
    app.get('/sources', (req, res) => {
        sourcesController.index(res,req,db);
    });
    app.post('/sources', (req, res) => {
        sourcesController.store(res,req,db);
    });
};