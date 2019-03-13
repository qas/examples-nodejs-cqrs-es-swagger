import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserIdRequestParamsDto } from '../dtos/common.dto';
import { UserDto } from '../dtos/common.dto';
import { CreateUserCommand } from '../commands/impl/create-user.command';
import { UpdateUserCommand } from '../commands/impl/update-user.command';
import { DeleteUserCommand } from '../commands/impl/delete-user.command';

@Injectable()
export class UsersService {
  constructor(private readonly commandBus: CommandBus) {}

  async createUser(createUserDto: UserDto) {
    return await this.commandBus.execute(
      new CreateUserCommand(createUserDto),
    );
  }

  async updateUser(createUserDto: Partial<UserDto>) {
    return await this.commandBus.execute(
      new UpdateUserCommand(createUserDto),
    );
  }

  async deleteUser(userId: UserIdRequestParamsDto) {
    return await this.commandBus.execute(
      new DeleteUserCommand(userId),
    );
  }

  async findUsers(params) {
    // TODO
  }
}
