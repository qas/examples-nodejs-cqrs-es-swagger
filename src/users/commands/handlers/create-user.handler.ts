import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserRepository } from '../../repository/user.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateUserCommand, resolve: (value?) => void) {
    console.log('Async CreateUserHandler...');

    const { id } = command;
    const user = this.publisher.mergeObjectContext(
      await this.repository.createUser(id),
    );
    user.commit();
    resolve();
  }
}
