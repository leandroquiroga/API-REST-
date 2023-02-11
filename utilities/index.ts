import { check } from 'express-validator';
import pino from 'pino';
import { isValidDomian, isValidID } from '../helpers';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const validator = {
  isValidId: check('id')
    .notEmpty()
    .withMessage('ID es requerido.')
    .bail()
    .isMongoId()
    .withMessage('Debe ser un ID valido para mongo')
    .bail()
    .custom(isValidID),
  createUser: [
    check('email')
      .notEmpty()
      .withMessage('Email es requerido')
      .bail()
      .isEmail()
      .withMessage('Debe ser un email valido')
      .bail()
      .custom(isValidDomian)
  ],
};
