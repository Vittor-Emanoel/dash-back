import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { APP_GUARD } from '@nestjs/core';

import { UploadRoleUseCase } from './useCases/update-role.usecase';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';
import { IUsersRepository } from './repositories/user.repository';
import { UsersRepository } from './repositories/prisma/user.prisma.repository';
import { IStorage } from 'src/shared/providers/storage/storage';
import { SupabaseStorage } from 'src/shared/providers/storage/supabase.storage';
import { PrismaService } from 'src/shared/database/prisma.service';
import { GetProfileUseCase } from './useCases/get-profile.usecase';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  controllers: [UsersController],
  providers: [
    PrismaService,
    UploadRoleUseCase,
    UploadAvatarUserUseCase,
    GetProfileUseCase,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: IUsersRepository,
      useClass: UsersRepository,
    },
    {
      provide: IStorage,
      useClass: SupabaseStorage,
    },
  ],
})
export class UsersModule {}
