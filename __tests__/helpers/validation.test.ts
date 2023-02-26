/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-conditional-expect */

import { Location, Meta } from 'express-validator';
import {
  isValidDomian,
  isValidID,
  isValidRange,
  isEmailAlready,
  isUsernameAlready
} from '../../helpers/validation';
import { Request } from 'express';
import { closeDatabase, connectDatabase } from '../../mock/connectiondb.mock';
import mongoose from 'mongoose';

// Connection to a in-memory database before running any tests.
beforeAll(async () => {
  await connectDatabase();
});

// Remove and close the database and server
afterAll(async () => {
  await closeDatabase();
  await mongoose.connection.close();
});
describe('Tests on validatios.ts', () => {

  let mockEmail: string, idMock: string, userNameMock: string;
  let mockAge: number;

  const mockMeta: Meta = {
    req: jest.fn() as unknown as Request,
    location: jest.fn() as unknown as Location,
    path: '/users',
  };
  test('should return one reject promise with message - Dominio es invalido, debe colocar un dominio valido', async () => {
    mockEmail = 'test@test.com';

    expect.assertions(1);
    try {
      await isValidDomian(mockEmail, mockMeta);
    } catch (error) {
      expect(error).toEqual(
        'Dominio es invalido, debe colocar un dominio valido: hotmail.com,gmail.com,live.com.ar,yahoo.com,outlook.com'
      );
    }
  });

  test('should return one reject promise with message - El usuario con el id: ${id}, no existe en la bases de datos', async () => {
    idMock = '63f141c8f65a91fa47891221';

    expect.assertions(1);
    try {
      await isValidID(idMock, mockMeta);
    } catch (error) {
      expect(error).toEqual(
        `El usuario con el id: ${idMock}, no existe en la bases de datos`
      );
    }
  });

  test('should return one reject promise with message - No cumple con la edad requerida para nuestras politicas, debe ser mayor de 18 para crear un usuario', async () => {
    mockAge = 16;

    expect.assertions(1);
    try {
      await isValidRange(mockAge, mockMeta);
    } catch (error) {
      expect(error).toEqual(
        'No cumple con la edad requerida para nuestras politicas, debe ser mayor de 18 para crear un usuario'
      );
    }
  });

  test('should return one reject promise with message - No cumple con la edad requerida para nuestras politicas', async () => {
    mockAge = 100;

    expect.assertions(1);
    try {
      await isValidRange(mockAge, mockMeta);
    } catch (error) {
      expect(error).toEqual(
        'No cumple con la edad requerida para nuestras politicas'
      );
    }
  });

  test('should return one reject promise with message - El email: ${email} ya existe en nuesta bases de datos', async () => {
    mockEmail = 'ema@gmail.com';

    expect.assertions(0);
    try {
      await isEmailAlready(mockEmail, mockMeta);
    } catch (error) {
      expect(error).toEqual(
        `El email: ${mockEmail} ya existe en nuesta bases de datos`
      );
    }
  });

  test('should return on reject promise with message - El username: ${username} ya existe, por favor ingrese uno nuevo', async () => {
    userNameMock = 'emaquiro'
    
    expect.assertions(0)
    try {
      await isUsernameAlready(userNameMock, mockMeta);
    } catch (error) {
      console.log(error)
      expect(error).toEqual(`El username: ${userNameMock} ya existe, por favor ingrese uno nuevo`)
    }
  });
});
