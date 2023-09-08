import { Injectable, NotFoundException } from '@nestjs/common';
import { EventsRepository } from 'src/shared/repositories/events.repositories';

@Injectable()
export class ValidateEventService {
  constructor(private readonly eventRepo: EventsRepository) {}

  async validate(eventId: string) {
    const event = await this.eventRepo.findFirst({
      where: { id: eventId },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }
  }
}
