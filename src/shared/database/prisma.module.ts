import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AttendencesRepository } from '../repositories/attendences.repositories';

@Global()
@Module({
  providers: [PrismaService, AttendencesRepository],
  exports: [AttendencesRepository],
})
export class DatabaseModule {}
