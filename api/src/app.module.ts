import { Module } from '@nestjs/common';

import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/prisma.module';

import { AuthGuard } from './modules/auth/auth.guard';
import { UsersModule } from './modules/users/users.module';
import { MembersModule } from './modules/members/members.module';
import { ChurchsModule } from './modules/churchs/churchs.module';
import { AttendencesModule } from './modules/attendences/attendences.module';
import { EventsModule } from './modules/events/events.module';
import { OfficesModule } from './modules/offices/offices.module';

@Module({
  imports: [AuthModule, DatabaseModule, UsersModule, MembersModule, ChurchsModule, AttendencesModule, EventsModule, OfficesModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
