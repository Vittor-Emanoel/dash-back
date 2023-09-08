import { Injectable, NotFoundException, ParseUUIDPipe } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsRepository } from 'src/shared/repositories/events.repositories';

@Injectable()
export class EventsService {
  constructor(private readonly eventsRepo: EventsRepository) {}

  async create(createEventDto: CreateEventDto) {
    const { name, date } = createEventDto;

    await this.eventsRepo.create({
      data: {
        name,
        date,
      },
    });
  }

  async findAll() {
    return this.eventsRepo.findAll({
      select: {
        id: true,
        name: true,
        date: true,
        attendances: {
          select: {
            member: {
              select: {
                id: true,
                fullName: true,
                office: true,
                church: true,
              },
            },
            attendanceStatus: true,
          },
        },
      },
    });
  }

  async findOne(eventId: string) {
    const event = await this.eventsRepo.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      throw new NotFoundException('Event does not exist');
    }

    return await this.eventsRepo.findFirst({
      where: { id: eventId },
      select: {
        id: true,
        name: true,
        date: true,
        attendances: {
          select: {
            member: {
              select: {
                fullName: true,
                office: {
                  select: {
                    name: true,
                  },
                },
                church: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            attendanceStatus: true,
          },
        },
      },
    });
  }

  async update(eventId: string, updateEventDto: UpdateEventDto) {
    const { name, date } = updateEventDto;

    const eventExist = await this.eventsRepo.findFirst({
      where: { id: eventId },
    });

    if (!eventExist) {
      throw new NotFoundException('This is event not exists');
    }

    const event = await this.eventsRepo.update({
      where: { id: eventId },
      data: {
        name,
        date,
      },
    });

    return event;
  }

  async remove(eventId: string) {
    const eventExist = await this.eventsRepo.findFirst({
      where: { id: eventId },
    });

    if (!eventExist) {
      throw new NotFoundException('This is event not exists');
    }

    await this.eventsRepo.delete({
      where: { id: eventId },
    });

    return;
  }
}
