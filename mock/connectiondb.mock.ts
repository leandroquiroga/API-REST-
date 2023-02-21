import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { logger } from '../utilities/logger';

mongoose.set('autoIndex', false);
const createConnection = async (): Promise<MongoMemoryServer> =>
  await MongoMemoryServer.create();

// Connect to the in-memory database.
const connectDatabase = async (): Promise<void> => {
  const uri: string = (await createConnection()).getUri();
  await mongoose.connect(uri, { dbName: 'User' });
  logger.info('Database connect');
};

// Drop database and close connection
const closeDatabase = async (): Promise<void> => {
  (await createConnection()).stop();
};

export { connectDatabase, closeDatabase };
