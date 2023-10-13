import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IEventRepository } from '../event/repositories/event.repositories';
import { EventRepository } from '../event/repositories/prisma/event.prisma.repositories';
import { IMembersRepository } from '../member/repositories/members.repository';
import { MembersRepository } from '../member/repositories/prisma/members.prisma.repository';
import { AttendanceController } from './attendance.controller';

import { IAttendanceRepository } from './repositories/attendance.repository';
import { AttendanceRepository } from './repositories/prisma/attendance.prisma.repository';
import { CreateAttendanceUseCase } from './useCases/create-attendance.usecase';
import { DeleteAttendanceUseCase } from './useCases/delete-attendance.usecase';
import { GetAttendanceUseCase } from './useCases/get-attendance.usecase';
import { UpdateAttendanceUseCase } from './useCases/update-attendance.usecase';

@Module({
  controllers: [AttendanceController],
  providers: [
    PrismaService,
    CreateAttendanceUseCase,
    GetAttendanceUseCase,
    UpdateAttendanceUseCase,
    DeleteAttendanceUseCase,
    {
      provide: IAttendanceRepository,
      useClass: AttendanceRepository,
    },
    {
      provide: IEventRepository,
      useClass: EventRepository,
    },
    {
      provide: IMembersRepository,
      useClass: MembersRepository,
    },
  ],
})
export class AttendanceModule {}
