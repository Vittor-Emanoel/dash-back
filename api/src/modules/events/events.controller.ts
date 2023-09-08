import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', ParseUUIDPipe) eventId: string) {
    return this.eventsService.findOne(eventId);
  }

  @Patch(':id')
  @HttpCode(201)
  update(@Param('id') eventId: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(eventId, updateEventDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') eventId: string) {
    return this.eventsService.remove(eventId);
  }
}
