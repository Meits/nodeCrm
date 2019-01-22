let indexController = require('../app/controllers/indexController');

module.exports = function(app, db) {
    app.get('/', (req, res) => {
        indexController.index(res,req,db);
    });
    app.post('/upload', (req, res) => {
        indexController.store(res,req,db);
    });
};