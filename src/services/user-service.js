import { sendEmail} from '../utils/email.js';

class UserService {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(info) {
    return await this.userRepository.register({ name: info.name, lastname: info.lastname, email: info.email, password: info.password });
  }

  async login(info) {
    return await this.userRepository.login({ email: info.email, password: info.password });
  }

  async generateToken(info) {
    return await this.userRepository.generateToken(info);
  }

  async changePassword(info) {
    const user = await this.userRepository.findById(info.id_user);
    if (!user) {
      return { success: false, message: "No se encontró el usuario" };
    }
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
    await sendEmail("grstiven1004@gmail.com", "Restablecer contraseña", `Hola ${user.name}, tu contraseña ha sido restablecida`, `http://localhost:5173/newpassword?id=${user.id_user}`);
    return { success: true, message: {url: `http://localhost:5173/newpassword?id=${user.id_user}`} };
    
  }
}

export default UserService;