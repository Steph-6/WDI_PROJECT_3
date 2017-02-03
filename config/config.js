module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/nap-app',
  secret: process.env.SECRET || 'gosh this is so secret... shhh...'
};
