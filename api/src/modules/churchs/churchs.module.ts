import { Module } from '@nestjs/common';
import { ChurchsService } from './churchs.service';
import { ChurchsController } from './churchs.controller';

@Module({
  controllers: [ChurchsController],
  providers: [ChurchsService]
})
export class ChurchsModule {}
