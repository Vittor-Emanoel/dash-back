import { Module } from '@nestjs/common';
import { AttendencesService } from './services/attendences.service';
import { AttendencesController } from './attendences.controller';
import { ValidateEventService } from './services/validate-event.service';
import { ValidateMemberService } from './services/validate-member.service';

@Module({
  controllers: [AttendencesController],
  providers: [AttendencesService, ValidateEventService, ValidateMemberService],
})
export class AttendencesModule {}
