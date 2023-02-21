import mongoose from "mongoose";
import environment from "../configuration";
import { logger } from '../utilities/logger';

export const dbConnect = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(environment.MONGO_URI, {
      dbName: 'APIREST',
    });
    logger.info('Database connect');
  } catch (error) {
    logger.error('Error! Please contact with administrator')
  }
};