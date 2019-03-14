import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../impl/update-user.command';
import { UserRepository } from '../../repository/user.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler
  implements ICommandHandler<UpdateUserCommand> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateUserCommand, resolve: (value?) => void) {
    Logger.log('Async UpdateUserHandler...', 'UpdateUserCommand');

    const {userDto} = command;
    const user = this.publisher.mergeObjectContext(
      await this.repository.updateUser(userDto),
    );
    user.commit();
    resolve();
  }
}
