import { ConflictException, Injectable } from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';
import { IEventRepository } from '../repositories/event.repositories';

@Injectable()
export class CreateEventUseCase {
  constructor(private readonly eventRepository: IEventRepository) {}

  async execute(data: CreateEventDto) {
    const { name, date } = data;

    const existingEvent = await this.eventRepository.findEvent(name, date);

    if (existingEvent) {
      throw new ConflictException(
        'Event already exists with the same date and name',
      );
    }

    await this.eventRepository.create(data);
  }
}
