/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-inferrable-types */

import { usersDAO } from '../../dao/index';
import userModel from '../../models/user.model';
import {
  createUserDaoOk,
  deleteUserDaoOk,
  getAllUsersDaoOk,
  getOneUserDaoOk,
  updateUserDaoOk,
} from '../../mock/response.mock';
import { payload } from '../../mock/payload.mock';
import { User } from '../../interfaces/index';

//mock of models
jest.mock('../../models/user.model');

describe('Test dao', () => {
  test('should save a new user', async () => {
    
    //@ts-ignore
    userModel.create.mockReturnValue(createUserDaoOk);
    const saveUserResponse = await usersDAO.save(payload);

    expect(saveUserResponse).toEqual(createUserDaoOk);
  });

  test('should return all users', async () => {
    
    //@ts-ignore
    userModel.find.mockReturnValue(getAllUsersDaoOk);
    const getAllUserResponse = await usersDAO.getAll();

    expect(getAllUserResponse).toEqual(getAllUsersDaoOk);
  });

  test('shuold return a user by ID', async () => {
    const id: string = '63f13819357f3ad775d80c54';
    
    //@ts-ignore
    userModel.findById.mockReturnValue(getOneUserDaoOk);
    const getOneUserByIDResponse = await usersDAO.getOneByID(id);

    expect(getOneUserByIDResponse).toEqual(getOneUserDaoOk);
  });

  test('should return a user by email', async () => {
    const email: string = 'juan@gmail.com';
    
    //@ts-ignore
    userModel.findOne.mockReturnValue(getOneUserDaoOk);
    const getOneUserByEmailResponse = await usersDAO.getOneEmail(email);

    expect(getOneUserByEmailResponse).toEqual(getOneUserDaoOk);
  });
  test('should return a user by userName', async () => {
    const username: string = 'juank';
    
    //@ts-ignore
    userModel.findOne.mockReturnValue(getOneUserDaoOk);
    const getOneUserByEmailResponse = await usersDAO.getOneUsername(username);

    expect(getOneUserByEmailResponse).toEqual(getOneUserDaoOk);
  });

  test('should update a user', async () => {

    const payload: User = {
      email: "juan1@gmail.com",
      age: 49,
      name: "Juan",
      lastname: "Quiroga",
      username: "juank"
  }
    const id: string = '63f13819357f3ad775d80c54';
    
    //@ts-ignore
    userModel.findByIdAndUpdate.mockReturnValue(updateUserDaoOk);
    const updateOneUserResponse = await usersDAO.updateOne(id, payload);

    expect(updateOneUserResponse).toEqual(updateUserDaoOk);
  });

 
  test('should delete a user', async() => {
    const id: string = '63f13819357f3ad775d80c54';

    //@ts-ignore
    userModel.findByIdAndDelete.mockReturnValue(deleteUserDaoOk);
    const deleteOneUserResponse = await usersDAO.deleteOne(id);

    expect(deleteOneUserResponse).toEqual(deleteUserDaoOk);
  });
});
