import { ICommand } from '@nestjs/cqrs';

export class CreateUserResponseCommand implements ICommand {
  constructor(
    public readonly id: object,
  ) {}
}
