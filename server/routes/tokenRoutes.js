const requireLogin = require('../middlewares/requireLogin');
const tokenController = require('../controllers').tokencode;

module.exports = app => {
  app.get('/api/printer/token', requireLogin, tokenController.list);
  app.post('/api/printer/token', requireLogin, tokenController.create);
  app.post(
    '/api/printer/token/rotate',
    requireLogin,
    tokenController.rotateToken
  );
};
