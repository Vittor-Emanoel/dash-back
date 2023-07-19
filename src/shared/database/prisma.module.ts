import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from '../repositories/users.respositories';
import { MemberRepository } from '../repositories/members.repositories';
import { ChurchsRepository } from '../repositories/churchs.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    MemberRepository,
    ChurchsRepository,
  ],
  exports: [UserRepository, MemberRepository, ChurchsRepository],
})
export class DatabaseModule {}
