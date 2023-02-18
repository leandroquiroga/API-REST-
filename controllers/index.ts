/* eslint-disable @typescript-eslint/no-explicit-any */
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
  } catch (err: any) {
    logger.error(err);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await usersDAO.getOneByID(id);
    res.status(200).json({
      status: true,
      code: 200,
      user: response,
    });
  } catch (err: any) {
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
  } catch (err: any) {
    logger.error(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;

  try {
    if (!payload)
      return res.status(400).json({
        message: 'Es obligatorio al menos un dato para editar el usuario',
      });

    await usersDAO.updateOne(id, payload);
    res.status(200).json({
      message: 'Se han actualizado su datos correctamente.',
    });
  } catch (err: any) {
    logger.error(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await usersDAO.deleteOne(id);
    res.status(200).json({
      message: 'El usuario se ha eliminado correctamente',
    });
  } catch (err: any) {
    logger.error(err);
  }
};
