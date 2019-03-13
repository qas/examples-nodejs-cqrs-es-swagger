import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UserResponseCreatedEvent } from '../impl/user-response-created.event';

@EventsHandler(UserResponseCreatedEvent)
export class UserResponseCreatedHandler
  implements IEventHandler<UserResponseCreatedEvent> {
  handle(event: UserResponseCreatedEvent) {
    console.log('UserResponseCreatedEvent...', event); // write here
  }
}
