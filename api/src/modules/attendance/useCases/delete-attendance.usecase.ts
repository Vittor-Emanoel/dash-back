import { Injectable, NotFoundException } from '@nestjs/common';
import { IAttendanceRepository } from '../repositories/attendance.repository';

@Injectable()
export class DeleteAttendanceUseCase {
  constructor(private readonly attendanceRepository: IAttendanceRepository) {}

  async execute(id: string) {
    const attendanceOfMemberExists = await this.attendanceRepository.findUnique(
      id,
    );

    if (!attendanceOfMemberExists) {
      throw new NotFoundException('Attendance does not exist');
    }

    await this.attendanceRepository.delete(id);
  }
}
