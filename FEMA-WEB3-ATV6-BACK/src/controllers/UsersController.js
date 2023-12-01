const AppError = require('../utils/AppError');

// eslint-disable no-unused-vars
class UsersController {
  async create(req, res) {
    res.json({ msg: 'rota: user - create' });
  }

  async search(req, res) {
    res.json({ msg: 'rota: user - search' });
  }

  async show(req, res) {
    res.json({ msg: 'rota: user - show' });
  }

  async delete(req, res) {
    res.json({ msg: 'rota: user - delete' });
  }

  async update(req, res) {
    res.json({ msg: 'rota: user - update' });
  }
}

module.exports = new UsersController();
