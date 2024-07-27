import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { DatabaseModule } from './shared/database/prisma.module';
import { AuthGuard } from './shared/guards/auth.guard';
import { RolesModule } from './modules/roles/roles.module';
import { ChurchsModule } from './modules/churchs/churchs.module';

@Module({
  imports: [DatabaseModule, AuthModule, OrganizationsModule, RolesModule, ChurchsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
