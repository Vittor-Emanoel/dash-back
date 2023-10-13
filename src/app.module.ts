import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/prisma.module';
import { AuthGuard } from './modules/auth/auth.guard';
import { UsersModule } from './modules/user/users.module';
import { ChurchsModule } from './modules/church/churchs.module';
import { OfficesModule } from './modules/office/offices.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { EventModule } from './modules/event/event.module';
import { MembersModule } from './modules/member/members.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    DatabaseModule,
    UsersModule,
    ChurchsModule,
    OfficesModule,
    AttendanceModule,
    MembersModule,
    EventModule,
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
