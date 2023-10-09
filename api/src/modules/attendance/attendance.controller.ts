import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { GetAttendanceUseCase } from './useCases/get-attendance.usecase';
import { CreateAttendanceUseCase } from './useCases/create-attendance.usecase';

@Controller('attendance')
export class AttendanceController {
  constructor(
    private readonly attendanceService: AttendanceService,
    private readonly getAttendanceUseCase: GetAttendanceUseCase,
    private readonly createAttendanceUseCase: CreateAttendanceUseCase,
  ) {}

  @Post()
  create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.createAttendanceUseCase.execute(createAttendanceDto);
  }

  @Get()
  findAll() {
    return this.getAttendanceUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ) {
    return this.attendanceService.update(+id, updateAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceService.remove(+id);
  }
}
