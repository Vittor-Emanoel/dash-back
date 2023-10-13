import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateEventDto } from '../dto/update-event.dto';
import { IEventRepository } from '../repositories/event.repositories';

@Injectable()
export class UpdateEventUseCase {
  constructor(private readonly eventRepository: IEventRepository) {}

  async execute(id: string, data: UpdateEventDto) {
    const eventExist = await this.eventRepository.findUnique(id);

    if (!eventExist) {
      throw new NotFoundException('Event does not exist');
    }

    await this.eventRepository.update(id, data);
  }
}
