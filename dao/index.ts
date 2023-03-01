import { User } from "../interfaces";
import userModel from "../models/user.model";

export const usersDAO = {
  save: (payload: User) => userModel.create(payload),
  saveMany: (payload: User[]) => userModel.insertMany(payload),
  getAll: (limit?: number, from?: number) => {
    if(limit && from) 
      return userModel.find().skip(from).limit(limit);
    return userModel.find();
  },
  getOneByID: (id: string) => userModel.findById(id),
  getOneEmail: (email: string) => userModel.findOne({ email }),
  getOneUsername: (username: string) => userModel.findOne({ username }),
  updateOne: (id: string, payload: User) => userModel.findByIdAndUpdate( id , payload),
  deleteOne: (id: string) => userModel.findByIdAndDelete( id ),
  deleteAll: () => userModel.collection.drop(),
};