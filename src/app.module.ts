import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './shared/database/prisma.module';
import { MembersModule } from './modules/members/members.module';

@Module({
  imports: [AuthModule, DatabaseModule, MembersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
