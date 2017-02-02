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
  .get(authentications.assign, users.index);
router.route('/users/:id')
  .get(authentications.assign, users.show)
  .put(authentications.assign, users.update)
  .delete(authentications.assign, users.delete);
router.route('/dreams')
  .get(authentications.assign, dreams.index)
  .post(authentications.assign, dreams.create);
router.route('/dreams/:id')
  .get(authentications.assign, dreams.show)
  .patch(authentications.assign, dreams.update)
  .put(authentications.assign, dreams.update)
  .delete(authentications.assign, dreams.delete);


module.exports = router;
