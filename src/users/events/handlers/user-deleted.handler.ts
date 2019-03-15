import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UserDeletedEvent } from '../impl/user-deleted.event';
import { Logger } from '@nestjs/common';

@EventsHandler(UserDeletedEvent)
export class UserDeletedHandler
  implements IEventHandler<UserDeletedEvent> {
  handle(event: UserDeletedEvent) {
    Logger.log(event, 'UserDeletedEvent'); // write here
  }
}
