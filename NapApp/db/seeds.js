const mongoose    = require('mongoose');
const config      = require('../config/config');
const Promise     = require('bluebird');
const async       = require('async');
mongoose.Promise  = Promise;

const User        = require('../models/user');
const Dream       = require('../models/dream');

mongoose.connect(config.db);

async.waterfall([
  function dropCollections(done) {
    User.collection.drop();
    Dream.collection.drop();
    return done(null);
  },
  function userCreate(done) {
    const user = new User({
      username: 'HotJos69',
      firstName: 'Josceline',
      lastName: 'O\'Sullivan',
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
  },
  function dreamCreate1(user, done) {
    const dream1 = new Dream({
      entry: 'Last night I dreamt that I was half centaur. As in, human from the knees up but with little horse legs. You know, as full centaur would be half and half, half centaur is basically a quarter horse. In this dream I was a horse running in the grand national, but as my legs were all weird and way shorter than the other proper horses I didnt finish the race as its fookin miles and I was essentially only running from the knees down. It was a real blow to my confidence',
      date: '28 Jan 2017',
      user: user._id
    });
    dream1.save((err, dream) => {
      if (err) return done(err);
      console.log(`${dream.entry} was created`);
      return done(null, user, dream);
    });
  },
  function dreamCreate2(user, done) {
    const dream2 = new Dream({
      entry: 'Last night I had a dream that I met my hero Michael Jordan. He confided in me that he owed his success to doping and that none of his achievements were legitimate. I reported him to the relevant doping authorities and he was stripped of his various titles. I was hailed as a hero and paraded around New York on a Sedan Chair with ex-Mayor Rudi Giuliani',
      date: '29 Jan 2017',
      user: user._id
    });
    dream2.save((err, dream) => {
      if (err) return done(err);
      console.log(`${dream.entry} was created`);
      return done(null, user, dream);
    });
  },
  function dreamCreate3(user, done) {
    const dream3 = new Dream({
      entry: 'I was a weresloth, a man that turns into a sloth during the full moon.',
      date: new Date(),
      user: user._id
    });
    dream3.save((err, dream) => {
      if (err) return done(err);
      console.log(`${dream.entry} was created`);
      return done(null, user, dream);
    });
  }
], function (err) {
  if (err) return console.log(err);
  console.log('finished');
  return process.exit();
});
