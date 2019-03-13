import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/impl/user-created.event';
import { UserUpdatedEvent } from '../events/impl/user-updated.event';
import { UserDeletedEvent } from '../events/impl/user-deleted.event';

export class User extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  createUser() {
    this.apply(new UserCreatedEvent(this.id));
  }

  updateUser() {
    this.apply(new UserUpdatedEvent(this.id));
  }

  deleteUser() {
    this.apply(new UserDeletedEvent(this.id));
  }
}
