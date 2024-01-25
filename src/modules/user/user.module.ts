import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';

import { IStorage } from 'src/shared/providers/storage/storage';
import { SupabaseStorage } from 'src/shared/providers/storage/supabase.storage';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { UserRepository } from './repositories/prisma/admin.prisma.repository';

import { GetAllUseCase } from './useCases/get-all.usecase';
import { GetProfileUseCase } from './useCases/get-profile.usecase';

import { PrismaService } from 'src/shared/database/prisma.service';
import { IUserRepository } from './repositories/user.repository';
import { ForgotPasswordUseCase } from './useCases/forgot-password.usecase';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    UploadAvatarUserUseCase,
    GetProfileUseCase,
    GetAllUseCase,
    ForgotPasswordUseCase,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    {
      provide: IStorage,
      useClass: SupabaseStorage,
    },
  ],
})
export class UserModule {}
