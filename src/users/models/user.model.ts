import { AggregateRoot } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/impl/user-created.event';
import { UserUpdatedEvent } from '../events/impl/user-updated.event';
import { UserDeletedEvent } from '../events/impl/user-deleted.event';
import { UserDto } from '../dtos/common.dto';

export class User extends AggregateRoot {
  constructor(private readonly userDto: UserDto) {
    super();
  }

  createUser() {
    this.apply(new UserCreatedEvent(this.userDto));
  }

  updateUser() {
    this.apply(new UserUpdatedEvent(this.userDto));
  }

  deleteUser() {
    this.apply(new UserDeletedEvent(this.userDto.user_id));
  }
}
