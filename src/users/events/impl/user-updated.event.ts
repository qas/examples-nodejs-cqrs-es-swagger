import { IEvent } from '@nestjs/cqrs';

export class UserUpdatedEvent implements IEvent {
    constructor(
        public readonly id: string) {}
}