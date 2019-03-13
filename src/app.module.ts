import { Module, OnModuleInit } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EventStoreModule } from './core/event-store/event-store.module';

@Module({
  imports: [
    EventStoreModule.forRoot(),
    /** ------------- */
    UsersModule,
  ],
})
export class AppModule implements OnModuleInit {
  async onModuleInit() {}
}
