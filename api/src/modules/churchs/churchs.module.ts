import { Module } from '@nestjs/common';
import { ChurchsController } from './churchs.controller';
import { CreateChurchUseCase } from './useCases/create-church.usecase';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IChurchRepository } from './repositories/church.repository';
import { ChurchRepository } from './repositories/prisma/church.prisma.repository';
import { GetChurchUseCase } from './useCases/get-church.usecase';
import { DeleteChurchUseCase } from './useCases/delete-church.usecase';
import { UpdateChurchUseCase } from './useCases/update-church.usecase';

@Module({
  controllers: [ChurchsController],
  providers: [
    PrismaService,
    CreateChurchUseCase,
    GetChurchUseCase,
    DeleteChurchUseCase,
    UpdateChurchUseCase,
    {
      provide: IChurchRepository,
      useClass: ChurchRepository,
    },
  ],
})
export class ChurchsModule {}
