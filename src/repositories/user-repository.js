import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/UserModel.js';
import bcrypt from 'bcrypt';
dotenv.config();


class UserRepository {
  constructor() {
    this.model = User; 
  }

  async register(info) {
    try {
      info.password = await bcrypt.hash(info.password, 10);
      const user = await this.model.create(info);
      return { success: true, user };
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return { success: false, message: error.errors[0].message };
      }
      if (error.name === 'SequelizeValidationError') {
        return { success: false, message: error.errors[0].message};
      }
    }
  }

  async login(info) {
    const token = jwt.sign(
      { userEmail: info.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    return { login: true, token }
  }

}

export default UserRepository;