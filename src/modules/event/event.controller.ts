import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';

import { UpdateEventDto } from './dto/update-event.dto';
import { CreateEventUseCase } from './useCases/create-event.usecase';
import { DeleteEventUseCase } from './useCases/delete-event.usecase';
import { GetEventsUseCase } from './useCases/get-events.usecase';
import { UpdateEventUseCase } from './useCases/update-event.usecase';

@Controller('events')
export class EventController {
  constructor(
    private readonly createEventUseCase: CreateEventUseCase,
    private readonly getEventsUseCase: GetEventsUseCase,
    private readonly updateEventsUseCase: UpdateEventUseCase,
    private readonly deleteEventsUseCase: DeleteEventUseCase,
  ) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.createEventUseCase.execute(createEventDto);
  }

  @Get()
  findAll() {
    return this.getEventsUseCase.execute();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.updateEventsUseCase.execute(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteEventsUseCase.execute(id);
  }
}
