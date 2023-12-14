const { compare } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const prisma = require('../db/prisma');

const authConfig = require('../config/auth');

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    if (!email || !password) {
      throw new AppError('Missing parameters', 400);
    }

    const userExist = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!userExist) {
      throw new AppError('Erro usuário ou senha invalida', 400);
    }

    const passwordMatch = await compare(password, userExist.password);

    // if (password !== userExist.password) {
    //   throw new AppError('Erro usuário ou senha invalida', 400);
    // }

    if (!passwordMatch) {
      throw new AppError('Erro usuário ou senha invalida', 400);
    }

    // const { expiresIn, secret } = authConfig.jwt;

    const token = jwt.sign({ user: userExist.name }, 'hauhauhauhauh', {
      subject: String(userExist.id),
      expiresIn: '1d',
    });

    console.log(token);

    // delete userExist.password;

    // return response.json({
    //   user: userExist,
    //   token,
    // });
  }
}

module.exports = new SessionsController();
