const mongoose = require('mongoose');
const config   = require('../config/config');
const Promise  = require('bluebird');
const async    = require('async');
mongoose.Pormise = Promise;

const User     = require('../models/user');
const Dream     = require('../models/dream');

mongoose.connect(config.db);

User.collection.drop();
Dream.collection.drop();

async.waterfall([
  function userCreate(done) {
    const user = new User({
      username: 'Jos',
      firstName: 'jos',
      lastName: 'jos',
      image: 'xxx',
      email: 'jos@jos.com',
      password: 'password',
      passwordConfirmation: 'password'
    });
    user
      .save((err, user) => {
        if (err) return done(err);
        console.log(`${user.username} was saved`);
        return done(null, user);
      });
  }, function dreamCreate(user, done) {
    const dream1 = new Dream({
      entry: 'i dreamed about a tiger.....',
      date: '29/01/2017'
    });
    dream1.save((err, dream) => {
      if (err) return done(err);
      console.log(`${dream.entry} was created`);
      return done(null, user, dream);
    });
  }, function AddDreamToUser(user, dream, done) {
    user.dreamEntry.addToSet(dream);
    user.save((err, user) => {
      if (err) return done(err);
      console.log(`${dream.entry} was added to ${user.username}`);
      return done(null, dream);
    });
  }
], function (err) {
  if (err) return console.log(err);
  console.log('finished');
  return process.exit();
});
