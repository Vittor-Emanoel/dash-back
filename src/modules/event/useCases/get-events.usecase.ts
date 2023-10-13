import { Injectable } from '@nestjs/common';
import { IEventRepository } from '../repositories/event.repositories';

@Injectable()
export class GetEventsUseCase {
  constructor(private readonly eventRepository: IEventRepository) {}

  async execute() {
    return await this.eventRepository.findAll();
  }
}
