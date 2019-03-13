import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserRepository } from '../../repository/user.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateUserCommand, resolve: (value?) => void) {
    Logger.log('Async CreateUserHandler...', 'CreateUserCommand');

    const {userDto} = command;
    const user = this.publisher.mergeObjectContext(
      await this.repository.createUser(userDto),
    );
    user.commit();
    resolve();
  }
}
