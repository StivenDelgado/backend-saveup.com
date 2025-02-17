

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

}

export default UserService;