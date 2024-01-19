import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';
import { AdminController } from './admin.controller';

import { IStorage } from 'src/shared/providers/storage/storage';
import { SupabaseStorage } from 'src/shared/providers/storage/supabase.storage';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { IAdminsRepository } from './repositories/admin.repository';
import { AdminsRepository } from './repositories/prisma/admin.prisma.repository';
import { GetAllUseCase } from './useCases/get-all.usecase';
import { GetProfileUseCase } from './useCases/get-profile.usecase';

import { PrismaService } from 'src/shared/database/prisma.service';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';

@Module({
  controllers: [AdminController],
  providers: [
    PrismaService,
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
export class AdminModule {}
