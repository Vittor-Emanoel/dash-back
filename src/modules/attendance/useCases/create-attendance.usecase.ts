import { Injectable, NotFoundException } from '@nestjs/common';
import { IEventRepository } from 'src/modules/event/repositories/event.repositories';
import { IMembersRepository } from 'src/modules/member/repositories/members.repository';
import { CreateAttendanceDto } from '../dto/create-attendance.dto';
import { IAttendanceRepository } from '../repositories/attendance.repository';

@Injectable()
export class CreateAttendanceUseCase {
  constructor(
    private readonly attendanceRepository: IAttendanceRepository,
    private readonly eventRepository: IEventRepository,
    private readonly memberRepository: IMembersRepository,
  ) {}

  async execute(data: CreateAttendanceDto) {
    const { eventId, memberId } = data;

    const eventExist = await this.eventRepository.findUnique(eventId);

    const memberExist = await this.memberRepository.findUnique(memberId);

    if (!memberExist) {
      throw new NotFoundException('Member does not exist');
    }
    if (!eventExist) {
      throw new NotFoundException('Event does not exist');
    }

    await this.attendanceRepository.create(data);
  }
}
