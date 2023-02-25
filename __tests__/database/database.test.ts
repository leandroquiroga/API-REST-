import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userModel from '../../models/user.model';

dotenv.config();

import { closeDatabase, connectDatabase } from '../../mock/connectiondb.mock';
import { logger } from '../../utilities/logger';

describe('Connect with database', () => {
  // Connection to a in-memory database before running any tests.
  beforeAll(async () => {
    await connectDatabase();
  });

  // Remove and close the database and server
  afterAll(async () => {
    await closeDatabase();
    await mongoose.connection.close();
    logger.info('Database disconnect');
  });

  test('should return the name of the collection be equal to centrals', async () => {
    const model = new userModel();

    expect(model.collection.name).toEqual('users');
    expect(model.schema?.obj).toEqual({
      email: { type: String, require: true, unique: true },
      age: { type: Number, require: true },
      name: { type: String, require: true },
      lastname: { type: String, require: true },
      username: { type: String, require: true },
    });
  });
});
