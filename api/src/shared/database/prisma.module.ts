import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

import { IAuthRepository } from 'src/modules/auth/repositories/auth.repository';
import { UsersRepository } from '../repositories/users.repositories';
import { MembersRepository } from '../repositories/members.repositories';
import { ChurchsRepository } from '../repositories/churchs.repositories';
import { EventsRepository } from '../repositories/events.repositories';
import { AttendencesRepository } from '../repositories/attendences.repositories';
import { OfficesRepository } from '../repositories/offices.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MembersRepository,
    ChurchsRepository,
    EventsRepository,
    AttendencesRepository,
    OfficesRepository,
    IAuthRepository,
  ],
  exports: [
    UsersRepository,
    MembersRepository,
    ChurchsRepository,
    EventsRepository,
    AttendencesRepository,
    OfficesRepository,
    IAuthRepository,
  ],
})
export class DatabaseModule {}
