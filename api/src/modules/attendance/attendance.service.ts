import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { AttendanceRepository } from 'src/shared/repositories/attendance.respositories';

@Injectable()
export class AttendanceService {
  constructor(private readonly attendanceRepo: AttendanceRepository) {}

  async create(createAttendanceDto: CreateAttendanceDto) {
    const { memberId, eventId, present } = createAttendanceDto;

    const member = await this.attendanceRepo.findById({
      where: { memberId },
    });

    if (member) {
      throw new ConflictException('This member already exists');
    }

    const memberPresent = await this.attendanceRepo.create({
      data: {
        memberId,
        eventId,
        present,
      },
    });

    return memberPresent;
  }
}
