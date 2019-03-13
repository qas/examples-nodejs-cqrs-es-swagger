import { IEvent } from '@nestjs/cqrs';

export class UserResponseCreatedEvent implements IEvent {
    constructor(
        public readonly id: string) {}
}