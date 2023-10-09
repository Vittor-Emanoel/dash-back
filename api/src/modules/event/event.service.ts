import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { IEventRepository } from './repositories/event.repositories';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: IEventRepository) {}

  async create(data: CreateEventDto) {
    const event = await this.eventRepository.create(data);

    return event;
  }

  async findAll() {
    return await this.eventRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
