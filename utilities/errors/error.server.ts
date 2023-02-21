import { NextFunction, Request, Response } from "express"
import { logger } from '../logger';

export const errorServer = (error: any, _req: Request, res: Response, next: NextFunction) => {
  logger.error(error.message);
  
  res.statusCode = 500;

  res.status(500).json({
    status: res.statusCode,
    typeError: 'Server Error',
    message: error.message,
  });

  next()
}