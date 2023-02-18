import { check } from 'express-validator';
import pino from 'pino';
import {
  isEmailAlready,
  isUsernameAlready,
  isValidDomian,
  isValidID,
  isValidRange,
} from '../helpers';
import { validationField } from '../middlewares';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export const validator = {
  isValidId: [
    check('id')
      .notEmpty()
      .withMessage('ID es requerido.')
      .bail()
      .isMongoId()
      .withMessage('Debe ser un ID valido para mongo')
      .bail()
      .custom(isValidID),
    validationField,
  ],
  createUser: [
    check('email')
      .notEmpty()
      .withMessage('Email es obligatorio')
      .bail()
      .isEmail()
      .withMessage('Debe ser un email valido')
      .bail()
      .custom(isValidDomian)
      .bail()
      .custom(isEmailAlready),
    validationField,
    check('age')
      .notEmpty()
      .withMessage('La edad es obligatorio')
      .bail()
      .isNumeric()
      .withMessage('La edad debe ser un valor numerico')
      .bail()
      .custom(isValidRange),
    validationField,
    check('name')
      .notEmpty()
      .withMessage('El nombre es obligatorio')
      .bail()
      .isLength({ min: 3, max: 20 })
      .withMessage('El nombre detener entre 3 y 20 caracteres')
      .bail(),
    validationField,
    check('username')
      .notEmpty()
      .withMessage('El username es obligatorio')
      .bail()
      .custom(isUsernameAlready),
    validationField,
    check('lastname')
      .notEmpty()
      .withMessage('El apellido es obligatorio')
      .bail()
      .isLength({ min: 3, max: 20 })
      .withMessage('El nombre detener entre 3 y 20 caracteres')
      .bail(),
    validationField,
  ],
  updateValidator: [
    check('email').custom(isEmailAlready),
    validationField,
    check('username').custom(isUsernameAlready),
    validationField,
  ],
};
