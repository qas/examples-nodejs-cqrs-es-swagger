import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { DeleteUserCommand } from '../impl/delete-user.command';
import { UserRepository } from '../../repository/user.repository';

@CommandHandler(DeleteUserCommand)
export class DeleteUserHandler
  implements ICommandHandler<DeleteUserCommand> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteUserCommand, resolve: (value?) => void) {
    console.log('Async DeleteUserHandler...');

    const { id } = command;
    const user = this.publisher.mergeObjectContext(
      await this.repository.deleteUser(id),
    );
    user.commit();
    resolve();
  }
}
