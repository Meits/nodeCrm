var mongoose = require('mongoose');

var UnitSchema = new mongoose.Schema({
    title: String,
    updated_at: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Unit', UnitSchema);