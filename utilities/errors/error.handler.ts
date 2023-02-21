import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger';


export const errorHandler = (error: any, _req: Request, res: Response, next: NextFunction) => {
  logger.error(error.message);

  res.status(400).json({
    status: 400,
    typeError: 'Bad Request',
    message: error.message,
    reason: {
      type: error.reason.type,
      message: error.reason.message
    }
  });

  next()
};
