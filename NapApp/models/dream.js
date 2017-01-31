const mongoose  = require('mongoose');

const dreamSchema = new mongoose.Schema({
  entry: { type: String, trim: true, required: true },
  date: { type: String, trim: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  totalSleep: { type: Number, trim: true },
  noSleeps: { type: Number, trim: true },
  timeInBed: { type: Number, trim: true }
});

dreamSchema.pre('validate', function(done) {
  return this.model('User').findByIdAndUpdate(this.user, { $addToSet: { dreams: this._id }}, done);
});

module.exports = mongoose.model('Dream', dreamSchema);
