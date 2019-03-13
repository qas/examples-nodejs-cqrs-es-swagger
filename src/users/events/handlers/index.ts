import { UserCreatedHandler} from './user-created.handler';
import { UserUpdatedHandler} from './user-updated.handler';
import { UserDeletedHandler} from './user-deleted.handler';
import { UserResponseCreatedHandler} from './user-response-created.handler';

export const EventHandlers = [
  UserCreatedHandler,
  UserUpdatedHandler,
  UserDeletedHandler,
  UserResponseCreatedHandler,
];
