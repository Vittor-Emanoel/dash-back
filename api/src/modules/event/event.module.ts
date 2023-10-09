import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IEventRepository } from './repositories/event.repositories';
import { EventRepository } from './repositories/prisma/event.prisma.repositories';

@Module({
  controllers: [EventController],
  providers: [
    EventService,
    PrismaService,
    {
      provide: IEventRepository,
      useClass: EventRepository,
    },
  ],
})
export class EventModule {}
