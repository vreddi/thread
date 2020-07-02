import { Document, Schema, Model, model } from 'mongoose';

export type UserModel = {
  email: string;
  name?: string;
} & Document;

export const UserSchema = new Schema({
  email: { type: String, required: true },
  name: String
}, { timestamps: true});

export const User: Model<UserModel> = model<UserModel>("User", UserSchema);
