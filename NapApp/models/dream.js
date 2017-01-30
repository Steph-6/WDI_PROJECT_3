const mongoose  = require('mongoose');

const dreamSchema = new mongoose.Schema({
  entry: { type: String, trim: true, required: true },
  date: { type: Date, trim: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

dreamSchema.pre('validate', function(done) {
  return this.model('User').findByIdAndUpdate(this.user, { $addToSet: { dreams: this._id }}, done);
});

module.exports = mongoose.model('Dream', dreamSchema);
