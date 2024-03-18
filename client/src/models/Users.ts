import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export type TUser = {
  _id?: string;
  name: string;
  email: string;
  password: string;
};

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
