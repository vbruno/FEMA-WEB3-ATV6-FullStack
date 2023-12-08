// eslint-disable-next-line
const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');
const AppError = require('../utils/AppError');

const prisma = new PrismaClient();

// eslint-disable no-unused-vars
class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new AppError('Missing parameters', 400);
    }

    if (!email.includes('@')) {
      throw new AppError('Invalid email', 400);
    }

    const userExist = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new AppError('User already exists', 400);
    }

    if (password.length < 6 || password.length > 20) {
      throw new AppError('Password must be at least 6 characters', 400);
    }

    const user = await prisma.users.create({
      data: {
        email,
        name,
        password: await hash(password, 10),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    res.json(user);
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
