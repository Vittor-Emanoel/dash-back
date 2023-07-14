import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from '../repositories/users.respositories';
import { MemberRepository } from '../repositories/members.respositories';

@Global()
@Module({
  providers: [PrismaService, UserRepository, MemberRepository],
  exports: [UserRepository, MemberRepository],
})
export class DatabaseModule {}
