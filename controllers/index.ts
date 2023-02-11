import { Request, Response } from 'express';
import { logger } from '../utilities';
import { usersDAO } from '../dao/index';

export const getUser = async (req: Request, res: Response) => {
  try {
    const response = await usersDAO.getAll();
    res.status(200).json({
      status: true,
      code: 200,
      users: response,
    });
  } catch (err) {
    logger.error(err);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await usersDAO.getOne(id);
    res.status(200).json({
      status: true,
      code: 200,
      user: response,
    });
  } catch (err) {
    logger.error(err);
  }
};

export const postUsers = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const response = await usersDAO.save(data);
    res.status(201).json({
      status: true,
      code: 201,
      message: 'User created',
      user: response,
    });
  } catch (err) {
    logger.error(err);
  }
};
