import { Injectable } from '@nestjs/common';
import { IAttendanceRepository } from '../repositories/attendance.repository';
import { CreateAttendanceDto } from '../dto/create-attendance.dto';

@Injectable()
export class CreateAttendanceUseCase {
  constructor(private readonly attendanceRepository: IAttendanceRepository) {}

  async execute(data: CreateAttendanceDto) {
    return await this.attendanceRepository.create(data);
  }
}
