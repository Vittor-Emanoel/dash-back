import { Module } from '@nestjs/common';

import { PrismaService } from 'src/shared/database/prisma.service';
import { MembersController } from './members.controller';
import { IMembersRepository } from './repositories/members.repository';
import { MembersRepository } from './repositories/prisma/members.prisma.repository';
import { CreateMemberUseCase } from './useCases/create-member.usecase';
import { DeleteMemberUseCase } from './useCases/delete-member.usecase';
import { GetAllMembers } from './useCases/get-all-members.usecase';
import { GetMemberUseCase } from './useCases/get-member.usecase';
import { UpdateMemberUseCase } from './useCases/update-member.usecase';

@Module({
  controllers: [MembersController],
  providers: [
    PrismaService,
    CreateMemberUseCase,
    UpdateMemberUseCase,
    DeleteMemberUseCase,
    GetMemberUseCase,
    GetAllMembers,
    {
      provide: IMembersRepository,
      useClass: MembersRepository,
    },
  ],
})
export class MembersModule {}
