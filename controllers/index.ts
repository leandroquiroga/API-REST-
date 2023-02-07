import { Request, Response } from 'express';

export const getAllInfo = (req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    code: 200,
    message: 'Server Up!'
  });
};