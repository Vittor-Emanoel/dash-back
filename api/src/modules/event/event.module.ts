import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { EventController } from './event.controller';
import { IEventRepository } from './repositories/event.repositories';
import { EventRepository } from './repositories/prisma/event.prisma.repositories';
import { CreateEventUseCase } from './useCases/create-event.usecase';
import { DeleteEventUseCase } from './useCases/delete-event.usecase';
import { GetEventsUseCase } from './useCases/get-events.usecase';
import { UpdateEventUseCase } from './useCases/update-event.usecase';

@Module({
  controllers: [EventController],
  providers: [
    PrismaService,
    CreateEventUseCase,
    GetEventsUseCase,
    UpdateEventUseCase,
    DeleteEventUseCase,
    {
      provide: IEventRepository,
      useClass: EventRepository,
    },
  ],
})
export class EventModule {}
