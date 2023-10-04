import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { UploadRoleUseCase } from './useCases/update-role.usecase';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    UploadRoleUseCase,
  ],
})
export class UsersModule {}
