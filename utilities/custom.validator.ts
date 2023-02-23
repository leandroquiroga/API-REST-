import { check } from 'express-validator';
import {
  isEmailAlready,
  isUsernameAlready,
  isValidDomian,
  isValidID,
  isValidRange,
} from '../helpers/validation';
import { validationField } from '../middlewares';

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
      .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      .withMessage('Email no es valido')
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
      .matches(/^[0-9]+$/)
      .withMessage('Solo se permiten digitos entre 0 y 9')
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
      .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)
      .withMessage('Se ha detectado un caracter no permitido, verifica su nombre')
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
      .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)
      .withMessage('Se ha detectado un caracter no permitido, verifica su apellido')
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
