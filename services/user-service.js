

class UserService {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(info) {
    let infoRegister = await this.userRepository.register({email: info.email, password: info.password});
    return infoRegister;
  }

  async login(info) {
    let infoLogin = await this.userRepository.login({email: info.email, password: info.password});
    return infoLogin;
  }

}

export default UserService;