import { Module } from '@nestjs/common';

import { MembersController } from './members.controller';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CreateMemberUseCase } from './useCases/create-member.usecase';
import { UpdateMemberUseCase } from './useCases/update-member.usecase';
import { DeleteMemberUseCase } from './useCases/delete-member.usecase';
import { GetMemberUseCase } from './useCases/get-member.usecase';
import { IMembersRepository } from './repositories/members.repository';
import { MembersRepository } from './repositories/members.prisma.repository';

@Module({
  controllers: [MembersController],
  providers: [
    PrismaService,
    CreateMemberUseCase,
    UpdateMemberUseCase,
    DeleteMemberUseCase,
    GetMemberUseCase,
    {
      provide: IMembersRepository,
      useClass: MembersRepository,
    },
  ],
})
export class MembersModule {}
