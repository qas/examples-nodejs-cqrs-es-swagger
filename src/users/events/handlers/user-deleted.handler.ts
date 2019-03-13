import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UserDeletedEvent } from '../impl/user-deleted.event';

@EventsHandler(UserDeletedEvent)
export class UserDeletedHandler
  implements IEventHandler<UserDeletedEvent> {
  handle(event: UserDeletedEvent) {
    console.log('UserDeletedEvent...', event); // write here
  }
}
