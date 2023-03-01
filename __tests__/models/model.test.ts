import { isValidObjectId } from 'mongoose';
import userModel from '../../models/user.model';
import { payload } from '../../mock/payload.mock';

describe('Test schema User Model', () => {
  test('Should create a model correctly', () => {
    const model = new userModel(payload);

    expect(isValidObjectId(model.id)).toEqual(true);
    expect(model.collection.name).toEqual('users')
    expect(model?.email).toEqual(payload.email)
  });
});
