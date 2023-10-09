import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CreateAttendanceUseCase } from './useCases/create-attendance.usecase';
import { GetAttendanceUseCase } from './useCases/get-attendance.usecase';
import { IAttendanceRepository } from './repositories/attendance.repository';
import { AttendanceRepository } from './repositories/prisma/attendance.prisma.repository';

@Module({
  controllers: [AttendanceController],
  providers: [
    AttendanceService,
    PrismaService,
    CreateAttendanceUseCase,
    GetAttendanceUseCase,
    {
      provide: IAttendanceRepository,
      useClass: AttendanceRepository,
    },
  ],
})
export class AttendanceModule {}
