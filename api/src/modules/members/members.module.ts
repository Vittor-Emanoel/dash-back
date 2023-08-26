import { Module } from '@nestjs/common';
import { MembersService } from './services/members.service';
import { MembersController } from './members.controller';
import { ValidateChurchService } from './services/validate-church.service';

@Module({
  controllers: [MembersController],
  providers: [MembersService, ValidateChurchService],
})
export class MembersModule {}
