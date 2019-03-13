import * as clc from 'cli-color';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ICommand, EventObservable } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/impl/user-created.event';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class UsersSagas {
  userCreated = (events$: EventObservable<any>): Observable<ICommand> => {
    return events$
      .ofType(UserCreatedEvent)
      .pipe(
        delay(1000),
        map(event => {
          console.log('Inside [UsersSagas] Saga');
          // TODO - your would probably trigger a new command here to continue the saga of user creation
          // TODO - remember this is just for example, as you may not even need sagas at all
          return '';
        }),
      );
  }
}
