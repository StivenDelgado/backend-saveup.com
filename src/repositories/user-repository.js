import dotenv from 'dotenv';
import { User } from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import { generateAccessToken } from '../utils/token.js';
import jwt from 'jsonwebtoken';
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
      return { success: false, message: error.errors[0].message };
    }
  }

  async login(info) {

    try {
      let user = await this.model.findOne({ where: { email: info.email } });
      if (user) {
        if (bcrypt.compareSync(info.password, user.password)) {
          const accessToken = generateAccessToken(user.email);
          const refreshToken = jwt.sign({email: user.email}, process.env.JWT_SECRET, { expiresIn: '1d' });
          return { login: true, accessToken, refreshToken };
        } else {
          return { login: false, message: 'Invalid password' };
        }
      } else {
        return { login: false, message: 'Invalid email' };
      }
    } catch (error) {
      return { login: false, message: error };
    }
  }

  async generateToken(info) {
    try {
    } catch (error) {
      return { success: false, message: error };
    }
  }

}

export default UserRepository;