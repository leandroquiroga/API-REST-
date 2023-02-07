import { User } from "../interfaces";
import userModel from "../models/user.model";

export const usersDAO = {
  save: (payload: User) => userModel.create(payload),
  saveMany: (payload: User[]) => userModel.insertMany(payload),
  getAll: () => userModel.find(),
  getOne: (id: number) => userModel.findById({ id }),
  updateOne: (id: number, payload: User) => userModel.findByIdAndUpdate({ id }, payload),
  deleteOne: (id: number) => userModel.findByIdAndDelete({ id }),
  deleteAll: () => userModel.collection.drop(),
};