import { User } from '../models/UserModel.js';

class UserRepository {
  constructor() {
    this.model = User;
  }

  async create(info) {
    return await this.model.create(info);
  }
  async findByEmail(email) {
    return await this.model.findOne({ where: { email } });
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async updatePassword(user, password) {
    return await this.model.update({ password: password }, { where: { id_user: user.id_user } });
  }


}


export default UserRepository;