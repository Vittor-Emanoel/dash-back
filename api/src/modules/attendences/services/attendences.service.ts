import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttendenceDto } from '../dto/create-attendence.dto';
import { UpdateAttendenceDto } from '../dto/update-attendence.dto';
import { AttendencesRepository } from 'src/shared/repositories/attendences.repositories';
import { ValidateMemberService } from './validate-member.service';
import { ValidateEventService } from './validate-event.service';

@Injectable()
export class AttendencesService {
  constructor(
    private readonly attendenceRepo: AttendencesRepository,
    private readonly validateMember: ValidateMemberService,
    private readonly validateEvent: ValidateEventService,
  ) {}

  async create(createAttendenceDto: CreateAttendenceDto) {
    const { memberId, eventId, attendanceStatus } = createAttendenceDto;

    await this.validateMember.validate(memberId);

    await this.validateEvent.validate(eventId);

    const attendence = await this.attendenceRepo.create({
      data: {
        memberId,
        eventId,
        attendanceStatus,
      },
    });

    return attendence;
  }

  async findAll() {
    return this.attendenceRepo.findAll({
      select: {
        id: true,
        event: {
          select: {
            id: true,
            name: true,
            date: true,
          },
        },
        member: {
          select: {
            id: true,
            fullName: true,
            office: true,
            church: {
              select: {
                name: true,
              },
            },
          },
        },
        attendanceStatus: true,
      },
    });
  }

  async findOne(attendenceId: string) {
    const attendence = await this.attendenceRepo.findUnique({
      where: { id: attendenceId },
      select: {
        event: {
          select: {
            name: true,
            date: true,
          },
        },
        member: {
          select: {
            fullName: true,
            office: {
              select: {
                name: true,
              },
            },
            church: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!attendence) {
      throw new NotFoundException('Attendence does not exist');
    }

    return attendence;
  }

  async update(attendenceId: string, updateAttendenceDto: UpdateAttendenceDto) {
    const { memberId, eventId, attendanceStatus } = updateAttendenceDto;

    await this.validateEvent.validate(eventId);
    await this.validateMember.validate(memberId);

    const attendence = await this.attendenceRepo.update({
      where: { id: attendenceId },
      data: {
        memberId,
        eventId,
        attendanceStatus,
      },
    });

    return attendence;
  }

  async remove(attendenceId: string) {
    const attendence = await this.attendenceRepo.findUnique({
      where: { id: attendenceId },
    });

    if (!attendence) {
      throw new NotFoundException('This is attendence not exists');
    }

    await this.attendenceRepo.delete({
      where: { id: attendenceId },
    });

    return;
  }
}
