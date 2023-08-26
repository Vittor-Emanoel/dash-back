import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from '../repositories/users.repositories';
import { MembersRepository } from '../repositories/members.repositories';
import { ChurchsRepository } from '../repositories/churchs.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    MembersRepository,
    ChurchsRepository,
  ],
  exports: [UsersRepository, MembersRepository, ChurchsRepository],
})
export class DatabaseModule {}
