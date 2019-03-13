import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { UpdateUserCommand } from '../impl/update-user.command';
import { UserRepository } from '../../repository/user.repository';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler
  implements ICommandHandler<UpdateUserCommand> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateUserCommand, resolve: (value?) => void) {
    console.log('Async UpdateUserHandler...');

    const { id } = command;
    const user = this.publisher.mergeObjectContext(
      await this.repository.updateUser(id),
    );
    user.commit();
    resolve();
  }
}
