import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { DatabaseModule } from './shared/database/prisma.module';
import { AuthGuard } from './shared/guards/auth.guard';

@Module({
  imports: [DatabaseModule, AuthModule, OrganizationsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
