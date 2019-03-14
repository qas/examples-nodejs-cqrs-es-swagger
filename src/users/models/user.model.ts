import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/impl/user-created.event';
import { UserUpdatedEvent } from '../events/impl/user-updated.event';
import { UserDeletedEvent } from '../events/impl/user-deleted.event';
import { UserDto } from '../dtos/users.dto';

export class User extends AggregateRoot {
  [x: string]: any;

  constructor(private readonly id: string) {
    super();
  }

  setData(data) {
    this.data = data;
  }

  createUser() {
    this.apply(new UserCreatedEvent(this.data));
  }

  updateUser() {
    this.apply(new UserUpdatedEvent(this.data));
  }

  deleteUser() {
    this.apply(new UserDeletedEvent(this.id));
  }
}
