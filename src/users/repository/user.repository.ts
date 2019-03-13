import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserRepository {
  async findOneById(id: number): Promise<User> {
    return new User('');
  }

  async createUser(id) {
    const user = new User(id);
    user.createUser();
    return user;
  }

  async updateUser(id) {
    const user = new User(id);
    user.updateUser();
    return user;
  }

  async deleteUser(id) {
    const user = new User(id);
    user.deleteUser();
    return user;
  }
}
