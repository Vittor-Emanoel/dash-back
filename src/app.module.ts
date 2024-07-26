import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './shared/database/prisma.module';

import { OrganizationsModule } from './modules/organizations/organizations.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,

    OrganizationsModule,
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
],
})
export class AppModule {}
