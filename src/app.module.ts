import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APP_GUARD } from '@nestjs/core';

import { UsersModule } from './modules/admin/users.module';

import { ChurchsModule } from './modules/church/churchs.module';

import { AuthModule } from './modules/auth/auth.module';
import { MembersModule } from './modules/member/members.module';
import { OfficesModule } from './modules/office/offices.module';
import { ShepherdModule } from './modules/shepherd/shepherd.module';
import { DatabaseModule } from './shared/database/prisma.module';
import { AuthGuard } from './shared/guards/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    DatabaseModule,
    UsersModule,
    ChurchsModule,
    OfficesModule,
    MembersModule,
    ShepherdModule,
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
