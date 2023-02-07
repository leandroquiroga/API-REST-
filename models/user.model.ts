import { Schema, model } from 'mongoose';
import { User } from '../interfaces/index';

const userSchema = new Schema<User>({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  age: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
});

userSchema.method('toJSON', function () {
  const { __v, _id, ...user } = this.toObject();
  user.id = _id;
  return user;
});

export default model<User>('User', userSchema);
