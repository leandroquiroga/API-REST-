import { CustomValidator } from 'express-validator';
import { usersDAO } from '../dao/index';

export const isValidDomian: CustomValidator = (
  email: string
): Promise<void> => {
  const emailsValid = [
    'hotmail.com',
    'gmail.com',
    'live.com.ar',
    'yahoo.com',
    'outlook.com',
  ];
  const emailDomain = email.split('@').slice(1).join('');
  if (!emailsValid.includes(emailDomain)) {
    return Promise.reject(
      `Dominio es invalido, debe colocar un dominio valido: ${emailsValid}`
    );
  }
  return Promise.resolve();
};

export const isValidID: CustomValidator = async (id: string): Promise<void> => {
  const existUser = await usersDAO.getOneByID(id);
  
  if (!existUser) {
    return Promise.reject(
      `El usuario con el id: ${id}, no existe en la bases de datos`
    );
  }
  return Promise.resolve();
};

export const isValidRange: CustomValidator = async (
  age: number
): Promise<void> => {
  console.log(age < 18);
  if (age < 18) {
    return Promise.reject(
      `No cumple con la edad requerida para nuestras politicas, debe ser mayor de 18 para crear un usuario`
    );
  }

  if (age > 99) {
    return Promise.reject(
      `No cumple con la edad requerida para nuestras politicas`
    );
  }
  return Promise.resolve();
};

export const isEmailAlready: CustomValidator = async (
  email: string
): Promise<void> => {
  const existEmail = await usersDAO.getOneEmail(email);

  if (existEmail)
    return Promise.reject(
      `El email: ${email} ya existe en nuesta bases de datos`
    );
  return Promise.resolve();
};


export const isUsernameAlready: CustomValidator = async (username: string): Promise<void> => {
  const usernameExists = await usersDAO.getOneUsername(username);
  // console.log(usernameExists)
  if (usernameExists) {
    return Promise.reject(
      `El username: ${username} ya existe, por favor ingrese uno nuevo`
    )
  }

  return Promise.resolve()
}