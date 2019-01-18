var mongoose = require('mongoose');

var LeadSchema = new mongoose.Schema({
    title: String,
    text: String,
    updated_at: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('Lead', LeadSchema);