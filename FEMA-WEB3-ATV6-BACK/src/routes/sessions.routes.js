const { Router } = require('express');

const sessionsController = require('../controllers/SessionsController');

const sessionsRouter = Router();

sessionsRouter.get('/', (req, res) => {
  res.json({ msg: 'Rota: sessions' });
});

sessionsRouter.post('/token', sessionsController.create);

module.exports = { sessionsRouter };
