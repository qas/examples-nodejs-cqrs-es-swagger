import { UserCreatedHandler} from './user-created.handler';
import { UserUpdatedHandler} from './user-updated.handler';
import { UserDeletedHandler} from './user-deleted.handler';

export const EventHandlers = [
  UserCreatedHandler,
  UserUpdatedHandler,
  UserDeletedHandler,
];
