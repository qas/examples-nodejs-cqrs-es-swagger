import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UserUpdatedEvent } from '../impl/user-updated.event';

@EventsHandler(UserUpdatedEvent)
export class UserUpdatedHandler
  implements IEventHandler<UserUpdatedEvent> {
  handle(event: UserUpdatedEvent) {
    console.log('UserUpdatedEvent...', event); // write here
  }
}
