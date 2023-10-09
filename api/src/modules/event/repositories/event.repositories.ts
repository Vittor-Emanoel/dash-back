import { Event } from 'src/shared/models/Event';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

export abstract class IEventRepository {
  abstract findUnique(id: string): Promise<Event | null>;
  abstract findAll(): Promise<Event[] | null>;
  abstract create(data: CreateEventDto): Promise<Event>;
  abstract update(id: string, data: UpdateEventDto): Promise<Event>;
  abstract delete(id: string): Promise<Event>;
}
