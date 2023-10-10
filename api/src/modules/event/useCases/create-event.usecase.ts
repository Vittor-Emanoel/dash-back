import { Injectable } from '@nestjs/common';
import { IEventRepository } from '../repositories/event.repositories';
import { CreateEventDto } from '../dto/create-event.dto';
import { FormatDate } from 'src/shared/utils/date';

@Injectable()
export class CreateEventUseCase {
  constructor(private readonly eventRepository: IEventRepository) {}

  async execute(data: CreateEventDto) {
    const { name, date } = data;

    const dateFormat = FormatDate(date);

    const [eventExistsWithTheSameName, eventExistSameDate] = await Promise.all([
      this.eventRepository.findUnique(name),
      this.eventRepository.findUnique(dateFormat),
    ]).then();

    if (eventExistsWithTheSameName && eventExistSameDate) {
      return console.log('caiu');
    }
  }
}
