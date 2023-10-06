import { Module } from '@nestjs/common';
import { OfficesController } from './offices.controller';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IOfficeRepository } from './repositories/office-repository';
import { OfficeRepository } from './repositories/prisma/office.prisma.repository';
import { CreateOfficeUseCase } from './useCases/create-office.usecase';
import { DeleteOfficeUseCase } from './useCases/delete-office.usecase';
import { GetOfficeUseCase } from './useCases/get-office.usecase';
import { UpdateOfficeUseCase } from './useCases/update-office.usecase';

@Module({
  controllers: [OfficesController],
  providers: [
    PrismaService,
    CreateOfficeUseCase,
    DeleteOfficeUseCase,
    GetOfficeUseCase,
    UpdateOfficeUseCase,
    {
      provide: IOfficeRepository,
      useClass: OfficeRepository,
    },
  ],
})
export class OfficesModule {}
