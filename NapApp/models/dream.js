const mongoose  = require('mongoose');

const dreamSchema = new mongoose.Schema({
  entry: { type: String, trim: true, required: true },
  date: { type: String, trim: true }
});

module.exports = mongoose.model('Dream', dreamSchema);
