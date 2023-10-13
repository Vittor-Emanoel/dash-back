import { Injectable, NotFoundException } from '@nestjs/common';

import { IEventRepository } from '../repositories/event.repositories';

@Injectable()
export class DeleteEventUseCase {
  constructor(private readonly eventRepository: IEventRepository) {}

  async execute(id: string) {
    const eventExist = await this.eventRepository.findUnique(id);

    if (!eventExist) {
      throw new NotFoundException('Event does not exist');
    }

    await this.eventRepository.delete(id);
  }
}
