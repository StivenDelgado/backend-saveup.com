

class UserService {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async register(info) {
    let infoRegister = await this.userRepository.register({name: info.name, lastname: info.lastname, email: info.email, password: info.password});
    return infoRegister;
  }

  async login(info) {
    let infoLogin = await this.userRepository.login({email: info.email, password: info.password});
    return infoLogin;
  }

}

export default UserService;