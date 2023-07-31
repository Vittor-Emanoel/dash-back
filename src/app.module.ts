import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/prisma.module';
import { MembersModule } from './modules/members/members.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { UsersModule } from './modules/users/users.module';
import { ChurchsModule } from './modules/churchs/churchs.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    MembersModule,
    UsersModule,
    ChurchsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
