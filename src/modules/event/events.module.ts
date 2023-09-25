import { Module } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { EventsService } from './events.service';
import { Event } from './event.model';
import { EventsResolver } from './events.resolver';

@Module({
  providers: [EventsRepository, EventsService, Event, EventsResolver],
  exports: [EventsService, EventsRepository, EventsResolver],
  imports: [PrismaModule],
})
export class EventsModule {}
