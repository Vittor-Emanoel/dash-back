import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/shared/database/prisma.service';
import { IAttendanceRepository } from '../attendance.repository';
import { CreateAttendanceDto } from '../../dto/create-attendance.dto';
import { Attendance } from 'src/shared/models/Attendance';
import { UpdateAttendanceDto } from '../../dto/update-attendance.dto';

@Injectable()
export class AttendanceRepository implements IAttendanceRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAttendanceDto): Promise<Attendance> {
    const attendance = await this.prisma.attendance.create({
      data,
    });

    return attendance;
  }
  async findUnique(id: string): Promise<Attendance | null> {
    const attendance = await this.prisma.attendance.findUnique({
      where: { id },
    });

    return attendance;
  }

  async findAll() {
    return await this.prisma.attendance.findMany();
  }

  async update(id: string, data: UpdateAttendanceDto): Promise<Attendance> {
    const attendance = await this.prisma.attendance.update({
      data,
      where: { id },
    });
    return attendance;
  }
  async delete(id: string): Promise<Attendance> {
    const attendance = await this.prisma.attendance.delete({
      where: { id },
    });
    return attendance;
  }
}
