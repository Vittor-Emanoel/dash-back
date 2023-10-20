import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APP_GUARD } from '@nestjs/core';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { AuthModule } from './modules/auth/auth.module';
import { ChurchsModule } from './modules/church/churchs.module';
import { EventModule } from './modules/event/event.module';
import { MembersModule } from './modules/member/members.module';
import { OfficesModule } from './modules/office/offices.module';
import { UsersModule } from './modules/user/users.module';
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
