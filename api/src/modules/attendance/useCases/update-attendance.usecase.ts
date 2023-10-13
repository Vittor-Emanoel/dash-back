import { NotFoundException } from '@nestjs/common';
import { IEventRepository } from 'src/modules/event/repositories/event.repositories';
import { IMembersRepository } from 'src/modules/member/repositories/members.repository';
import { UpdateAttendanceDto } from '../dto/update-attendance.dto';
import { IAttendanceRepository } from '../repositories/attendance.repository';

export class UpdateAttendanceUseCase {
  constructor(
    private readonly attendanceRepository: IAttendanceRepository,
    private readonly eventRepository: IEventRepository,
    private readonly memberRepository: IMembersRepository,
  ) {}

  async execute(id: string, data: UpdateAttendanceDto) {
    const { eventId, memberId } = data;

    const eventExist = await this.eventRepository.findUnique(eventId);

    const memberExist = await this.memberRepository.findUnique(memberId);

    if (!memberExist) {
      throw new NotFoundException('Member does not exist');
    }
    if (!eventExist) {
      throw new NotFoundException('Event does not exist');
    }

    await this.attendanceRepository.update(id, data);
  }
}
