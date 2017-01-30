const express  = require('express');
const router   = express.Router();

const authentications = require('../controllers/authentications');
const users           = require('../controllers/users');
const dreams          = require('../controllers/dreams');

router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);
router.route('/dreams')
  .post(authentications.assign, dreams.create);
router.route('/dreams/:id')
  .get(dreams.show);

module.exports = router;
