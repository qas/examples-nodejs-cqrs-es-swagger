import { ICommand } from '@nestjs/cqrs';
import { UserDto } from '../../dtos/common.dto';

export class CreateUserCommand implements ICommand {
  constructor(
    public readonly userDto: UserDto,
  ) {}
}
