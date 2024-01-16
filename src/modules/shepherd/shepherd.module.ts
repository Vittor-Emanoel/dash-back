import { Module } from '@nestjs/common';
import { ShepherdService } from './shepherd.service';
import { ShepherdController } from './shepherd.controller';

@Module({
  controllers: [ShepherdController],
  providers: [ShepherdService]
})
export class ShepherdModule {}
