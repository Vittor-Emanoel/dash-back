import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';
import { UsersController } from './users.controller';

import { PrismaService } from 'src/shared/database/prisma.service';
import { IStorage } from 'src/shared/providers/storage/storage';
import { SupabaseStorage } from 'src/shared/providers/storage/supabase.storage';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { AdminsRepository } from './repositories/prisma/user.prisma.repository';
import { IAdminsRepository } from './repositories/user.repository';
import { GetAllUseCase } from './useCases/get-all.usecase';
import { GetProfileUseCase } from './useCases/get-profile.usecase';
import { UploadRoleUseCase } from './useCases/update-role.usecase';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    UploadRoleUseCase,
    UploadAvatarUserUseCase,
    GetProfileUseCase,
    GetAllUseCase,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: IAdminsRepository,
      useClass: AdminsRepository,
    },
    {
      provide: IStorage,
      useClass: SupabaseStorage,
    },
  ],
})
export class UsersModule {}
