import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class AttendencesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.AttendanceCreateArgs) {
    return this.prismaService.attendance.create(createDto);
  }

  findAll(findAllDto: Prisma.AttendanceFindManyArgs) {
    return this.prismaService.attendance.findMany(findAllDto);
  }

  findUnique(findUniqueDto: Prisma.AttendanceFindUniqueArgs) {
    return this.prismaService.attendance.findUnique(findUniqueDto);
  }
  findFirst(findFirstDto: Prisma.AttendanceFindFirstArgs) {
    return this.prismaService.attendance.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.AttendanceUpdateArgs) {
    return this.prismaService.attendance.update(updateDto);
  }

  delete(deleteDto: Prisma.AttendanceDeleteArgs) {
    return this.prismaService.attendance.delete(deleteDto);
  }
}
