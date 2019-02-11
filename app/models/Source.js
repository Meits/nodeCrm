var mongoose = require('mongoose');

var SourceSchema = new mongoose.Schema({
    title: String,
    updated_at: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Source', SourceSchema);