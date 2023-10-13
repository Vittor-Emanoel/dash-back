import { Injectable } from '@nestjs/common';
import { IAttendanceRepository } from '../repositories/attendance.repository';

@Injectable()
export class GetAttendanceUseCase {
  constructor(private readonly attendanceRepository: IAttendanceRepository) {}

  async execute() {
    return await this.attendanceRepository.findAll();
  }
}
