import { sendEmail} from '../utils/email.js';
import { generateAccessToken } from '../utils/token.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();


class UserService {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(info) {
    try {
      info.password = await bcrypt.hash(info.password, 10);
      const user = await this.userRepository.create(info);
      return { success: true, user };
    } catch (error) {
      return { success: false, message: error.errors[0].message };
    }
  }

  async login(info) {
    try {
      let user = await this.userRepository.findByEmail(info.email);
      
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

  async generateToken(info) {
    const { refreshToken } = info;
    try {
      const user = jwt.verify(refreshToken, process.env.JWT_SECRET);
      const accessToken = generateAccessToken(user.email);
      return { success: true, message: "Token refreshed successfully", accessToken };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  async changePassword(info) {
    const user = await this.userRepository.findById(info.id_user);
    if (!user) {
      return { success: false, message: "No se encontró el usuario" };
    }
    info.password = await bcrypt.hash(info.password, 10);
    const response = await this.userRepository.updatePassword(user, info.password);
    
    if (response.length > 0) {
      return { success: true, message: "Contraseña actualizada correctamente" };
    }
  }

  async recoverPassword(info) {
    const user = await this.userRepository.findByEmail(info.email);
    if (!user) {
      return { success: false, message: "No se encontró el usuario" };
    }
    const url = `${process.env.URL_FRONTEND || "http://localhost:8080" }/change-password?id=${user.id_user}`
    await sendEmail(info.email, "Restablecer contraseña", `Hola ${user.name}, tu contraseña ha sido restablecida`, url);
    return { success: true, message: {url} };
    
  }
}

export default UserService;