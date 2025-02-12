import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


class UserRepository {
  constructor() {
    this.collectionName = 'free_ai';
  }

  async register(info) {
    return "ok";
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