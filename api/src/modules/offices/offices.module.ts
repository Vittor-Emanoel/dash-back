import { Module } from '@nestjs/common';
import { OfficesService } from './offices.service';
import { OfficesController } from './offices.controller';

@Module({
  controllers: [OfficesController],
  providers: [OfficesService]
})
export class OfficesModule {}
