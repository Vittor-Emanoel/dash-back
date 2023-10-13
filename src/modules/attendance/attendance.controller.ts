import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { CreateAttendanceUseCase } from './useCases/create-attendance.usecase';
import { DeleteAttendanceUseCase } from './useCases/delete-attendance.usecase';
import { GetAttendanceUseCase } from './useCases/get-attendance.usecase';
import { UpdateAttendanceUseCase } from './useCases/update-attendance.usecase';

@Controller('attendances')
export class AttendanceController {
  constructor(
    private readonly getAttendanceUseCase: GetAttendanceUseCase,
    private readonly createAttendanceUseCase: CreateAttendanceUseCase,
    private readonly updateAttendanceUseCase: UpdateAttendanceUseCase,
    private readonly deleteAttendanceUseCase: DeleteAttendanceUseCase,
  ) {}

  @Post()
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.createAttendanceUseCase.execute(createAttendanceDto);
  }

  @Get()
  findAll() {
    return this.getAttendanceUseCase.execute();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ) {
    return this.updateAttendanceUseCase.execute(id, updateAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteAttendanceUseCase.execute(id);
  }
}
