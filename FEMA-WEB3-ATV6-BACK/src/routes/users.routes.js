const { Router } = require('express');

const usersController = require('../controllers/UsersController');

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  res.json({ msg: 'Rota: users' });
});

usersRouter.post('/register', usersController.create);
usersRouter.get('/search', usersController.search);
usersRouter.get('/:id', usersController.show);
usersRouter.delete('/:id', usersController.delete);
usersRouter.put('/', usersController.update);

module.exports = { usersRouter };
