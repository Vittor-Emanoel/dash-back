import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { MembersRepository } from '../repositories/members.repositories';
import { ChurchsRepository } from '../repositories/churchs.repositories';
import { EventsRepository } from '../repositories/events.repositories';
import { AttendencesRepository } from '../repositories/attendences.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    MembersRepository,
    ChurchsRepository,
    EventsRepository,
    AttendencesRepository,
  ],
  exports: [
    MembersRepository,
    ChurchsRepository,
    EventsRepository,
    AttendencesRepository,
  ],
})
export class DatabaseModule {}
