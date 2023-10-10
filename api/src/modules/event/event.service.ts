import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { IEventRepository } from './repositories/event.repositories';
import { FormatDate } from 'src/shared/utils/date';

@Injectable()
export class EventService {
  constructor(private readonly eventRepository: IEventRepository) {}

  async create(data: CreateEventDto) {
    const { name, date } = data;

    const dateFormat = FormatDate(date);

    const eventExistsWithTheSameName = await this.eventRepository.findUnique(
      name,
    );

    const eventExistSameDate = await this.eventRepository.findUnique(
      dateFormat,
    );

    if (eventExistsWithTheSameName && eventExistSameDate) {
      return console.log('caiu');
    }

    await this.eventRepository.create(data);
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
