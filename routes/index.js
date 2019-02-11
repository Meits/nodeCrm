// routes/index.js
const userRoutes = require('./user_routes');
const sourceRoutes = require('./source_routes');
module.exports = function(app, db) {
    userRoutes(app, db);
    sourceRoutes(app, db);
};