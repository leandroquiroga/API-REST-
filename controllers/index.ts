/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express';
import { usersDAO } from '../dao/index';

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const limit = Number(req.query.limit);
    const from = Number(req.query.from);

    const response = await usersDAO.getAll(limit, from);
    res.status(200).json({
      status: true,
      code: 200,
      users: response,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const response = await usersDAO.getOneByID(id);
    res.status(200).json({
      status: true,
      code: 200,
      user: response,
    });
  } catch (err: any) {
    next(err);
  }
};

export const postUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    next(err);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    if (req.body) {
      await usersDAO.updateOne(id, req.body);
      res.status(200).json({
        message: 'Se han actualizado su datos correctamente.',
      });
    }

    return res.status(400).json({
      message: 'Es obligatorio al menos un dato para editar el usuario',
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    await usersDAO.deleteOne(id);
    res.status(200).json({
      message: 'El usuario se ha eliminado correctamente',
    });
  } catch (err: any) {
    next(err);
  }
};
