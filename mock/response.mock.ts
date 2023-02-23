import { UserResponse } from '../interfaces/index';

type ResponseMock = {
  status: boolean;
  code: number;
  message?: string;
  user: UserResponse;
};

type ResponseManyMock = {
  status: boolean;
  code: number;
  users: UserResponse[];
};

const createUserDaoOk: ResponseMock = {
  status: true,
  code: 201,
  message: 'User created',
  user: {
    email: 'ema3@gmail.com',
    age: 39,
    name: 'Emanuel',
    lastname: 'Rodriguez',
    username: 'emaquiro2',
    id: '63f7c635a785c80bb1b1b029',
  },
};

const getAllUsersDaoOk: ResponseManyMock = {
  status: true,
  code: 200,
  users: [
    {
      email: 'juan@gmail.com',
      age: 39,
      name: 'Juan',
      lastname: 'Quiroga',
      username: 'juank',
      id: '63f13819357f3ad775d80c54',
    },
    {
      email: 'ema@gmail.com',
      age: 39,
      name: 'Emanuel',
      lastname: 'Quiroga',
      username: 'emaquiro',
      id: '63f141c8f65a91fa47891228',
    },
  ],
};

const getOneUserDaoOk: ResponseMock = {
  status: true,
  code: 200,
  user: {
    email: 'juan@gmail.com',
    age: 39,
    name: 'Juan',
    lastname: 'Quiroga',
    username: 'juank',
    id: '63f13819357f3ad775d80c54',
  },
};

const updateUserDaoOk: object = {
  message: 'Se han actualizado su datos correctamente.'
};

const deleteUserDaoOk: object = {
  message: 'El usuario se ha eliminado correctamente'
}

export { createUserDaoOk, getAllUsersDaoOk, getOneUserDaoOk, updateUserDaoOk, deleteUserDaoOk };
