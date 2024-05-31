import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APP_GUARD } from '@nestjs/core';

import { ChurchsModule } from './modules/church/churchs.module';

import { AuthModule } from './modules/auth/auth.module';
import { MembersModule } from './modules/member/members.module';
import { OfficesModule } from './modules/office/offices.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './shared/database/prisma.module';
import { AuthGuard } from './shared/guards/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    DatabaseModule,
    UserModule,
    ChurchsModule,
    OfficesModule,
    MembersModule,
    OrganizationModule,
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
