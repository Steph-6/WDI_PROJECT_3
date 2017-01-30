module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin,
  assign: assign
};

const User   = require('../models/user');
const jwt    = require('jsonwebtoken');
const config = require('../config/config');

function authenticationsRegister(req, res){
  User.create(req.body, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });

    const token = jwt.sign({ id: user.id, username: user.username }, config.secret, { expiresIn: 60*60*24 });

    return res.status(201).json({
      message: `Welcome ${user.username}!`,
      user,
      token
    });
  });
}

function authenticationsLogin(req, res){
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!user || !user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: 'Unauthorized.' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, config.secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      message: 'Welcome back.',
      user,
      token
    });
  });
}

function assign(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(500).json({ message: 'Invalid JWT token.' });
    User
      .findById(decoded.id, (err, user) => {
        if (err) return res.status(500).json({ message: 'Invalid JWT token.' });
        if (!user) return res.status(500).json({ message: 'No user found.' });
        // Assign the user to the request
        req.user = user;
        next();
      });
  });
}
