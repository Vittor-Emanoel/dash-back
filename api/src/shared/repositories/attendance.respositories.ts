import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class AttendanceRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.AttendanceCreateArgs) {
    return this.prismaService.attendance.create(createDto);
  }

  findById(findyDto: Prisma.AttendanceFindFirstArgs) {
    return this.prismaService.attendance.findFirst(findyDto);
  }
}
