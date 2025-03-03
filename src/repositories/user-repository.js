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
          const refreshToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
          return { success: true, accessToken, refreshToken };
        } else {
          return { success: false, message: 'Invalid password' };
        }
      } else {
        return { success: false, message: 'Invalid email' };
      }
    } catch (error) {
      return { success: false, message: error };
    }
  }

  async generateToken(cookies) {
    const { refreshToken } = cookies;
    try {
      const user = jwt.verify(refreshToken, process.env.JWT_SECRET);
      const accessToken = generateAccessToken(user.email);
      return { success: true, message: "Token refreshed successfully", accessToken };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async findByEmail(email) {
    return await this.model.findOne({ where: { email } });
  }

  async findById(id) {
    return await this.model.findOne({ where: { id_user: id } });
  }

  async updatePassword(user, password) {
    return await this.model.update({ password: password }, { where: { id_user: user.id_user } });
  }


}


export default UserRepository;