import { User } from "../interfaces";
import userModel from "../models/user.model";

export const usersDAO = {
  save: (payload: User) => userModel.create(payload),
  saveMany: (payload: User[]) => userModel.insertMany(payload),
  getAll: () => userModel.find(),
  getOne: (id: string) => userModel.findById(id),
  updateOne: (id: string, payload: User) => userModel.findByIdAndUpdate( id , payload),
  deleteOne: (id: string) => userModel.findByIdAndDelete( id ),
  deleteAll: () => userModel.collection.drop(),
};