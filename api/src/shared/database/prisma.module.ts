import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from '../repositories/users.respositories';
import { MemberRepository } from '../repositories/members.repositories';
import { ChurchsRepository } from '../repositories/churchs.repositories';
import { AttendanceRepository } from '../repositories/attendance.respositories';
import { EventsRepository } from '../repositories/events.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    MemberRepository,
    ChurchsRepository,
    AttendanceRepository,
    EventsRepository,
  ],
  exports: [
    UserRepository,
    MemberRepository,
    ChurchsRepository,
    AttendanceRepository,
    EventsRepository,
  ],
})
export class DatabaseModule {}
