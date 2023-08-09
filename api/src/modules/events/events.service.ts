import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsRepository } from 'src/shared/repositories/events.repositories';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepo: EventsRepository) {}

  async create(createEventDto: CreateEventDto) {
    const { name, date, church_Id } = createEventDto;

    const event = await this.eventsRepo.create({
      data: {
        name,
        date,
        church_Id,
      },
    });

    return event;
  }

  async findAll() {
    return this.eventsRepo.findMany({
      select: {
        id: true,
        name: true,
        church: {
          select: {
            id: true,
            shepherd: true,
          },
        },
        attendees: {
          select: {
            member: {
              select: {
                id: true,
                name: true,
                church_id: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            present: true,
          },
        },
      },
    });
  }
}
