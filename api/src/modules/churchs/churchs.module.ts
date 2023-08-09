import { Module } from '@nestjs/common';
import { ChurchsService } from './churchs.service';
import { ChurchsController } from './churchs.controller';
import { ChurchsRepository } from 'src/shared/repositories/churchs.repositories';

@Module({
  controllers: [ChurchsController],
  providers: [ChurchsService],
})
export class ChurchsModule {}
