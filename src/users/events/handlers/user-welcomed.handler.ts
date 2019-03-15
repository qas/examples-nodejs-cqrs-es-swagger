import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UserWelcomedEvent } from '../impl/user-welcomed.event';
import { Logger } from '@nestjs/common';

@EventsHandler(UserWelcomedEvent)
export class UserWelcomedHandler
  implements IEventHandler<UserWelcomedEvent> {
  handle(event: UserWelcomedEvent) {
    Logger.log(event, 'UserWelcomedEvent'); // write here
  }
}
