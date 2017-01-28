module.exports = {
  port: process.env.PORT || 3000,
  db: 'mongodb://localhost/angular-authentication',
  secret: process.env.SECRET || 'gosh this is so secret... shhh...'
};
