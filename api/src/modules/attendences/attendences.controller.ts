import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  ParseUUIDPipe,
} from '@nestjs/common';
import { AttendencesService } from './services/attendences.service';
import { CreateAttendenceDto } from './dto/create-attendence.dto';
import { UpdateAttendenceDto } from './dto/update-attendence.dto';

@Controller('attendences')
export class AttendencesController {
  constructor(private readonly attendencesService: AttendencesService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createAttendenceDto: CreateAttendenceDto) {
    return this.attendencesService.create(createAttendenceDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.attendencesService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', ParseUUIDPipe) attendenceId: string) {
    return this.attendencesService.findOne(attendenceId);
  }

  @Patch(':id')
  @HttpCode(201)
  update(
    @Param('id', ParseUUIDPipe) attendenceId: string,
    @Body() updateAttendenceDto: UpdateAttendenceDto,
  ) {
    return this.attendencesService.update(attendenceId, updateAttendenceDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') attendenceId: string) {
    return this.attendencesService.remove(attendenceId);
  }
}
