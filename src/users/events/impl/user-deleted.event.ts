import { IEvent } from '@nestjs/cqrs';

export class UserDeletedEvent implements IEvent {
  constructor(
    public readonly user_id: string) {}
}