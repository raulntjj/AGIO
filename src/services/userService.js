import * as userModel from '../models/userModel.js';

export const listUsers = async () => {
  return userModel.getAllUsers();
};